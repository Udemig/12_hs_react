import React, { JSX, FC } from "react";

// Bu component'ın aldığı prop'ların tipini tanımladık
type Props = {
  text: string;
};

// 1) Component Tipi Tanımlama
// Prop Type   ✔︎: Tanımladık
// Return Type X: Oto Algılama
const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

// 2) Component Tipi Tanımlama
// Prop Type   ✔︎: Tanımladık
// Return Type ✔︎: Tanımladık
const Input = ({ text }: Props): JSX.Element => {
  return <input value={text} />;
};

// 3) Component Tipi Tanımlama
// React.FC aracılığı ile tek noktadan hem prop hem return tipi tanımla
// Prop Type   ✔︎: Tanımladık
// Return Type ✔︎: Tanımladık
const Select: FC<Props> = ({ text }) => {
  return <select />;
};
