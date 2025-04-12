import { data } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Wonder = async ({ params }) => {
  // urldeki id parametresini al
  const { id } = await params;

  // data'dan id'ye göre bir item bul
  const wonder = data.find((item) => item.id === id);

  // item yoksa 404 sayfası göster
  if (!wonder) {
    return notFound();
  }

  return (
    <div className="min-h-screen p-5 md:p-10 mx-auto text-3xl">
      <div className="w-4/5 lg:w-1/2 mx-auto">
        <Link
          href="."
          className="text-lg border p-2 px-4 rounded-md hover:bg-zinc-200/20 transition"
        >
          Geri
        </Link>

        <h1 className="text-center text-5xl font-bold mt-10 mb-5">
          {wonder.name}
        </h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="w-full aspect-square object-cover rounded-md"
        />

        <div className="my-10">
          <h3 className="text-2xl font-bold">Fotoğraçı</h3>
          <span className="text-zinc-500">{wonder.photographer}</span>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-bold">Lokasyon</h3>
          <span className="text-zinc-500">{wonder.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Wonder;
