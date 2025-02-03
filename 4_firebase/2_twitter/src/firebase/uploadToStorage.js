import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./index";
import { v4 } from "uuid";

// parametre olarak aldığı dosya bir resim ise storage'a yükle ve geriye resmin url'ini return etsin
const uploadToStorage = async (file) => {
  //1) dosya yoksa veta dosya resim değilse fonksiyonu durdur
  if (!file || !file.type.startsWith("image")) return null;

  //2) maksimum dosya boyutu 2mb geçiyorsa hata fırlat
  if (file.size > 2097152) {
    toast.error("Lütfen 2mb'ın altında bir medya yükleyin");
    throw new Error("Medya içeriği sınırı aşıyor");
  }

  //3) dosyanın yükleniceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  //4) referanısnı oluşturduğumz konuma dosyayı yükle
  await uploadBytes(imageRef, file);

  //5) storage'a yüklenen dosyanın url'ini al ve return et
  const url = await getDownloadURL(imageRef);

  return url;
};

export default uploadToStorage;
