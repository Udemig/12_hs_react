# Kütüphaneler

- react-router-dom
- react-toastify
- react-icons
- moment
- uuid
- firebase
- tailwindcss

# Authentication (Kimlik Doğrulama)

- Bir kullanıcının kimliğini doğrulama
- Kullanıcı adı/şifre, parmak izi, google hesabı vb. yöntemlerle kullanıcının kimliğini doğrulayabiliriz.

# Authorization (Yetkilendirme)

- Bir kullanıcının sistemin kaynaklarına / işlevlerine / sayfalarına erişimini yönettiğimiz süreçtir.
- Yani kimlik doğrulama başarılı/başarız olduktan sonra kullanıcının ne kadar erişime sahip olucağını belirleme sürecidir.

- Kullanıcının:
- Oturumu kapalıysa > Login Sayfası
- Oturumu açıksa ama Eposta doğrulanmadıysa > Haberler
- Oturumu açıksa ve Eposta doğrulandıysa > Feed Profile Setting
- Oturumu açıksa ve Rolü Admin > AdminPage
