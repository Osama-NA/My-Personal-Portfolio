import React from "react";

const InputGroup = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      {type === "textarea" ? (
        <Textarea
          name={label.toLowerCase()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={label.toLowerCase()}
        />
      )}
    </div>
  );
};

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
};

const Textarea = ({ placeholder, value, onChange, name }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  );
};

export default InputGroup;
