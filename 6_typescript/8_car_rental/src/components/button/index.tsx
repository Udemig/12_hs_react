import { FC } from "react";

interface Props {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  fn?: () => void;
}

const Button: FC<Props> = ({ text, designs, disabled, type, fn }) => {
  return (
    <button onClick={fn} type={type} disabled={disabled} className={`custom-btn ${designs}`}>
      {text}
    </button>
  );
};

export default Button;
