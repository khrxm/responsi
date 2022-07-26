import { CardGroup, Container } from "react-bootstrap";
import { CardBlogs } from "./CardBlogs";

const blogsInfo = [
  {
    title: "I-Mikom Solution",
    description:
      "Masih belum ada postingan",
  },
  {
    title: "I-Mikom Solution",
    description:
      "Masih belum ada postingan",
  },
  {
    title: "I-Mikom Solution",
    description:
      "Masih belum ada postingan",
  },
];

export const OurBlogs = () => {
  return (
    <Container fluid className="px-5 py-3">
      <div className="text-center">
        <h2 className="fs-1 fw-bold m-5 mt-0">Postingan Kami</h2>
      </div>
      <div className="d-flex justify-content-center mb-lg-5 pb-lg-5 mb-0 pb-0">
        <CardGroup className="gap-5">
          {blogsInfo.map((data) => (
            <CardBlogs
              key={data.title}
              title={data.title}
              description={data.description}
            />
          ))}
        </CardGroup>
      </div>
    </Container>
  );
};
