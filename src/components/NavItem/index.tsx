import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import type * as Type from "@/types";
import * as Styled from "./navItem.styles";
import { headerLeftNavs } from "@/layouts/AppLayout/data";
import Image from "next/image";

export const NavItem: React.FC<Type.INavItemProps> = ({
  label,
  to,
  subMenu,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("no-submenu");
  const [width, setWidth] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isSubActive, setIsSubActive] = useState("no-submenu");
  const [megaMenu, setMegaMenu] = useState("");
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSubActive("no-submenu");
        setIsActive("no-submenu");
        setMegaMenu("");
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // useEffect(() => {
  //   if (!megaMenu) {
  //     document.documentElement.style.overflow = "auto";
  //     document.documentElement.style.paddingRight = "0";
  //   } else {
  //     document.documentElement.style.overflow = "hidden";
  //     document.documentElement.style.paddingRight = "17px";
  //     window.scrollTo({ top: 0 });
  //   }
  // }, [megaMenu]);

  const handleNavClick = () => {
    if (subMenu) {
      if (width > 1024) {
        setMegaMenu((prev) => (prev === label ? "" : label));
      } else {
        setIsActive((prev) => {
          setIsSubActive("no-submenu");
          return prev === label ? "no-submenu" : label;
        });
      }
    } else {
      setIsActive("no-submenu");
      setIsSubActive("no-submenu");
      router.push(to);
    }
  };

  return (
    <Styled.NavItemWrapper
      ref={wrapperRef}
      onMouseEnter={subMenu ? handleNavClick : () => {}}
      onMouseLeave={subMenu ? handleNavClick : () => {}}
    >
      <Styled.NavLabel
        // onMouseLeave={subMenu ? handleNavClick : () => {}}
        onClick={handleNavClick}
      >
        <span>{label}</span>
      </Styled.NavLabel>
    </Styled.NavItemWrapper>
  );
};
