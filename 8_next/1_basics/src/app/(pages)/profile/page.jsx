import delay from "../../utils/delay";

export const metadata = {
  title: "Profil",
  description: "Profil sayfası",
};

export default async function Profile() {
  await delay(2000);

  return (
    <div className="page">
      <h1>Profil Sayfası</h1>
    </div>
  );
}
