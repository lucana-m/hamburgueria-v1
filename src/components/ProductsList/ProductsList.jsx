import React from "react";
import { StyledProductsList } from "./style";
import { Product } from "./Product/Product";

export const ProductsList = ({ search, products, addProduct }) => {
  const newList = products.filter(
    (product) => product.name === search || product.category === search
  );

  return (
    <>
      <StyledProductsList>
        {search === ""
          ? products.map((product) => (
              <Product
                key={product.name}
                id={product.id}
                source={product.img}
                name={product.name}
                category={product.category}
                price={product.price}
                addProduct={addProduct}
              />
            ))
          : newList.map((product) => (
              <Product
                key={product.name}
                id={product.id}
                source={product.img}
                name={product.name}
                category={product.category}
                price={product.price}
                addProduct={addProduct}
              />
            ))}
      </StyledProductsList>
    </>
  );
};
