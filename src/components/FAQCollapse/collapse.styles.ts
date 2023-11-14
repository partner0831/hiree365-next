import { styled } from "styled-components";

export const CollapseWrapper = styled.div`
  margin-top: 72px;
  border-bottom: 1px solid var(--border-border-primary, #E0E0E0);
  contain: content;
  @media screen and (max-width: 768px){
      margin-top: 30px;
  }
`;

export const CollapseHeader = styled.div`
  padding: 24px 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: var(--text-text-primary, #272B30);
    font-size: 20px;
    font-weight: 600;
    line-height: 32px; /* 160% */
  }
  @media screen and (max-width: 768px) {
    padding: 24px 14px;
    h3 {
      font-size: 18px;
    }
  }
`;

export const CollapseContent = styled.div<{ open: boolean }>`
  padding: ${({ open }) => (open ? "0 80px 24px 0" : "0 24px 0 0")};
  height: ${({ open }) => (open ? "fit-content" : "0px")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  color: #3b3f42;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: ${({ open }) => (open ? "0 14px 24px" : "0 14px 0")};
  }
`;
