import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import * as Comp from "@/components";
import * as Styled from "./appLayout.styles";
import * as Data from "./data";
import { MobileNavigation } from "./MobileNavigation";

export const Header: React.FC = () => {
  const { headerLeftNavs } = Data;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderNavWrapper>
        <Comp.AppLogo />
        <Styled.HeaderNavContainer>
          {headerLeftNavs.map((nav, index) => (
            <Comp.NavItem {...nav} key={index} />
          ))}
        </Styled.HeaderNavContainer>
        <Comp.Button size="sm" bg="#0B132B" border="transparent">
          <span>Get a Demo</span>
        </Comp.Button>
      </Styled.HeaderNavWrapper>

      <Styled.MobileHeaderNavWrapper>
        <Styled.MenuButton onClick={() => setOpen(true)}>
          <GiHamburgerMenu />
        </Styled.MenuButton>
      </Styled.MobileHeaderNavWrapper>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </Styled.HeaderWrapper>
  );
};
