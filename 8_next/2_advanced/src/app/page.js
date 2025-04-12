import Image from "next/image";
import localImage from "./assets/house.jpg";

export default function Home() {
  const remoteImageUrl =
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1200";

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Local Resim (İndirdiğimiz)</h1>
        <h5>unoptimized</h5>
        <Image src={localImage} unoptimized alt="house" className="rounded" />

        <h5>quality 40</h5>
        <Image
          src={localImage}
          quality={99}
          alt="house"
          className="rounded"
          placeholder="blur"
          priority
        />
      </div>

      <div className="flex flex-col gap-10 w-full">
        <h1 className="text-2xl font-semibold">Remote Resim (Url ile)</h1>

        <p>sabit boyutlar</p>
        <Image src={remoteImageUrl} alt="deneme" width={400} height={800} />

        <p>responsive</p>
        <div className="relative w-full h-70">
          <Image src={remoteImageUrl} alt="ay" fill />
        </div>
      </div>
    </div>
  );
}
