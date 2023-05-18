import { useState } from "react";
import { StyledInputSearch } from "./style";

export const InputSearch = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSearch(searchValue);
  }

  return (
    <StyledInputSearch onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </StyledInputSearch>
  );
};
