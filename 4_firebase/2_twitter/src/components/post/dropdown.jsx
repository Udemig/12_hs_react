import { MdDelete, MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase/index";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişinin id'si aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // sil butonına tıklanınca
  const handleDelete = () => {
    // kullanıcının onayını al
    if (!confirm("Kaldırmak istediğinizden emin misiniz?")) return;

    // silinecek dökümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    // dökümanı sil
    deleteDoc(docRef) //
      .then(() => toast.info("Tweet akıştan kaldırıldı"));
  };

  return (
    isOwn && (
      <>
        <label class="popup">
          <input type="checkbox" ref={checkboxRef} />
          <div class="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav class="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button
                  onClick={() => {
                    // modal'ı aç
                    setIsOpen(true);
                    // dropdown'ı kapat
                    checkboxRef.current.checked = false;
                  }}
                >
                  <MdEdit className="text-blue-500 text-base" />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <MdDelete className="text-red-500 text-base" />
                  <span>Kaldır</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal isOpen={isOpen} tweet={tweet} close={() => setIsOpen(false)} />
      </>
    )
  );
};

export default Dropdown;
