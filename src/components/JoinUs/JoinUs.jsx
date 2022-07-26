import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const JoinUs = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hallo! ${email}, Terimakasih telah bergabung, kami akan mengirimkan email jika ada promo terbaru.`);
  };

  return (
    <Container fluid className="px-5 py-3 my-lg-5" id="form">
      <div className="text-center">
        <h3 className="fw-bold fs-1 py-5">Dapatkan informasi promo I-Mikom Solution Terbaru</h3>
      </div>
      <Form className="py-0 d-flex justify-content-center flex-lg-row flex-column" onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          placeholder="Masukan Email Kamu"
          className="me-2 form-email py-3 mb-3 mb-lg-0"
          onChange={handleChange}
          value={email}
        />
        <Button variant="dark" className="text-uppercase px-lg-3" onCLick={handleSubmit}>
          Bergabung
        </Button>
      </Form>
    </Container>
  );
};
