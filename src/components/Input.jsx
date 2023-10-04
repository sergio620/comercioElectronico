import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Input({ value, name, title }) {
  const { updateFilter } = useContext(ThemeContext);
  return (
    <label className="sidebar-label-container">
      <input onChange={updateFilter} value={value} type="radio" name={name} />
      <span
        style={{ backgroundColor: value === "white" ? "yellow" : value }}
        className="checkmark"
      ></span>
      {title}
    </label>
  );
}
