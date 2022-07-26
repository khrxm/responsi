import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const CardJewell = ({ reverse, image, title, description, price }) => {
  return (
    <Container fluid className="py-5" id="jewell">
      {reverse === false ? (
        <Row className="flex-column-reverse flex-lg-row justify-content-evenly">
          <Col sm={6}>
            <Image src={image} fluid className="ring mt-5 mt-lg-0" />
          </Col>
          <Col sm={5} className="ps-lg-4 ms-lg-5">
            <div className="ms-lg-5 info">
              <h2 style={{ fontSize: "48px", fontWeight: "700", marginTop: "100px" }}>{title}</h2>
              <p className="pt-3 pe-lg-5" style={{ fontSize: "14px" }}>
                {description}
              </p>
              </div>
          </Col>
        </Row>
      ) : (
        <Row className="flex-column flex-lg-row justify-content-evenly">
          <Col sm={6} className="pe-lg-4 me-lg-5">
            <div className="me-lg-5 ms-lg-5 info">
              <h2 style={{ fontSize: "48px", fontWeight: "700", marginTop:"50px"}}>{title}</h2>
              <p className="pt-3 pe-lg-5" style={{ fontSize: "14px" }}>
                {description}
              </p>
            </div>
          </Col>
          <Col sm={5} className="ms-lg-5">
            <Image src={image} fluid className="ring mt-5 mt-lg-0" />
          </Col>
        </Row>
      )}
    </Container>
  );
};
