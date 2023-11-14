import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    color: var(--secondary-500, #191919);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  }
  input {
    margin-top: 10px;
    border-radius: 6px;
    border: 0.5px solid var(--secondary-200, #E7E7E7);
    background: #fff;
    outline: none;
    width: 100%;
    height: 46px;
    padding: 0 16px;
    font-size: 14px;

  }
  :focus{
    border: 0.5px solid var(--primary-500, #4D67EB);

  }
`;
