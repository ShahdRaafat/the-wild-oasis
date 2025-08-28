import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { device } from "../styles/breakpoints";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    padding: 1.5rem;
  }

  @media ${device.mobile} {
    gap: 2rem;
    padding: 1rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
