import React from "react";
import * as Comp from "@/components";
import * as Styled from "./landing.styles";
import { Trusted } from "@/modules/solution/institutes";

export const Landing: React.FC = () => {
  return (
    <Styled.LandingSectionWrapper>
      <Styled.LandingSectionContainer>
        <h1>
          The Ultimate{" "}
          <span>
            Student Employability
            <Comp.MainIcon />
          </span>{" "}
          Platform to Improve Graduate Outcome
        </h1>
        <h2>
          With Hiree365 Universities, Students, Employers and Government are all
          united in a single objective
        </h2>
        <div>
          <Comp.Button br="100px">Try for Free</Comp.Button>
          <Comp.Button br="100px" bg="#0B132B" border="#0B132B">
            Book a Demo
          </Comp.Button>
        </div>
        <img src="./assets/images/home/landing.png" alt="home" />
      </Styled.LandingSectionContainer>
      <Trusted />
    </Styled.LandingSectionWrapper>
  );
};
