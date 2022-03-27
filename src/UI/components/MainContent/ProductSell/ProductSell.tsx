import { FC } from "react";
import "./Slider.scss";
import "./ProductSell.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CellOfProduct, { CellOfProductType } from "./CellOfProduct";
import CouchCartoon from "../../../../img/product-For-Sell/CouchCartoon.png";
import CueroChair from "../../../../img/product-For-Sell/CueroChair.png";
import OutdoorTable from "../../../../img/product-For-Sell/OutdoorTable.png";
import WoodenDrawer from "../../../../img/product-For-Sell/WoodenDrawer.png";
import BedroomBed from "../../../../img/product-For-Sell/BedroomBed.png";
import Container from "../../../Elements/Container";

const ProductSell: FC = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products: Array<CellOfProductType> = [
    {
      id:1,
      productPicture: CouchCartoon,
      productName: "Couch Cartoon",
      productPrice: 159,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 4,
    },
    {
      id:2,
      productPicture: CueroChair,
      productName: "Cuero Chair",
      productPrice: 199,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 3,
    },
    {
      id:3,
      productPicture: BedroomBed,
      productName: "Bedroom Bed",
      productPrice: 359,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 5,
    },
    {
      id:4,
      productPicture: OutdoorTable,
      productName: "Outdoor Table",
      productPrice: 99,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 4,
    },
    {
      id:5,
      productPicture: WoodenDrawer,
      productName: "Wooden Drawer",
      productPrice: 299,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 3,
    },
    {
      id:6,
      productPicture: CouchCartoon,
      productName: "Couch Cartoon",
      productPrice: 159,
      productInformation: "Lorem Iipsum is simple and dumy text.",
      productRating: 4,
    },
  ];

  return (
    <section id={'Product'} className="product-sell">
      <Container width={1520}>
        <div className="product-sell__inner">
          <div className="product-sell__hat hat">
            <div className="product-sell__title title">
              WHAT PRODUCT WE SELL
            </div>
            <div className="product-sell__wishes wishes">
              Find our best products faster, better and qualitier product’s
              choices from us.
            </div>
          </div>
          <Slider className="product-sell__cells" {...settings}>
            {products.map((elem: CellOfProductType,index) => (
              <CellOfProduct key={index}  {...elem} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default ProductSell;
