import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 8.6875rem;
  background-color: var(--gray-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 42%;
    height: 45%;
  }

  @media (min-width: 900px) {
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 20%;
      height: 30%;
      margin-left: 1.875rem;
    }
  }
`;
