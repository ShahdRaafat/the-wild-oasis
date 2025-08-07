import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 30px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The wild oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button>check in</Button>
            <Button size="large" variation="primary">
              check out
            </Button>
          </div>
        </Row>
        <Row>
          <Heading as="h3">Form</Heading>
          <div>
            <Input type="number" placeholder="shosho" />
            <Input type="number" placeholder="shosho" />
          </div>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
