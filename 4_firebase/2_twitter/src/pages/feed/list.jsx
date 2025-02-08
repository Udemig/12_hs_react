import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "../../components/loader/index";
import Post from "../../components/post";
import PageLoader from "../../components/loader/page-loader";

const List = () => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "tweets");

    // abonelik ayarlarını yap
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    // kolleksiyona abone ol
    const unsub = onSnapshot(q, ({ docs }) => {
      const temp = [];

      docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setTweets(temp);
    });

    // aboneliği durdur
    return () => unsub();
  }, []);

  return !tweets ? <Loader designs="my-40" /> : tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />);
};

export default List;
