import React, { useEffect, useState } from "react";
import styled from "styled-components";
interface Props {}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const LoginWrapper = styled.div`
  display: flex;
  width: 566px;
  height: 400px;
  justify-content: center;
  flex-direction: column;
`;
const LoginLogo = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  font-weight: 700;
  color: white;
  font-size: 72px;
  justify-content: center;
`;
const LoginCardWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginInputWrapper = styled.div`
  width: 100%;
  max-height: 155px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LoginInput = styled.input`
  width: 250px;
  height: 20px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;
const LoginInputLabel = styled.p`
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: aliceblue;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  color: black;
  margin-top: 20px;
`;
export const Task3 = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };
  const handleUserPasswordInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {};
  return (
    <>
      <Container>
        <LoginWrapper>
          <LoginLogo>ebcont</LoginLogo>
          <form onSubmit={onSubmit}>
            <LoginCardWrapper>
              <LoginInputWrapper>
                <LoginInputLabel>Username</LoginInputLabel>
                <LoginInput
                  value={username}
                  type="text"
                  onChange={handleUserNameInput}
                ></LoginInput>
              </LoginInputWrapper>
              <LoginInputWrapper>
                <LoginInputLabel>Password</LoginInputLabel>
                <LoginInput
                  value={password}
                  type="password"
                  onChange={handleUserPasswordInput}
                ></LoginInput>
              </LoginInputWrapper>
              {username && password ? (
                <Button type="submit">Login</Button>
              ) : (
                <div></div>
              )}
            </LoginCardWrapper>
          </form>
        </LoginWrapper>
      </Container>
    </>
  );
};
