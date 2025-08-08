import styled from "styled-components";
import { TfiMenu } from "react-icons/tfi";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSidebar, SidebarProvider } from "../contexts/SidebarContext";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
function Header() {
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

  return (
    <StyledHeader>
      {isMobile && (
        <span>
          <TfiMenu onClick={toggleSidebar} />
        </span>
      )}
    </StyledHeader>
  );
}

export default Header;
