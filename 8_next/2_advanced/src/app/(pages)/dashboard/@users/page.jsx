import delay from "@/app/utils/delay";

const Users = async () => {
  await delay(2000);
  throw new Error("Error");

  return (
    <div>
      <h1 className="font-semibold">Kullanıcı Tablosu</h1>
      <p>Kullanıcı-1</p>
      <p>Kullanıcı-2</p>
      <p>Kullanıcı-3</p>
      <p>Kullanıcı-4</p>
    </div>
  );
};

export default Users;
