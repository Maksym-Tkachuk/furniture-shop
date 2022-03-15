import { FC } from "react";
import "./Footer.scss";
import Container from "../../Elements/Container";
import facebook from "../../../img/footer/facebook.svg";
import insta from "../../../img/footer/insta.png";
import linkedin from "../../../img/footer/linkedin.svg";
import twitter from "../../../img/footer/twitter.svg";
import google from "../../../img/footer/google.svg";
import pinterest from "../../../img/footer/pinterest.svg";
import { Link } from "react-scroll";

const Footer: FC = () => {
  return (
    <footer id={'ContactUS'} className="footer">
      <div className="footer__top">
        <Container>
          <div className="footer__inner">
            <div className="footer__information">
              <div className="footer__logo">LOGO</div>
              <div className="footer__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo
                eiusmod tempor incdididunt ut labore et dolore magna aliqua. Ut
                enim ad minzim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="footer__social-groups">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insta" />
                <img src={linkedin} alt="linkedin" />
                <img src={twitter} alt="twitter" />
                <img src={google} alt="google" />
                <img src={pinterest} alt="pinterest" />
              </div>
            </div>
            <div className="footer__navigation">
              <ul className="footer__menu">
                <li>Quick Links</li>
                <li><Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link></li>
                <li><Link to="AboutUs" spy={true} smooth={true} offset={-100} duration={500} >ABOUT US</Link></li>
                <li><Link to="Blog" spy={true} smooth={true} offset={-100} duration={500}>BLOG</Link></li>
                <li><Link to="Product" spy={true} smooth={true} offset={-100} duration={500}>PRODUCTS</Link></li>
              </ul>
              <ul className="footer__contact-details">
                <li>Support</li>
                <li><Link to="HELP" spy={true} smooth={true} offset={-100} duration={500}>HELP</Link></li>
                <li><Link to="ContactUS" spy={true} smooth={true} offset={-100} duration={500} >CONTACT</Link></li>
                <li><Link to="POLICY" spy={true} smooth={true} offset={-100} duration={500} >POLICY</Link></li>
                <li><Link to="SERVICE" spy={true} smooth={true} offset={-100} duration={500} >SERVICE</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer__bottom">
        <p>Copyright All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
