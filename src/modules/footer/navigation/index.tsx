import React from "react";
import * as Data from "./data";
import * as Styled from "./navigation.styles";
import * as Comp from "@/components";

export const Navigation: React.FC = () => {
  const { company, features, product, solutions, socials } = Data;

  return (
    <Styled.NavigationWrapper>
      <Styled.NavigationContainer>
        <Styled.NavigationGrid>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <Styled.FooterLogo
                src="/assets/images/logo-white.png"
                alt="App Logo White"
              />
              <a>
                With Hire365 Universities, Students, Employers and Government
                are all united in a single objective
              </a>
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Company</h2>
              {company.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Feature</h2>
              {features.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>

          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Solutions</h2>
              {solutions.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
        </Styled.NavigationGrid>
        <Styled.NavigationGrid>
          <Styled.NavigationListWrapper></Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Company</h2>
              {company.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Feature</h2>
              {features.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>

          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>Solutions</h2>
              {solutions.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
        </Styled.NavigationGrid>
        <Styled.SearchWrapper>
          <h5>Don’t find the answer? contact us for any query. </h5>
          <Styled.SearchView>
            <input placeholder="Your business email" />
            <Comp.Button br="100px">Get Started</Comp.Button>
          </Styled.SearchView>
          <Styled.SearchBtnView>
            <Comp.Button br="100px">Get Started</Comp.Button>
          </Styled.SearchBtnView>
        </Styled.SearchWrapper>
        <Styled.CopyrightWrapper>
          <p>© 2023 Hiree365 All rights reserved</p>
          <Styled.SocialsNavWrapper>
            <div>
              {socials.map((social, index) => (
                <a href={social.link} key={index} className="social-link">
                  {social.icon}
                </a>
              ))}
            </div>
          </Styled.SocialsNavWrapper>
        </Styled.CopyrightWrapper>
      </Styled.NavigationContainer>
    </Styled.NavigationWrapper>
  );
};
