import styled from "styled-components";

export const StyledProductsList = styled.ul`
  width: 100%;
  height: 22.5625rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 1.25rem;

  @media (min-width: 900px) {
    width: 60%;
    height: max-content;
    flex-wrap: wrap;
    overflow: hidden;
    margin-right: 0.375rem;
  }
`;
