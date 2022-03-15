import { FC } from "react";
import Container from "../../../Elements/Container";
import "./FeaturedProducts.scss";
import "../MainContent.scss";
import first from "../../../../img/featured-products/first.png";
import second from "../../../../img/featured-products/second.png";
import third from "../../../../img/featured-products/third.png";
import fourth from "../../../../img/featured-products/fourth.png";
import five from "../../../../img/featured-products/five.png";
import sixe from "../../../../img/featured-products/sixe.png";
import FeaturedProductsCell from "./FeaturedProductsCell";


export interface productsType  {
  img: string;
  name: string;
  text: string;
  price: number;
  discaunt: number;
  rating: number;
};


const FeaturedProducts: FC = () => {



  const products: Array<productsType> = [
    {
      img: first,
      name: "Wooden Table-Chair",
      price: 1299,
      discaunt: 1199,
      rating: 3,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
    {
      img: second,
      name: "Wooden Table-Chair",
      price: 1599,
      discaunt: 1399,
      rating: 4,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
    {
      img: third,
      name: "Wooden Table-Chair",
      price: 1399,
      discaunt: 1099,
      rating: 2,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
    {
      img: fourth,
      name: "Wooden Table-Chair",
      price: 1499,
      discaunt: 1399,
      rating: 3,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
    {
      img: five,
      name: "Wooden Table-Chair",
      price: 1199,
      discaunt: 1299,
      rating: 3,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
    {
      img: sixe,
      name: "Wooden Table-Chair",
      price: 1199,
      discaunt: 1099,
      rating: 3,
      text: "You don’t have and a tablechair. Shop with 40% discount !",
    },
  ];

  return (
    <section className="featured-products">
      <Container width={1360}>
        <div className="featured-products__inner">
          <div className="featured-products__hat hat">
            <div className="featured-products__title title">
              FEATURED PRODUCTS
            </div>
            <div className="featured-products__wishes wishes">
              Find our best products faster and qualitier product’s choices from
              us.
            </div>
          </div>
          <div className="featured-products__cells">
          {products.map((elem,index)=><FeaturedProductsCell key={index} {...elem}/>)}  

          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
