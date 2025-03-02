# Typescript ile React Yazarken

# Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun.. mutlaka taipi tanımlanmalı
- Otamatik tip algılamaya güvenip bir değişkenin bile tipi boş bırakılmamamlı
- Otomatik tip algılama özelliği olabideğince az mümkünse hiç kullanılmamalı

## Dosya Uzantısı

- Component dosyalarında artık `js/jsx` yerine `ts/tsx` uzantısı kullanırız

## Hooks

- React Hook'ları kullanrıken bir veri tutuyorsak tipi tanımlama
- useState ile state'ini tuttuğunuz verinin tipini generic yardımıyla söylemeliyiz

## Component Tipi

- Component'lar bir fonksiyon olduğu için fonksiyonlardaki gibi component'larından parametre ve return tiplerini tanımlak zorundayız

```ts
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
```

## Prop Tipi

- Bir bileşenin aldığı prop'ların tipini tanımlamak zorundayız
- Ve bu bileşeni kullanırken belirlediğimiz tipteki değerleri göndermezsek hata alırız

## Event - Olay Tipleri

```ts
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
```
