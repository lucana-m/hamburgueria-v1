import { React } from "react";
import { StyledHeader } from "./style";
import { InputSearch } from "../InputSearch/InputSearch";

export const Header = ({ logo, setSearch }) => {
  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <InputSearch setSearch={setSearch} />
      </StyledHeader>
    </>
  );
};
