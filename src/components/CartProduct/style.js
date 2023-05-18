import styled from "styled-components";

export const StyledCartProduct = styled.li`
  background-color: var(--gray-0);
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & > div {
    width: 4.375rem;
    height: 4.375rem;
    background-color: var(--gray-20);
    border-radius: 5px;
  }

  img {
    width: 4.375rem;
    height: 4.375rem;
  }

  .cartProductContent {
    background-color: var(--gray-0);
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .cartProductInfo {
      width: 62%;
      padding: 0.625rem;
    }

    .cartProductInfo > h3 {
      width: 100%;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.5rem;
      color: var(--gray-100);
      margin-bottom: 0.3125rem;
    }

    .cartProductInfo > small {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1rem;
      color: var(--gray-50);
    }

    button {
      height: max-content;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 0.9375rem;
      color: #bdbdbd;
      margin-top: 0.625rem;
      margin-right: 0.625rem;
    }
  }
`;
