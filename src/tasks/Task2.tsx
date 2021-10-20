import React from "react";
import styled from "styled-components";

interface Props {}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const TopContent = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: grey;
`;
const BottomLeftContent = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  background-color: red;
`;
const BottomRightContent = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background-color: blue;
`;
const Text = styled.div`
  padding: 10px;
  display: flex;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 11px;
  position: relative;
  border: 2px solid green;
  color: white;
`;
export const Task2 = (props: Props) => {
  return (
    <Container>
      <TopWrapper>
        <TopContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TopContent>
        <TopContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TopContent>
      </TopWrapper>
      <BottomWrapper>
        <BottomLeftContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </BottomLeftContent>
        <BottomRightContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </BottomRightContent>
      </BottomWrapper>
    </Container>
  );
};
