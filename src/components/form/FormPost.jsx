import React, { useEffect, useState } from "react";
import axios from "axios";
import Formulario from './Formulario';

const FormPost = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .post("https://corebiz-test.herokuapp.com/api/v1/newsletter")
      .then((response) => {alert("Created successfully" + response)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      {items.map((items) => (
        <Formulario key={items} items={items} />
      ))}
    </div>
  );
};

export default FormPost;
