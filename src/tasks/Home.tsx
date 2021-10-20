import React from "react";
import { Link } from "react-router-dom";
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
export const Home = (props: Props) => {
  return (
    <Container>
      <Link to={"/task2"}>Click to go task 2</Link>

      <Link to={"/task3"}>Click to go task 3</Link>
    </Container>
  );
};
