import { StyledCartProduct } from "./style";

export const CartProduct = ({
  id,
  source,
  nameImg,
  name,
  category,
  removeValue,
}) => {
  return (
    <StyledCartProduct id={id}>
      <div>
        <img src={source} alt={nameImg} />
      </div>
      <div className="cartProductContent">
        <div className="cartProductInfo">
          <h3>{name}</h3>
          <small>{category}</small>
        </div>
        <button id={id} onClick={removeValue}>
          Remover
        </button>
      </div>
    </StyledCartProduct>
  );
};
