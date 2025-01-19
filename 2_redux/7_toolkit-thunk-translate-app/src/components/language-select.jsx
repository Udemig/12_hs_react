import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";
import { translateText } from "../redux/actions";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { isLoading, languages } = useSelector((store) => store.language);
  const { sourceLang, targetLang, textToTranslate } = useSelector(
    (store) => store.translate
  );

  /*
   * languages dizisinde nesneler code ve name değerlerinden oluşuyor
   * react select ise option'ların value ve label değerlerinde oluşan nesneler olmasını istiyor
   * bizde languages dizisini dönüp react-select formatına getirdi
   */
  const formatted = languages.map((item) => ({
    value: item.code,
    label: item.name,
  }));

  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        options={formatted.filter((i) => i.value !== targetLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={sourceLang}
        onChange={(selected) => {
          dispatch(setSource(selected));
        }}
        className="flex-1"
      />

      <button
        onClick={() => dispatch(swap())}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white"
      >
        Değiş
      </button>

      <ReactSelect
        options={formatted.filter((i) => i.value !== sourceLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        value={targetLang}
        onChange={(selected) => {
          dispatch(setTarget(selected));

          if (textToTranslate) {
            dispatch(translateText());
          }
        }}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
