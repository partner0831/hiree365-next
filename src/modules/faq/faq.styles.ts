import styled from "styled-components";

export const FaqContainer = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: auto;
    h1{
        color: var(--text-text-primary, #272B30);
        font-size: 48px;
        text-align: center;
        font-weight: 700;
        line-height: 56px; /* 116.667% */
    }
    h2{
        color: var(--text-text-secondary, #6F767E);
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px; /* 160% */
        margin-top: 12px;
    }
`
export const FAQContainer = styled.div`
  & > :not(:first-child) {
    margin-top: 32px;
  }
  @media screen and (max-width: 768px) {
    & > :not(:first-child) {
      margin-top: 14px;
    }
  }
`;