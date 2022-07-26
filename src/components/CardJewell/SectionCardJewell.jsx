import s1 from "../../assets/images/s1.svg";
import s2 from "../../assets/images/s2.svg";
import { CardJewell } from "./CardJewell";

const goldData = [
  {
    reverse: false,
    image: s1,
    title: "Software Development",
    description:
      "Kami dapat membantu membuatkan aplikasi mobile,desktop, maupun web disemua platform untuk startup anda, tentunya aplikasi yang kami buat berkualitas dan sesuai permintaan anda",
  },
  {
    reverse: true,
    image: s2,
    title: "Community Building",
    description:
      "Kami dapat meningkatkan komunitas anda diberbagai social media, dengan memanfaatkan digital marketing untuk meningkatkanya. tentunya kami akan menjamin peningkatan jumlah komunitas anda",
  },
];

export const SectionCardJewell = () => {
  return (
    <>
      {goldData.map((data) => (
        <CardJewell
          key={data.title}
          reverse={data.reverse}
          image={data.image}
          title={data.title}
          description={data.description}
          price={data.price}
        />
      ))}
    </>
  );
};
