import React from "react";

const InputComponent = ({ placeholder, type = "text", value, setValue }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputComponent;
