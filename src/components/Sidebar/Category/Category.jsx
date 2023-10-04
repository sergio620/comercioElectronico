import React from "react";
import "./Category.css";
import Input from "../../Input";

export default function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Categoria </h2>
      <div>
        <Input title="Todo" value="All" name="category" />
        <Input title="Sneakers" value="sneakers" name="category" />
        <Input title="Flats" value="flats" name="category" />
        <Input title="Sandals" value="sandals" name="category" />
        <Input title="Heels" value="heels" name="category" />
      </div>
    </div>
  );
}
