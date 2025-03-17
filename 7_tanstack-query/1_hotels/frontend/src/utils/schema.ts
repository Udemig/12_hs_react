import * as yup from "yup";

// regex: regular expression
// sadece harf ve boşluk karakteri kabul edilir
const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü ]+$/;

// yup: schema oluşturma
// formdaki inputlardan alınan verilerin geçerli olması için gerekli koşulları ifade eden bir şema oluştur
export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Başlık zorunludur")
    .min(3, "Başlık 3 karakterden uzun olmalıdır")
    .matches(nameRegex, "Başlık yalnızca harf karakteri içerebilir"),

  location: yup
    .string()
    .required("Lokasyon zorunludur")
    .min(3, "Lokasyon 3 karakterden uzun olmalıdır"),
  address: yup
    .string()
    .required("Adres zorunludur")
    .min(3, "Adres 3 karakterden uzun olmalıdır"),
  description: yup
    .string()
    .required("Açıklama zorunludur")
    .min(10, "Açıklama 10 karakterden uzun olmalıdır"),
  amenities: yup.string().required("Hizmetler zorunludur"),
  rating: yup
    .number()
    .required("Puan zorunludur")
    .min(1, "Puan 1-5 arası olmalıdır")
    .max(5, "Puan 1-5 arası olmalıdır"),
  price_per_night: yup
    .number()
    .required("Fiyat zorunludur")
    .min(20, "Fiyat 20-1000 arası olmalıdır")
    .max(1000, "Fiyat 20-1000 arası olmalıdır"),
});
