import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { IFAQCollapseProps } from "@/types";
import * as Styled from "./collapse.styles";

export const FAQCollapse: React.FC<IFAQCollapseProps> = ({
  desc,
  title,
  onClick,
  open,
}) => {
  return (
    <Styled.CollapseWrapper>
      <Styled.CollapseHeader onClick={onClick}>
        <h3>{title}</h3>
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </Styled.CollapseHeader>
      <Styled.CollapseContent open={open}>{desc}</Styled.CollapseContent>
    </Styled.CollapseWrapper>
  );
};
