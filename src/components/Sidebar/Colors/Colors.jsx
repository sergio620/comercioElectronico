import React from "react";
import "./Colors.css";
import Input from "../../Input";

export default function Color() {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colores</h2>
      <div>
        <Input title="Todo" value="All" name="color" />
        <Input title="Black" value="black" name="color" />
        <Input title="Blue" value="blue" name="color" />
        <Input title="Red" value="red" name="color" />
        <Input title="Green" value="green" name="color" />
        <Input title="White" value="white" name="color" />
      </div>
    </div>
  );
}
