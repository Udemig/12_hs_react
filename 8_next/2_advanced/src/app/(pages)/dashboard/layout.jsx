// @ ile başlayan slot isimli sayfalar
// layout'a prop olara gelir

import Link from "next/link";

const DashboardLayout = ({ children, notification, revenue, users }) => {
  return (
    <div className="p-5 md:p-10flex flex-col items-center justify-center h-screen text-2xl">
      <div className="text-blue-500 underline flex justify-between w-full">
        <Link href="/dashboard">Dashboard'a Dön</Link>
        <Link href="/dashboard/settings">Ayarlar'a Git</Link>
      </div>

      <h1 className="my-5">Dashboard Layout</h1>

      {children}

      <div className="w-full">
        <div className="box flex gap-5 md:gap-10 mt-10">
          <div className="box flex-1">{users}</div>
          <div className="box flex-1">{revenue}</div>
        </div>

        <div className="box">{notification}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
