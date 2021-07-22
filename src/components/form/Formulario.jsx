import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [nome, setNone] = useState("");

  

  return (
    <div className="formulario">
      <div className="title-form">
        <span>Participe de nossas news com promoções e novodades!</span>
      </div>
      <div className="form-tamanho">
        <form className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
            />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-dark" method="POST">
              Eu quero!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
