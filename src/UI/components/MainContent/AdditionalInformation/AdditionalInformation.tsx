import { FC } from "react";
import Container from "../../../Elements/Container";
import "../MainContent.scss";
import "./AdditionalInformation.scss";
import sofa from "../../../../img/star-products/sofa.svg";
import car from "../../../../img/star-products/car.svg";
import headPhones from "../../../../img/star-products/headPhones.svg";
import money from "../../../../img/star-products/money.svg";

const AdditionalInformation: FC = (props) => {
  type servicesType = { img: string; title: string; text: string };

  const services: Array<servicesType> = [
    { img: car, title: "Free Shipping", text: "Orders over $100" },
    { img: headPhones, title: "24/7 Support", text: "Shop with confidence" },
    { img: money, title: "10-Day Returns", text: "Orders over $100" },
  ];

  return (
    <section id={"POLICY"} className="additional-information">
      <Container>
        <div className="additional-information__inner">
          <img src={sofa} alt="sofa" />
          <div className="additional-information__row">
            <div className="additional-information__services">
              {services.map((elem: servicesType, index) => (
                <div key={index} className="additional-information__service">
                  <img src={elem.img} alt={elem.title} />
                  <div className="additional-information__block">
                    <p>{elem.title}</p>
                    <p>{elem.text} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdditionalInformation;
