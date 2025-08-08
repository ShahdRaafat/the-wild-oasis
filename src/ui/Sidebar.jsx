import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { device } from "../styles/breakpoints";
import { IoClose } from "react-icons/io5";
import { useSidebar } from "../contexts/SidebarContext";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(${(props) => (props.open ? "0" : "-100%")});
    transition: transform 0.3s ease;
    z-index: 1000;
    border-right: none;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const CloseIcon = styled(IoClose)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 4rem;
  cursor: pointer;
  color: var(--color-brand-600);
  transition: color 0.2s ease;
  display: none;
  @media${device.tablet} {
    display: block;
  }
`;
function Sidebar() {
  const { toggleSidebar, isSidebarOpen } = useSidebar();
  return (
    <StyledSidebar open={isSidebarOpen}>
      <Logo />
      <MainNav />
      <CloseIcon onClick={toggleSidebar} />
    </StyledSidebar>
  );
}

export default Sidebar;
