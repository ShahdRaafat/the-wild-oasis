import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import { useIsTablet } from "../hooks/useIsTablet";
import { useSidebar, SidebarProvider } from "../contexts/SidebarContext";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: space-between;
    padding: 1.2rem 3.2rem;
  }
`;
const RightContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;
function Header() {
  const isTablet = useIsTablet();
  const { toggleSidebar } = useSidebar();

  return (
    <StyledHeader>
      {isTablet && (
        <span>
          <TfiMenu
            onClick={toggleSidebar}
            style={{ cursor: "pointer", marginRight: "1rem" }}
          />
        </span>
      )}
      <RightContainer>
        <UserAvatar />
        <HeaderMenu />
      </RightContainer>
    </StyledHeader>
  );
}

export default Header;
