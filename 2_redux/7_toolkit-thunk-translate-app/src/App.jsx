import { useDispatch } from "react-redux";
import Button from "./components/Button";
import LanguageSelect from "./components/language-select";
import TextContainer from "./components/text-container";
import { useEffect } from "react";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        <LanguageSelect />

        <TextContainer />

        <Button />
      </div>
    </div>
  );
};

export default App;
