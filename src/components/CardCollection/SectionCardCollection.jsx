import { CardCollection } from "./CardCollection";
import a1 from "../../assets/images/a1.svg";
import a2 from "../../assets/images/a2.svg";
import a3 from "../../assets/images/a3.svg";

const collectionData = [
  {
    title: "Keunggulan I-Mikom Solution",
    subtitle: "Murah",
    description:
      "Kami menjamin layanan termurah se-Indonesia",
    image: a1,
    reverse: false,
  },
  {
    subtitle: "Cepat",
    description:
      "I-Mikom Solution berisi expert IT Engineer yang memastikan service kami cepat",
    image: a2,
    reverse: true,
  },
  {
    subtitle: "Aman",
    description:
      "Kami akan memastikan security dari service kami tidak bisa dihack",
    image: a3,
    reverse: false,
    gtshop: "Go to shop",
  },
];
export const SectionCardCollection = () => {
  return (
    <>
      {collectionData.map((data) => (
        <CardCollection
          key={data.subtitle}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          image={data.image}
          reverse={data.reverse}
          gtshop={data.gtshop}
        />
      ))}
    </>
  );
};
