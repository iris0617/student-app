import React from "react";

const SearchBox = ({ value, name, onChange, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      className="my-3 mx-10 search"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.currentTarget.value, e.currentTarget.name)}
    />
  );
};

export default SearchBox;
