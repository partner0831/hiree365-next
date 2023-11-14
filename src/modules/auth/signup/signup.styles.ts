import styled from "styled-components";

export const SignUpWrapper = styled.div`
     display: flex;
     @media screen and (max-width: 768px) {
        flex-direction: column;
        & > div {
          width: 100%;
        }
     }
`;

export const RContainer = styled.div`
    position: relative;
    width: 60%;
    background: #FAFAFF;
    padding: 0 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img{
        width: 131.751px;
        height: 40px;
        position: fixed;
        top: 40px;
        left: 60px;
    }
   display: flex;
   align-items: center;
   justify-content: center;
   & > div{
    max-width: 815px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   div{
    width: 100%;
   }
   h1{
        color: var(--secondary-500, #191919);
        font-size: 24px;
        font-style: normal;
        line-height: 150%; /* 36px */
        letter-spacing: -0.24px;
   }
   h2{
        color: #7D75EA;
        font-size: 32px;
        font-weight: 600;
        line-height: 150%; /* 48px */
        letter-spacing: -0.32px;
        margin: 14px 0;
   }
   p{
     color: var(--secondary-300, #BABABA);
     text-align: center;
     font-size: 14px;
     font-weight: 400;
     line-height: 150%; /* 21px */
     letter-spacing: -0.28px;
     position: absolute;
     bottom: 40px;
   }
   h3{
     color: var(--primary-500, #4D67EB);
     text-align: right;
     font-size: 14px;
     font-weight: 500;
     line-height: 150%; /* 21px */
     letter-spacing: -0.28px;
     width: 100%;
     margin: 20px 0 14px 0;
   }
   & > div > span{
    margin-top: 14px;
    color: var(--secondary-400, #757575);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
    span{
      color: var(--primary-500, #4D67EB);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.28px;
    }
   }
   @media screen and (max-width: 768px) {
      height: fit-content;
      min-height: fit-content;
      img{
        position: relative;
        top: 0;
        left: 0;
        margin-top: 41px;
      }
      p{
        display: none;
      }
      h1{
        margin-top: 30px;
      }
      & > div > span{
        margin-bottom: 50px;
      }
    }
`;
export const TypeView = styled.div`
    width: fit-content !important;
    margin-bottom: 14px;
    & > :not(:first-child) {
        margin-left: 12px;
    }
`
export const TypeButton  = styled.button<{flag:string}>`
    background-color: ${({flag})=>flag==="true"?"#7D75EA":"#F5F5FF"};
    padding: 12px 20px;
    color: ${({flag})=>flag==="true"?"#fff":"#7D75EA"};
    border-radius: 6px;
    border: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 12px; /* 100% */
    cursor: pointer;
`
export const LContainer = styled.div`
    position: relative;
    svg{
      position: absolute;
      top: 82px;
      left:65px;
    }
    div{
      max-width: 720px;
      display: flex;
      flex-direction: column;
      padding: 110px 32px 0 32px;
      box-sizing: border-box;
      align-items: center;
      margin: auto;
    }
      width: 40%;
    
      background: linear-gradient(180deg, #9A9BF7 0%, #BFD8FB 35.93%, #C3DEFB 59.81%, #BFCAFA 79.02%, #A861F3 113.18%);
        box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(25px);
      min-height: 100vh;
      @media screen and (max-width: 768px) {
          height: fit-content;
          min-height: fit-content;
          div{
            padding: 57.29px 16.67px 110px 16.67px;
          }
          svg{
            position: absolute;
            top: 40px;
            left:35px;
          }
      }
      img{
        max-width: 100%;
      }
      h4{
        color: var(--secondary-500, #191919);
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: 121.5%; /* 38.88px */
        max-width: 415px;
        margin-bottom: 10px;
      }
      h5{
        color: #595959;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%; /* 21px */
        letter-spacing: -0.14px;
        max-width: 415px;
        margin-bottom: 10px;
      }
`;