import Form from "../../components/feed-form";

const Main = ({ user }) => {
  return (
    <main className="border border-tw-gray overflow-y-auto">
      <header className="border-b border-tw-gray p-4 font-bold">
        Anasayfa
      </header>

      <Form user={user} />
    </main>
  );
};

export default Main;
