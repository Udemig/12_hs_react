import delay from "../../../utils/delay";

// dinamik metadata tanımı
export const generateMetadata = async ({ params }) => {
  const { productId } = await params;

  return {
    title: `Ürün ${productId}`,
    description: `Ürün ${productId} detayı`,
  };
};

// statik metadata tanımı
// export const metadata = {
//   title: "Ürün Detayı",
//   description: "Ürün detayı sayfası",
// };

//* Dinamik sayfalarda urldeki parametrelere erişmek için herhangi bir methoda veya hooka ihtiyaç duymadan url'deki parameterler component'a prop olarak gelir.
//* Parametre propları asenkron şekilde geldiği için async await ile erişebiliriz.
export default async function Product({ params }) {
  await delay(2000);
  const { productId } = await params;

  return (
    <div className="page">
      <div>
        <p className="text-center mb-4">{productId}</p>
        <h1>Ürün DETAY Sayfası</h1>
      </div>
    </div>
  );
}
