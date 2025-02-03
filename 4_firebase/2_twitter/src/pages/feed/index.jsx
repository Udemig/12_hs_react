import { signOut } from "firebase/auth";
import { auth } from "../../firebase/index";

const Feed = () => {
  console.log("OTURUMU AÇIK", auth.currentUser?.displayName);

  return (
    <div className="grid place-items-center h-screen">
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default Feed;
