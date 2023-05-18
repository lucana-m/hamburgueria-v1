import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 80%;
  height: 97%;
  flex-shrink: 0;
  border: 2px solid var(--gray-20);
  border-radius: 5px;

  .productBoxImg {
    background-color: var(--gray-0);
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  img {
    width: 55%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  & div + div {
    width: 100%;
    height: 55%;
    padding: 0.9375rem;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: var(--gray-100);
  }

  small {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    color: var(--gray-50);
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--primary);
  }

  button {
    width: 6.625rem;
    height: 2.5rem;
    background-color: var(--primary);
    color: #ffffff;
    border: 2px solid var(--primary);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.0625rem;
  }

  @media (min-width: 900px) {
    width: 30%;
    height: 20.625rem;

    & div + div {
      gap: 0.625rem;
    }

    button {
      width: 6.625rem;
      height: 2.5rem;
      margin-top: 0.625rem;
    }
  }
`;
