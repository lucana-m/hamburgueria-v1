import styled from "styled-components";

export const StyledCartTotal = styled.div`
  width: 93%;
  height: 130px;
  margin: 10px;
  border-top: 1px solid var(--gray-20);

  & > div {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }
  .cartTotalTitle {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--gray-100);
  }

  .cartTotalPrice {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--gray-50);
  }

  button {
    width: 100%;
    height: 3.75rem;
    background-color: var(--gray-20);
    color: var(--gray-50);
    margin-top: 0.875rem;
    border: 2px solid var(--gray-20);
    border-radius: 0.5rem;
  }
`;
