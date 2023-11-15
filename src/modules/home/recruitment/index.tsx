import React from "react";
import * as Styled from "./recruitment.styles";
import * as Comp from "@/components";

export const Recruitment: React.FC = () => {
  return (
    <Styled.RecruitmentSectionWrapper>
      <h1>Making recruitment easier</h1>
      <h2>
        Our consultants have years of experience on the in success. ​Through the
        provision of our services.
      </h2>
      <Styled.EmployerWrapper>
        <div>
          <h3>For Universities & Colleges</h3>
          <h4>
            Manage campus recruitments, welcome employers to evaluate graduating
            students profiles and use AI to locate job openings for learners
          </h4>
          <Comp.Button br="100px">Learn More</Comp.Button>
        </div>
        <div>
          <h3>For Employers</h3>
          <h4>
            Attract better candidates, make smart hiring decisions and engage
            directly with top educational institutions
          </h4>
          <Comp.Button br="100px" bg="#0B132B" border="#0B132B">
            Learn More
          </Comp.Button>
        </div>
      </Styled.EmployerWrapper>
      <Styled.EmployerWrapper>
        <div>
          <h3>For Government</h3>
          <h4>
            Helping develop work-integrated learning like internships,
            placements and work experience to improve graduate outcomes
          </h4>
          <Comp.Button br="100px" bg="#0B132B" border="#0B132B">
            Learn More
          </Comp.Button>
        </div>
        <div>
          <h3>For Students</h3>
          <h4>
            Get ready for a successful career while you study. Use AI to find
            jobs related to your university courses, kickstart your career, and
            gain practical experience
          </h4>
          <Comp.Button br="100px" bg="#0B132B" border="#0B132B">
            Learn More
          </Comp.Button>
        </div>
      </Styled.EmployerWrapper>
      <Styled.PcView>
        <img src="./assets/images/home/macbook.png" alt="pc" />
      </Styled.PcView>
    </Styled.RecruitmentSectionWrapper>
  );
};
