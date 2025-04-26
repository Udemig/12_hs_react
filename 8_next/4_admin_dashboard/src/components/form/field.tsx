type Props = {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
};

const Field = ({ children, htmlFor, label }: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>

      {children}
    </div>
  );
};

export default Field;
