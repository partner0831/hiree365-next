import React, { useState } from "react";
import * as Comp from "@/components";
import * as Styled from "./signup.styles";

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
          <h1>Welcome to Hiree365</h1>
          <h2>Member Login</h2>
          <Styled.TypeView>
            {["Institute", "Employer", "Candidate"].map((item, key) => (
              <Styled.TypeButton
                flag={item === type ? "true" : "false"}
                key={key}
                onClick={() => setType(item)}
              >
                {item}
              </Styled.TypeButton>
            ))}
          </Styled.TypeView>
          <Comp.Input
            onChange={handleInputChange}
            value={form.email}
            label="Email"
            name="email"
            placeholder="input your email"
          />
          <Comp.Input
            style={{ marginTop: "20px" }}
            onChange={handleInputChange}
            value={form.password}
            label="Password"
            name="password"
            placeholder="input your password"
          />
          <h3>Forgot Password?</h3>
          <Comp.Button bg="#0B132B" border="#0B132B">
            Sign In
          </Comp.Button>
          <span>
            Don’t have an account? <span>Register</span>
          </span>
        </div>
        <p>@2023 Hiree365 All Right Reserved.</p>
      </Styled.RContainer>
      <Styled.LContainer>
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
