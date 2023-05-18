import React from "react";
import { StyledCart } from "./style";
import { CartProduct } from "../CartProduct/CartProduct";
import { CartTotal } from "../CartTotal/CartTotal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = ({ selectProduct, removeValue }) => {
  const newProductsList = selectProduct.filter(
    (product, index) => selectProduct.indexOf(product) === index
  );

  const productAlreadyExists = selectProduct.filter(
    (product, index) => selectProduct.indexOf(product) !== index
  );

  const customId = "custom-id-yes";

  if (productAlreadyExists.length) {
    toast.error("Este produto já está no carrinho", { toastId: customId });
  }

  const getValues = newProductsList.map((item) => item.price);

  const sumValues = getValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <StyledCart>
      <div className="cartBoxTitle">
        <p>Carrinho de compras</p>
      </div>
      <ul>
        {newProductsList.length ? (
          newProductsList.map((item, id) => (
            <CartProduct
              key={id}
              id={item.id}
              source={item.img}
              nameImg={item.name}
              name={item.name}
              category={item.category}
              removeValue={removeValue}
            />
          ))
        ) : (
          <div className="cartEmptyBox">
            <h2>Sua sacola está vazia</h2>
            <small>Adicione itens</small>
          </div>
        )}
      </ul>

      {newProductsList.length ? <CartTotal value={sumValues} /> : null}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StyledCart>
  );
};
