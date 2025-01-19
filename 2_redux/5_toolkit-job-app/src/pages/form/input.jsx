import React from "react";

const Input = ({
  label,
  name,
  options,
  type = "text",
  handleChange,
  value,
}) => {
  return (
    <div className="field">
      <label>{label}</label>

      {options ? (
        <select name={name} onChange={handleChange}>
          {options.map((item) => (
            <option value={item} selected={item === value}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          onChange={handleChange}
          defaultValue={value}
        />
      )}
    </div>
  );
};

export default Input;
