import { FC } from "react";
import "./Header.scss";
import Button from "../../Elements/Button/Button";
import Container from "../../Elements/Container";
import search from "../../../img/header/search.svg";
import shop from "../../../img/header/shopping-cart.svg";
import { Link } from "react-scroll";
import Menu from "../../Elements/Menu/Menu";

const Header: FC = (props) => {
  return (
    <header id={"Home"} className="header">
      <Container>
        <div className="header__inner">
          <div className="header__hit">
            <div className="header__contact-information">
              <a href="tel: 919986546583" className="header__phone">
                +91998 654 6583
              </a>
              <span>Welcome you Benco store!</span>
            </div>
            <div className="header__buttons">
              <Button text="Currency: USD" />
              <Button text="My Account" />
            </div>
          </div>
          <div className="header__navigation">
            <div className="header__logo"><Link to="Home">Logo</Link> </div>
            <nav className="header__menu">
              <ul className="header__list">
                <li>
                  <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li>
                  <Link to="Shope" spy={true} smooth={true} offset={-100} duration={500}>Shope</Link>
                </li>
                <li>
                  <Link to="Blog" spy={true} smooth={true} offset={-100} duration={500}>Blog</Link>
                </li>
                <li>
                  <Link to="AboutUs" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>
                </li>
                <li>
                  <Link to="Product" spy={true} smooth={true} offset={-100} duration={500}>Product</Link>
                </li>
                <li>
                  <Link to="Pages" spy={true} smooth={true} offset={-100} duration={500}>Pages</Link>
                </li>
                <li>
                  <Link to="ContactUS" spy={true} smooth={true} offset={50} duration={500}>Contact US</Link>
                </li>
              </ul>
              <Menu/>
            </nav>
            <div className="header__auxiliary-button">
              <img src={search} alt="search" />
              <img id={"Shope"} src={shop} alt="search" />
            </div>
          </div>
          <div className="header__information">
            <p className="header__article">
              Simple Furniture with <span>high-end</span> quality
            </p>
            <p className="header__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button text="Shop Now" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
