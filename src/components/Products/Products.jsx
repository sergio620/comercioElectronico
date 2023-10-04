import React from "react";
import "./Products.css";
import Card from "../Card";

function Content({ filteredItems }) {
  if (filteredItems.length === 0) {
    return <h2>No se han encontrado resultados</h2>;
  } else {
    return filteredItems.map((item) => {
      return (
        <Card
          key={Math.random()}
          img={item.img}
          title={item.title}
          star={item.star}
          reviews={item.reviews}
          prevPrice={item.prevPrice}
          newPrice={item.newPrice}
        />
      );
    });
  }
}

export default function Products({ filteredItems }) {
  return (
    <section className="card-container">
      <Content filteredItems={filteredItems} />
    </section>
  );
}
