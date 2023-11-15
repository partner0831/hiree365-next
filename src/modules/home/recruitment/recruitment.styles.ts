import styled from "styled-components";

export const RecruitmentSectionWrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    width: 95%;
    h1{
        color: var(--secondary-500, #1A1C1E);
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: 120%; /* 48px */
        letter-spacing: -0.4px;
        text-transform: capitalize;
    }
    h2{
        color: var(--secondary-400, var(--08, #6C7278));
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 156%; /* 28.08px */
        margin: 16px auto 18px auto;
        max-width: 557px;
    }
`;
export const EmployerWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    min-height: 344px;
    & > :not(:first-child) {
      margin-left: 56px;
    }
    & > div{
        padding: 62px 50px 0 50px;
        display: flex;
        flex-direction: column;
        border: 2px solid var(--secondary-200, #DCE4E8);

        border-radius: 30px;
        & > div{
            width: fit-content;
        }
        h3{
            color: var(--04, #272B30);
            font-size: 40px;
            font-weight: 700;
            line-height: 120%; /* 48px */
            letter-spacing: -0.4px;
            text-transform: capitalize;
            margin-bottom: 24px;
        }
        h4{
            color: var(--08, #6C7278);
            font-size: 16px;
            font-weight: 400;
            line-height: 156%; /* 24.96px */
            margin-bottom: 18px;
        }
    }

`;
export const PcView = styled.div`
    margin-top: 141px;
    border-radius: 12px;
    background: #C0BEBE;
    img {
        border-radius: 12px;
    }
`;