import { FC, useContext } from "react";
import "./Header.scss";
import Button from "../../Elements/Button/Button";
import Container from "../../Elements/Container";
import search from "../../../img/header/search.svg";
import shop from "../../../img/header/shopping-cart.svg";
import { Link } from "react-scroll";
import Menu, { menu } from "../../Elements/Menu/Menu";
import { ModalContext } from "../ContentProvider/ContentProvider";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useAppSelector } from "../../../hooks/redux";

const Header: FC = (props) => {
  const modalParamets = useContext(ModalContext);
  const { product } = useAppSelector((state) => state.ProductReducer);

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
            <div className="header__logo">
              <Link to="Home">Logo</Link>{" "}
            </div>
            <nav className="header__menu">
              <ul className="header__list">
                {menu.map((elem, index) => (
                  <li key={index}>
                    <Link
                      to={elem.href}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {elem.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Menu />
            </nav>
            <div className="header__auxiliary-button">
              <img src={search} alt="search" />
              <div className="header__shop">
                {product.length == 0 || <p>{product.length}</p>}
                <img
                  onClick={() => modalParamets?.setModal(true)}
                  id={"Shope"}
                  src={shop}
                  alt="search"
                />
              </div>
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
            <Button click={()=>modalParamets?.setModal(true)} text="Shop Now" />
          </div>
        </div>
      </Container>
      <ShoppingCart />
    </header>
  );
};

export default Header;
