import { FC } from "react";
import Container from "../../../Elements/Container";
import "./PeopleSays.scss";
import "../MainContent.scss";
import first from "../../../../img/people-seys/firstMan.png";
import second from "../../../../img/people-seys/SecondMan.png";
import third from "../../../../img/people-seys/ThirdMan.png";

const PeopleSays: FC = () => {
  
  type postsType = {
    posada: string;
    text: string;
    name: string;
    img: string;
  };
  const posts: Array<postsType> = [
    {
      posada: "Co-founder",
      text: '" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actualteachings”.',
      img: first,
      name: "Jessica Robert",
    },
    {
      posada: "founder",
      text: '" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actualteachings”.',
      img: second,
      name: "Rocky Pere",
    },
    {
      posada: "Co-founder",
      text: '" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actualteachings”.',
      img: third,
      name: "Albert Amansan",
    },
  ];

  return (
    <section id={'HELP'} className="people-says">
      <Container>
        <div className="people-says__inner">
          <div className="people-says__hat hat">
            <div className="people-says__title title">WHATS PEOPLE SAY’S</div>
          </div>
        </div>
        <div className="people-says__messages">
          {posts.map((elem: postsType, index) => (
            <div key={index} className="people-says__message">
              <img
                className="people-says__picture"
                src={elem.img}
                alt={elem.name}
              />
              <div className="people-says__text">{elem.text}</div>
              <div className="people-says__author">
                <p>{elem.name}</p>
                <p>{elem.posada}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PeopleSays;
