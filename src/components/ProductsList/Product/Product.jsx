import React from "react";
import { StyledProduct } from "./style";

export const Product = ({ id, source, name, category, price, addProduct }) => {
  return (
    <StyledProduct id={id}>
      <div className="productBoxImg">
        <img src={source} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <small>{category}</small>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </p>
        <button id={id} onClick={addProduct}>
          Adicionar
        </button>
      </div>
    </StyledProduct>
  );
};
