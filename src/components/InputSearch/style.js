import styled from "styled-components";

export const StyledInputSearch = styled.form`
  width: 95%;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--gray-20);
  border-radius: 0.5rem;
  background-color: #ffffff;

  input {
    width: 70%;
    height: 100%;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875rem;
  }

  button {
    width: 30%;
    height: 70%;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    color: #ffffff;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 900px) {
    width: 25%;
    height: 70%;
    margin-right: 5.625rem;
  }
`;
