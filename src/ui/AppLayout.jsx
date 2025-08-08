import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import { useSidebar } from "../contexts/SidebarContext";
import { device } from "../styles/breakpoints";
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media${device.tablet} {
    grid-template-columns: 1fr;
  }
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;
function AppLayout() {
  // const { isSidebarOpen } = useSidebar();

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
