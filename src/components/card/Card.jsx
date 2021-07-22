import React from "react";
import "./Card.css";

const Card = ({ items }) => {
  return (

    <div className="container-card">
      <div className="card-produtos">
        <div className="card" id="card">
          <img src={items.imageUrl} className="card-img-top" alt="image" />
          <h5 className="card-title">{items.productName}</h5>
          <p className="card-text">
            <div id="paragrafo-card">
              {items.listPrice !== null ? `de R$ ${items.listPrice}` : ""}
            </div>
            <div className="price">
                <b>por R$ {items.price}</b>
            </div>
            <p id="paragrafo-card">
              {" "}
              {items.installments.length > 0 && (
                <div>
                  ou em {items.installments[0].quantity}x de R${" "}
                  {items.installments[0].value}
                </div>
              )}
            </p>
            <button href="#" className="btn btn-comprar">
              COMPRAR
            </button>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Card;
