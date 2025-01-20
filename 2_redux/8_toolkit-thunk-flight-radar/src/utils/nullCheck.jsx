import { MdOutlineQuestionMark as Question } from "react-icons/md";

// eğerki parametre olarak gelen değer varsa ekrana bas yoksa yerine  ? return et
const nullCheck = (value, color) => {
  return value || <Question style={{ color: color || "#535bf2" }} />;
};

export default nullCheck;
