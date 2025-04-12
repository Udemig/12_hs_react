import Link from "next/link";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Page - 2</h1>

        <Link href="/page-1" className="text-red-500 underline text-center">
          Page - 1'e Dön
        </Link>
      </div>
    </div>
  );
};

export default Page;
