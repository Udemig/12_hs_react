import { BiSolidOffer } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Categories() {
  const options = [
    {
      icon: <MdLocalShipping className="text-4xl text-blue-600" />,
      title: "Hızlı Teslimat",
      description: "Aynı gün teslimat",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Taze Ürünler",
      description: "Günlük taze ürünler",
      bgColor: "bg-green-50",
    },
    {
      icon: <BiSolidOffer className="text-4xl text-orange-600" />,
      title: "Hızlı Teslimat",
      description: "Aynı gün teslimat",
      bgColor: "bg-orange-50",
    },
    {
      icon: <MdLocalShipping className="text-4xl text-purple-600" />,
      title: "Hızlı Teslimat",
      description: "Aynı gün teslimat",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {options.map((option, key) => (
        <div
          key={key}
          className={`flex items-center gap-3 p-4 rounded-lg ${option.bgColor}`}
        >
          {option.icon}

          <div>
            <h3 className="font-medium text-gray-800">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
