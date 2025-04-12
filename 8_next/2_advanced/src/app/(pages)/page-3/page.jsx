import Link from "next/link";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Page - 3</h1>

        <Link href="/page-4" className="text-blue-500 underline text-center">
          Page - 4'e Git
        </Link>
      </div>
    </div>
  );
};

export default Page;
