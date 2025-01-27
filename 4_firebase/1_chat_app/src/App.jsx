import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/index";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  // google hesabı ile oturum aç
  const handleLogin = () => {
    signInWithPopup(auth, provider) //
      .then((res) => setUser(res.user));
  };

  return (
    <div>
      <h1>İsim: {user?.displayName}</h1>
      <h1>Mail: {user?.email}</h1>

      <button onClick={handleLogin}>
        <h2>Google ile Giriş Yap</h2>
      </button>
    </div>
  );
};

export default App;
