import React from "react";

import corebiz from "../../assets/image/corebiz.png";
import Carrinho from "../carrinho/Carrinho";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand col-4" href="#">
            <img src={corebiz} alt="logotipo" id="logocorebiz" />
          </a>
        </div>
        <div className="submit-line col-4">
          <input
            className="form-control control-form"
            type="search"
            placeholder="O que está procurando?"
            aria-label="Search"
          />
        </div>
        <div className="user col-2">
          <i class="far fa-user">
            <span id="minha-conta"> Minha Conta</span>
          </i>
        </div>
        <div className="col-2">
          {" "}
          <Carrinho />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
