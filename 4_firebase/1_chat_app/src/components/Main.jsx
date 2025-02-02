import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import Message from "./Message";
import Arrow from "./Arrow";

const Main = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const lastMsgRef = useRef();
  const containerRef = useRef();

  // mesaj verilieri firestore'dan al
  useEffect(() => {
    // abone olunacak kolleksiyonun referansını
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(
      collectionRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // verdiğimiz kolleksiyona bir dinleyici yerleştirip kolleksiyondaki her güncellemede güncel verileri fonksiyona data parametresi olarak aktarır
    const unsub = onSnapshot(q, (data) => {
      // mesajların geçici olarak tutulduğu dizi
      const temp = [];

      // bütün belgelerin içindeki verilere erişip geçici diziye>
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });

      // mesaj verilerini stat'e aktar
      setMessages(temp);
    });

    // component ekrandan gittiğinde aboneliği sonlandır
    return () => unsub();
  }, []);

  // her yeni mesaj geldiğinde ekranı aşşağıya kaydır
  useEffect(() => {
    if (messages.length > 0) {
      const lastMsg = messages[messages.length - 1];

      if (lastMsg.author.id === auth.currentUser.uid) {
        // eğer son mesajı oturumu açık kullanıcı attıysa attıysa her koşulda en aşşağıya kaydır:
        scrollToBottom();
      } else if (isAtBottom) {
        // eğer son mesajı farklı bir kullanıcı attıysa sadece isAtBottom true ise en aşşağıya kaydır
        scrollToBottom();
      }
    }
  }, [messages]);

  // en aşşağıya kaydır
  const scrollToBottom = () => {
    lastMsgRef.current.scrollIntoView();
  };

  // scroll yukarıda mı aşşağıda mı hesapla
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 200);
  };

  console.log(messages[0].author);

  return (
    <main
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto relative"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message key={key} data={i} />)
      )}

      <div ref={lastMsgRef} />

      <Arrow isAtBottom={isAtBottom} handleScroll={scrollToBottom} />
    </main>
  );
};

export default Main;
