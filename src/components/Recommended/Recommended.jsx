import React from "react";
import "./Recommended.css";

export default function Recommended({ updateFilter }) {
  return (
    <div>
      <h2 className="recommended-title">Recomendado</h2>
      <div className="recommended-flex">
        <button
          onClick={updateFilter}
          className="btns"
          value="all"
          name="company"
        >
          Todos los productos
        </button>
        <button
          onClick={updateFilter}
          className="btns"
          value="nike"
          name="company"
        >
          Nike
        </button>
        <button
          onClick={updateFilter}
          className="btns"
          value="adidas"
          name="company"
        >
          Adidas
        </button>
        <button
          onClick={updateFilter}
          className="btns"
          value="puma"
          name="company"
        >
          Puma
        </button>
        <button
          onClick={updateFilter}
          className="btns"
          value="vans"
          name="company"
        >
          Vans
        </button>
      </div>
    </div>
  );
}
