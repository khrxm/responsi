import { Col, Container, Image, Row } from "react-bootstrap";
import logoamikom from "../../assets/images/logoamikom.png";
import berikan from "../../assets/images/berikan.svg";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Main = () => {
  return (
    <Container fluid>
      <SocialMedia />
      <Row>
        <Col sm={6}>
          <Image src={logoamikom} fluid className="logoamikom" />
        </Col>
        <Col sm={4} className="pt-lg-5 mt-lg-4 ps-lg-4 ms-lg-3">
          <h3 style={{ fontSize: "34px" }}>Apa itu <br></br>I-Mikom Solution?</h3>
          <p></p>
          <p>
           <b>I-Mikom Solution</b> sudah dipercaya ratusan startup dari dalam maupun luar negri, sudah terbukti membantu pertumbuhan startup secara signifikan. 
           <br></br>Kami memberikan service terbaik untuk startup anda dengan jaminan harga termurah se-Indonesia!
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h1 className="ms-lg-4 text-center text-sm-start mt-3 mt-lg-0">
            <h2 style={{ fontSize: "34px"}}>Kenapa harus<br></br>I-Mikom Solution?</h2>
          </h1>
          <p></p>
          <p style={{ marginRight: "150px", marginLeft: "25px" }}>
            I-Mikom Solution sudah dipercaya ratusan startup dari dalam maupun luar negri, sudah terbukti membantu pertumbuhan startup secara signifikan. 
           <br></br>Kami memberikan service terbaik untuk startup anda dengan jaminan harga termurah se-Indonesia!
           </p>
        </Col>
        <Col sm={6}>
          <Image
            src={berikan}
            fluid
            className="berikan"
            style={{ marginTop: "-200px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
