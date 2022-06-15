import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  min-height: 400px;
  padding: 2rem 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 15px;
`;

const H1Styled = styled.h1`
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Login = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");

  return (
    <Container>
      <H1Styled data-testid="login-text">Login</H1Styled>
      <FormContainer>
        <input
          type="text"
          placeholder="Username"
          value={userNameValue}
          onChange={(event) => setUserNameValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={(event) => setpasswordValue(event.target.value)}
        />
        <button disabled={!userNameValue || !passwordValue}>Login</button>
      </FormContainer>
    </Container>
  );
};

export default Login;
