# Kütüphaneler

- React
- Tailwind CSS
- React Router DOM - react-router-dom
- Tanstack Query - @tanstack/react-query
- Formik - formik
- Yup - yup
- Axios - axios
- React Icons - react-icons
- React Toastify - react-toastify

# Projeyi çalıştırmak için

1. Projeyi clonelayın.
2. `cd backend` ile backend klasörüne gidin.
3. Backend bağımlılıklarını yüklemek için `npm install` yazın.
4. Backend'i çalıştırmak için `npm start` yazın.
5. yeni terminalde `cd frontend` ile frontend klasörüne gidin.
6. Frontend bağımlılzbıklarını yüklemek için `npm install` yazın.
7. Projeyi çalıştırmak için `npm run dev` yazın.

# Tanstack Query

- React projelerinde api'dan gelen cevab'ın state'ini daha kolay ve optimize bir şekilde yönetmek için kullanılır.

### Özellikler

- Otomatik olarak loading,error,data state'lerini yönetir.
- Otomatik olarak cache işlemi uygular.
- Api isteği başarısız olursa emin olmak için 3 kez daha dener
- Component'lardaki karşılıklığı azaltır
- Apı'dan gelen verileri için Redux ihtiyacı olmaz.
- Birden fazla component'ta aynı api isteğini atarsanız, sadece bir kere api isteği atılı, gelen cevap cache'de tutulur ve diğer component'larda cache'ten okunur.

### Tanstack Query Hook'ları

- useQuery
- useMutation
