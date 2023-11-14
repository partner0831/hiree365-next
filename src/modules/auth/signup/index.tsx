import React, { useState } from "react";
import * as Comp from "@/components";
import * as Styled from "./signup.styles";
import { SpringIcon } from "@/components/SVGs/others";

export const SignUp: React.FC = () => {
  const [type, setType] = useState("Institute");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Styled.SignUpWrapper>
      <Styled.RContainer>
        <img src="./assets/images/logo-hire.png" />
        <div>
          <h1>Register</h1>
          <h2>Start for free Today</h2>
          <h6>Access to all features. No credit card required.</h6>
          <Styled.TypeView>
            {["Institute", "Employer"].map((item, key) => (
              <Styled.TypeButton
                flag={item === type ? "true" : "false"}
                key={key}
                onClick={() => setType(item)}
              >
                {item}
              </Styled.TypeButton>
            ))}
          </Styled.TypeView>
          <Styled.SignUpInputGroup>
            <Comp.Input
              onChange={handleInputChange}
              value={form.email}
              label="Institute Name *"
              name="email"
              placeholder="input your email"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.password}
              label="Website *"
              name="password"
              placeholder="input your password"
            />

            <Comp.Input
              onChange={handleInputChange}
              value={form.email}
              label="First Name *"
              name="email"
              placeholder="input your email"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.password}
              label="Last Name *"
              name="password"
              placeholder="input your password"
            />

            <Comp.Input
              onChange={handleInputChange}
              value={form.email}
              label="Email *"
              name="email"
              placeholder="input your email"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.password}
              label="Contact number *"
              name="password"
              placeholder="input your password"
            />

            <Comp.Input
              onChange={handleInputChange}
              value={form.email}
              label="Password *"
              name="email"
              placeholder="input your email"
            />
            <Comp.Input
              onChange={handleInputChange}
              value={form.password}
              label="Confirm Password *"
              name="password"
              placeholder="input your password"
            />
          </Styled.SignUpInputGroup>
          <Styled.AgreeView>
            <input type="checkbox" />
            <span>
              I agree to the <span>terms and conditions</span> for using this
              platform.
            </span>
          </Styled.AgreeView>
          <Comp.Button bg="#0B132B" border="#0B132B">
            Submit & Register
          </Comp.Button>
          <span>
            Already have an account? <span>Sign In</span>
          </span>
        </div>
      </Styled.RContainer>
      <Styled.LContainer>
        <SpringIcon />
        <div>
          <h4>Bridging the gap between talent and opportunity</h4>
          <h5>
            We connect institutes and employers on one platform, to help
            institutions find the best talent, and employers find the right
            candidates, all in one place.
          </h5>
          <img src={"./assets/images/auth/auth.png"} />
        </div>
      </Styled.LContainer>
    </Styled.SignUpWrapper>
  );
};
