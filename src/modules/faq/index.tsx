import React, { useState } from "react";
import * as Comp from "@/components";
import * as Styled from "./faq.styles";
import { faqData } from "./data";
export const Faq: React.FC = () => {
  const [collapse, setCollapse] = useState(0);
  return (
    <Styled.FaqContainer>
      <h1>FAQ</h1>
      <h2>Got questions? Check-out our SaaS-tastic answers!</h2>
      <Styled.FAQContainer>
        {faqData.map((row, index) => (
          <Comp.FAQCollapse
            key={index}
            {...row}
            onClick={() => setCollapse(index)}
            open={collapse === index}
          />
        ))}
      </Styled.FAQContainer>
    </Styled.FaqContainer>
  );
};
