import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoginPage from "./pages/LoginPage";
import RoomPage from "./pages/RoomPage";
import { useEffect, useState } from "react";
import ChatPage from "./pages/ChatPage";
import Loader from "./components/Loader";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // kullanıcı oturumu her değiştiğinde güncel bilgileri getirir
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // kullanıcı sayfadan ayrılınca oturumu izlemeyi durdur
    return () => unsub();
  }, []);

  // kullanıcı verisi henüz yüklenmediyse
  if (user === undefined) {
    return <Loader />;
  }

  // kullanıcı oturum açmadıysa:
  if (user === null) return <LoginPage />;

  // kullanıcı oturum açtıysa ve oda seçidiyse:
  if (room) return <ChatPage room={room} setRoom={setRoom} />;

  // kullanıcı oturum açtıysa ve oda seçilmediyse:
  return <RoomPage setRoom={setRoom} />;
};

export default App;
