import delay from "@/app/utils/delay";

const Notification = async () => {
  await delay(1000);

  return (
    <div>
      <h1 className="font-semibold">Bildirimler Sayfası</h1>
      <p>Bildirim-1</p>
      <p>Bildirim-2</p>
      <p>Bildirim-3</p>
      <p>Bildirim-4</p>
    </div>
  );
};

export default Notification;
