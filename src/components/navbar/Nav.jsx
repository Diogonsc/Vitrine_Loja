import React from "react";
import corebiz from "../../assets/image/corebiz.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
        </div>

        <div className="geral-nav">
          <div className="image-logo">
            <a className="navbar-brand" href="#">
              <img src={corebiz} alt="logotipo" id="logocorebiz" />
            </a>
          </div>

          <div className="d-flex">
            <form className="d-flex">
              <div className="input-nav">
                <input
                  className="form-control"
                  type="search"
                  placeholder="O que está procurando?"
                  aria-label="Search"
                />
                <i class="fas fa-search"></i>
              </div>
            </form>
            <div className="carlogo">
              <div className="user">
                <i class="far fa-user"> Minha Conta</i>
              </div>
              <div id="icone-carrinho">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
