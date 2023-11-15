import { keyframes, styled } from "styled-components";

export const LandingSectionWrapper = styled.div`
  
`;

export const LandingSectionContainer = styled.div`
  margin: auto;
  max-width: 1520px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #DFDDFF;
  background: rgba(242, 244, 250, 0.34);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: var(--04, #272B30);
    text-align: center;
    font-size: 68px;
    font-weight: 600;
    line-height: 130%; /* 88.4px */
    letter-spacing: -0.68px;
    max-width: 1265px;
    margin-top: 80px;
    span{
      position: relative;
      z-index: 1;
    }
    svg{
      position: absolute;
      bottom: -10px;
      left: 0;
      z-index: -1;
    }
  }
  h2{
    color: #6F767E;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%; /* 30px */
  }
  & > div{
    margin-top: 28px;
    display: flex;
    & > :not(:first-child) {
      margin-left: 10px;
    }
  }
  & > img{
    margin-top: 70.51px;
  }
  @media screen and (max-width: 1280px){
    h1{
      font-size: 50px;
      svg{
        position: absolute;
        bottom: -20px;
        left: 0;
        z-index: -1;
      }
    }
  }
`;
