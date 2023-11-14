import styled from "styled-components";

export const SignInWrapper = styled.div`
     display: flex;
`;

export const RContainer = styled.div`
    position: relative;
    width: 50%;
    background: #FAFAFF;
    padding: 0 20px;
    min-height: 100vh;
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
    max-width: 400px;
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
    span{
      color: var(--primary-500, #4D67EB);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.28px;
    }
   }
`;

export const LContainer = styled.div`
      width: 50%;
      background: linear-gradient(180deg, #9A9BF7 0%, #BFD8FB 35.93%, #C3DEFB 59.81%, #BFCAFA 79.02%, #A861F3 113.18%);
        box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(25px);
      min-height: 100vh;
`;