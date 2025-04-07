import delay from "../../utils/delay";

export default async function Login() {
  await delay(3000);

  return (
    <div className="page">
      <h1>Login Sayfası</h1>
    </div>
  );
}
