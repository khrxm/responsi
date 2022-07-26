import { Col, Container, Image, Row } from "react-bootstrap";
import logoamikom from "../../assets/images/logoamikom.png";
import logoamikom2 from "../../assets/images/logoamikom.png";
import logoamikom3 from "../../assets/images/logoamikom.png";
import logoamikom4 from "../../assets/images/logoamikom.png";

export const Partners = () => {
  return (
    <Container fluid className="text-center py-5">
      <span style={{ fontSize: "44px" }}>Partner kami</span>
      <Row className="mt-5 justify-content-center gap-lg-3 gap-5">
        <Col sm={2}>
          <Image src={logoamikom} fluid />
        </Col>
        <Col sm={2}>
          <Image src={logoamikom2} fluid />
        </Col>
        <Col sm={2}>
          <Image src={logoamikom3} fluid />
        </Col>
        <Col sm={2}>
          <Image src={logoamikom4} fluid />
        </Col>
        <Col sm={2}>
          <Image src={logoamikom} fluid />
        </Col>
      </Row>
    </Container>
  );
};
