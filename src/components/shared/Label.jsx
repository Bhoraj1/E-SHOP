import React from "react";

const Label = ({ text, style }) => {
  return (
    <div>
      <label className={`text-sm font-medium text-gray-700 ${style}`}>
        {text}
      </label>
    </div>
  );
};

export default Label;
