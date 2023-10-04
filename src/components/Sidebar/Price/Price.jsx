import React from "react";
import "./Price.css";
import Input from "../../Input";

export default function Price() {
  return (
    <div>
      <h2 className="sidebar-title price-title">Precio</h2>
      <div>
        <Input title="Todo" value="All" name="newPrice" />
        <Input title="0-50" value={50} name="newPrice" />
        <Input title="50-100" value={100} name="newPrice" />
        <Input title="100-150" value={150} name="newPrice" />
        <Input title="over 150" value={200} name="newPrice" />
      </div>
    </div>
  );
}
