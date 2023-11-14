import { styled } from "styled-components";

export const NavigationWrapper = styled.div`
  background: #FBFBFD;
`;

export const NavigationContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: 110px auto auto auto;
  padding-top: 70px;
  @media screen and (max-width: 1024px) {
    margin: 50px auto auto auto;
  }
`;

export const FooterLogo = styled.img`
  margin-bottom: 22.6px;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 70px;
  gap: 49px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NavigationListWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 64px;
  }
`;

export const NavigationListContent = styled.div`
  color: var(--saas-p-4, #2C2643);

  h2 {
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 19.08px;
  }
  a {
    color: var(--03, #6F767E);
    font-family: DM Sans;
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 156%; /* 24.96px */
    text-transform: capitalize;
    text-decoration: none;
    &:not(:first-child) {
      margin-bottom: 18px;
    }
  }
`;

export const DownloadButtonWrapper = styled.div`
  display: flex;
  a {
    &:not(:first-child) {
      margin-left: 12px;
    }
  }

`;
export const SearchWrapper = styled.div`
  padding: 58px 0;
  border-top: 1px solid #B9B7B7;
  display: flex;
  justify-content: space-between;
  & > h5{
    color: var(--02, #0B132B);
    font-size: 40px;
    font-weight: 600;
    line-height: 120%; /* 48px */
    letter-spacing: -0.4px; 
    max-width: 577px;
  }
  @media screen and (max-width: 1024px) {
    & > h5{
      max-width: 100%;
      font-size: 28px;
      text-align: center;
    }
    flex-direction: column;
    align-items: center;
  }
`;
export const SearchView = styled.div`
  input{
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--03, #6F767E);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    padding-left: 24px;
    max-width: 90%;
  }
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right:6px;
  min-height: 66px;
  height: fit-content;
  border: 1px solid #B9B7B7;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.00);
  &>div{
    height: 90%;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    &>div{
      display: none;
    }
  }
`;
export const SearchBtnView = styled.div`
  display: none;
  @media screen and (max-width: 425px) {
    display: flex;
    margin-top: 20px;
  }
`
export const CopyrightWrapper = styled.div`
  border-top: 1px solid #B9B7B7;;
  padding-top: 24px;
  padding-bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    color: rgba(51, 51, 51, 0.65);
    font-feature-settings: 'liga' off;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    & > p {
      margin-top: 19px;
    }
  }
  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const SocialsNavWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    margin-right: 10px;
  }
  a {
    background-color: #fff;
    text-decoration: none;
    display: block;
    font-size: 14px;
    &.social-link {
      width: 42px; 
      font-size: 16px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b9bdc3;
      border-radius: 9999px;
    }
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    & > div:last-child {
      margin-bottom: 16px;
    }
  }
`;
