import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import { useIsTablet } from "../hooks/useIsTablet";
import { useSidebar, SidebarProvider } from "../contexts/SidebarContext";
import Logout from "../features/authentication/Logout";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
function Header() {
  const isTablet = useIsTablet();
  const { toggleSidebar } = useSidebar();

  return (
    <StyledHeader>
      {isTablet && (
        <span>
          <TfiMenu onClick={toggleSidebar} />
        </span>
      )}
      <Logout />
    </StyledHeader>
  );
}

export default Header;
