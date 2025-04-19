import { getProduct } from "@/app/service/product-service";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaLeaf, FaShoppingBasket } from "react-icons/fa";
import { TbWeight } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import OrderButtons from "@/app/components/detail/order-buttons";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GroceryPage({ params }: Props) {
  const { id } = await params;
  const { grocery } = await getProduct(id);

  const info = [
    {
      title: "Kategori",
      value: grocery.category,
    },
    {
      title: "Menşei",
      value: grocery.origin,
    },
    {
      title: "Tazelik",
      value: `${grocery.expiryDays} gün`,
    },
    {
      title: "Organik",
      value: grocery.isOrganic ? "Evet" : "Hayır",
    },
    {
      title: "Birim",
      value: grocery.unit,
    },
  ];

  return (
    <div className="text-black container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="text-green-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Ana Sayfaya Dön</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96">
            <Image
              src={grocery.photo}
              alt={grocery.name}
              fill
              className="object-cover w-full h-full"
            />
            {grocery.isOrganic && (
              <div className="absolute top-2 left-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full flex items-center gap-1">
                <FaLeaf />
                <span>Organik</span>
              </div>
            )}
          </div>

          <div className="md:w-1/2 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {grocery.name}
                </h1>
                <p className="text-gray-600">{grocery.origin}</p>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-gray-700">
                <TbWeight />
                <span>{grocery.unit}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-3xl font-bold text-green-600">
                {grocery.price}₺
              </p>
              <p className="text-gray-500">KDV Dahil</p>
            </div>

            <div className="my-6 h-px bg-gray-200"></div>

            <p className="text-gray-700 mb-4">{grocery.description}</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <MdOutlineLocalShipping className="text-xl text-green-600" />
                <span>Aynı gün teslimat imkanı</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaShoppingBasket className="text-xl text-green-600" />
                <span>
                  Stok Durumu{" "}
                  {grocery.stock > 0
                    ? `${grocery.stock} kilo/adet mevcut`
                    : `Stokta yok`}
                </span>
              </div>

              {grocery.nutritionalValue && (
                <div className="text-gray-700 mt-4">
                  <h3 className="font-medium mb-1">Besin Değerleri</h3>
                  <p>{grocery.nutritionalValue}</p>
                </div>
              )}
            </div>

            <OrderButtons grocery={grocery} />
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Ürün Bilgileri</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {info.map((item, key) => (
              <div key={key} className="bg-gray-50 p-3 rounded-lg">
                <h3 className="text-sm text-gray-500">{item.title}</h3>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
