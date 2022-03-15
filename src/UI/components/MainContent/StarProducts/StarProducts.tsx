import { FC } from "react";
import "./StarProducts.scss";
import "../MainContent.scss";
import "../ProductSell/Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModernChair from "../../../../img/star-products/ModernChair.png";
import AntiqueChair from "../../../../img/star-products/AntiqueChair.png";
import MagazineHolder from "../../../../img/star-products/MagazineHolder.png";
import ComfortChair from "../../../../img/star-products/ComfortChair.png";
import Container from "../../../Elements/Container";
import Slider from "react-slick";
import StarProductCell, { StarProductCellType } from "./StarProductCell";

const StarProducts: FC = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products: Array<StarProductCellType> = [
    { name: "Modern Chair", price: 99.99, rating: 4.7, img: ModernChair },
    { name: "Antique Chair", price: 299.99, rating: 4.5, img: AntiqueChair },
    {
      name: "Magazine Holder",
      price: 149.99,
      rating: 5.0,
      img: MagazineHolder,
    },
    { name: "Comfort Chair", price: 599.99, rating: 3.5, img: ComfortChair },
    { name: "Antique Chair", price: 299.99, rating: 4.5, img: AntiqueChair },
  ];

  return (
    <section id={"Pages"} className="star-products">
      <Container width={1520}>
        <div className="star-products__inner">
          <div className="star-products__hat hat">
            <div className="star-products__title title">OUR STAR PRODUCTS</div>
            <div className="star-products__wishes wishes">
              Discover all our beautiful and unique products which are perfect
              for your home.
            </div>
          </div>
        </div>
        <div className="star-products__navigation navigation">
          <div className="navigation__button">
            <p>FEATURE</p>
          </div>
          <div className="line"></div>
          <div className="navigation__button">
            <p>LATEST</p>
          </div>
          <div className="line"></div>
          <div className="navigation__button">
            <p> SELLER</p>
          </div>
        </div>
        <Slider className="star-products__cells" {...settings}>
          {products.map((elem, index) => (
            <StarProductCell key={index} {...elem} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default StarProducts;
