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

const InputStyled = styled.input`
  outline: 1px solid #fafafa;
  padding: 0.5rem;
  margin: 1rem 0rem 0.5rem 0rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;

  &:focus {
    transition: 0.3s ease-in;
    outline: 1px solid #000000;
  }
`;

const ButtonStyled = styled.button`
  outline: 1px solid #fafafa;
  background: #fafafa;
  padding: 0.5rem 2rem;
  margin: 1rem 0rem 0.5rem 0rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover,
  :focus {
    transition: 0.3s ease-in;
    background: #d3d3d3;
    outline: 1px solid #000000;
  }

  &:active {
    transition: 0s ease-in;
    outline: 1px solid #000000;
    background: #a9a9a9;
  }

  &:disabled {
    outline: 1px solid #fafafa;
    background: #fafafa;
    cursor: auto;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

export const Login = () => {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <Container>
      <H1Styled data-testid="login-text">Login</H1Styled>
      <FormContainer>
        <InputStyled
          type="text"
          placeholder="Username"
          value={userNameValue}
          onChange={(event) => setUserNameValue(event.target.value)}
        />
        <InputStyled
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={(event) => setpasswordValue(event.target.value)}
        />
        <ButtonStyled disabled={!userNameValue || !passwordValue}>
          Login
        </ButtonStyled>
        <ErrorMessage isVisible={isError} data-testid="error-text">
          Something went wrong!
        </ErrorMessage>
      </FormContainer>
    </Container>
  );
};

export default Login;
