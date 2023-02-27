import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.div`
  background-color: purple;
  height: calc(100vh - 250px);
`;
