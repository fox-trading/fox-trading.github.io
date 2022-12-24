import React from "react";
import { Select } from "antd";
import "./Language.scss";
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const Language = () => (
  <Select
    size="small"
    labelInValue
    defaultValue={{
      value: "Ru",
      label: "Ru ",
    }}
    style={{
      width: 60,
    }}
    onChange={handleChange}
    options={[
      {
        value: "Ru",
        label: "Ru ",
      },
      {
        value: "Eng",
        label: "Eng ",
      },
    ]}
  />
);
export default Language;
