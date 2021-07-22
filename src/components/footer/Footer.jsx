import React from "react";
import core from "../../assets/image/core.png"
import vtex from "../../assets/image/vtex.png"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3 infolocalizacao">
              <h5>Localização</h5>
              <hr />
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
              <p>Alphavile - SP</p>
              <p>brasil@corebiz.ag</p>
              <p>+55 11 3090 1039</p>
            </div>

            <div className="col-md-4 mb-md-0 mb-3" id="btn">
                <button type="btn" className="botaocontato"><i className="fas fa-envelope"></i><span className="info"> ENTRE EM CONTATO</span></button>
                <button type="btn" className="botaocontato"><i className="fas fa-headphones"></i><span className="info"> CONSULTOR ONLINE</span></button>
            </div>

            <div className="col-md-4 mb-md-0 mb-3 logofooter">
              <div className="empresas-parceiras">
                  <span id="created">Created by</span>
                  <img src={core} alt="core" />
                </div>
              <div className="empresas-parceiras">
                  <span id="powered">Powered by</span>
                  <img src={vtex} alt="vtex" />
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
