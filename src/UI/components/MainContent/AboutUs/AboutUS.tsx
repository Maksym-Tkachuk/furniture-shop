import { FC, useContext } from "react";
import "./AboutUS.scss";
import "../MainContent.scss";
import Button from "../../../Elements/Button/Button";
import home from "../../../../img/about-Us/home.png";
import group from "../../../../img/about-Us/Group.png";
import { ModalContext } from "../../ContentProvider/ContentProvider";

const AboutUS: FC = (props) => {

  const modalParamets = useContext(ModalContext)
  return (
    <section id={'AboutUs'} className="about-us">
      <div className="about-us__content">
        <div className="about-us__img">
          <img src={home} alt="home" />
        </div>
        <div className="about-us__information">
          <div className="about-us__title title">ABOUT US</div>
          <div className="about-us__article">FURNITURE OF ART.</div>
          <div className="about-us__text">
            Lorem Ipsum is simply dummy text of the printing anLorem Ipsum is
            simply dummy text of the printing and typesetting industry.d
            typesetting industry.
          </div>
          <Button click={()=>{modalParamets?.setModal(true); modalParamets?.setWindow("cat")}} text="Shop Now" value={true} />
        </div>
        <img src={group} className="about-us__item" alt="group" />
      </div>
    </section>
  );
};

export default AboutUS;
