import { ChangeEvent, FC, FormEvent, MouseEvent } from "react";

const Form: FC = () => {
  // her eventin tipi farklıdır
  // onMouseLeave,onMouseEnter > PointerEvent
  // onChange > ChangeEvent
  // onSubmit > FormEvent
  // event tiplerine generic olarak olayın gerçekleştiği html elementinin tipini vermeliyiz
  // HTML-{{İsim}}-Element syntaxı ile element tipi belirleriz

  // form onSubmit olayı
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  // input onChange olayı
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value;
  };

  // button onClick olayı
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.target;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input onChange={handleChange} type="email" />

      <br />

      <label>Şifre</label>
      <input type="password" />

      <br />

      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
