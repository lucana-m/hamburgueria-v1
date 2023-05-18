import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: max-content;
  background-color: var(--gray-0);
  margin-bottom: 1.875rem;
  border-radius: 0px 0px 5px 5px;

  .cartBoxTitle {
    background-color: var(--primary);
    color: #ffffff;
    width: 100%;
    height: 4.0625rem;
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    border-radius: 5px 5px 0px 0px;
  }

  ul {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0.625rem;
  }

  .cartEmptyBox {
    width: 95%;
    height: 3.625rem;
    margin: 1.5625rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .cartEmptyBox > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--gray-100);
  }

  .cartEmptyBox > small {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray-50);
  }

  @media (min-width: 900px) {
    width: 25%;

    ul {
      overflow: auto;
    }
  }
`;
