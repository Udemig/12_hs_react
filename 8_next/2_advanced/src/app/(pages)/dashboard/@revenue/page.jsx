import delay from "@/app/utils/delay";

const Revenue = async () => {
  await delay(2000);

  return (
    <div>
      <h1 className="font-semibold">Gelir/Gider Tablosu</h1>

      <p>+5000</p>
      <p>-1000</p>
      <p>+1000</p>
      <p>-500</p>
    </div>
  );
};

export default Revenue;
