import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p role="p" className={isOpen ? "show" : "hide"}>
        Birim testi, yazılım programlamasında bir tasarım ve geliştirme yöntemidir. Bu yöntemde yazılımcı yazılım kodunu oluşturan
        birimlerin kullanıma hazır olduğuna iknâ olur. Birim, bir bilgisayar uygulamasında test edilebilecek en küçük bölüme denir.
      </p>
    </div>
  );
};

export default Accordion;
