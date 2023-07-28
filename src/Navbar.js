import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Train Central</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
