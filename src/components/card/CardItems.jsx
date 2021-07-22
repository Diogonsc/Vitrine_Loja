import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Card.css";
import axios from "axios";

const CardItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://corebiz-test.herokuapp.com/api/v1/products?_embed=installments")
      .then((response) => setItems(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      {items.map((items) => (
        <Card key={items} items={items} />
      ))}
    </div>
  );
};

export default CardItems;
