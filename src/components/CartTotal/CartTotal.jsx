import { StyledCartTotal } from "./style";

export const CartTotal = ({ value }) => {
  return (
    <StyledCartTotal>
      <div>
        <p className="cartTotalTitle">Total</p>
        <p className="cartTotalPrice">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>
      </div>
      <button>Remover todos</button>
    </StyledCartTotal>
  );
};
