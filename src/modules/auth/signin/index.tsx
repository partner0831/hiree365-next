import React, { useState } from "react";
import * as Comp from "@/components";
import * as Styled from "./signin.styles";

export const SignIn: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Styled.SignInWrapper>
      <Styled.RContainer>
        <img src="./assets/images/logo-hire.png" />
        <div>
          <h1>Welcome to Hiree365</h1>
          <h2>Member Login</h2>
          <Comp.Input
            onChange={handleInputChange}
            value={form.email}
            label="Email"
            name="email"
            placeholder="input your email"
          />
          <Comp.Input
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
      <Styled.LContainer></Styled.LContainer>
    </Styled.SignInWrapper>
  );
};
