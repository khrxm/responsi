import { Card, Carousel } from "react-bootstrap";

export const CardCarousel = () => {
  return (
    <>
      <h3 className="mb-4 ms-lg-5 fs-1 fw-bold">Apa kata mereka?</h3>
      <Carousel variant="dark">
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Amikom Yogyakarta</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Universitas
            </Card.Subtitle>
            <p>
              Pelayanan cepat 
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Gojek</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Startup
            </Card.Subtitle>
            <p>
              Sangat berkualitas
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>UGM</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">Universitas</Card.Subtitle>
            <p>
             Murah banget!
            </p>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
