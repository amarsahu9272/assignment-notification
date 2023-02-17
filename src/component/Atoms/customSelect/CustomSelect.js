import React from "react";
import "./CustomSelect.css";

function CustomSelect({ keys, data, handleSelect, defaultOption }) {
  return (
    <select
      key={keys}
      className="select"
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option key={keys+1} default disabled>
        {defaultOption}
      </option>
      {data.map((ele, i) => (
        <option key={i}>{ele}</option>
      ))}
    </select>
  );
}

export default CustomSelect;
