import { useState } from "react";
import Form from "./components/form";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>

      <br />
      <br />

      <Form />
    </div>
  );
};

export default App;
