import { FC } from "react";

import "./MainContent.scss";
import AboutUS from "./AboutUs/AboutUS";
import ProductSell from "./ProductSell/ProductSell";
import SpecialDeals from "./SpecialDeals/SpecialDeals";
import StarProducts from "./StarProducts/StarProducts";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import OurBlog from "./OurBlog/OurBlog";
import PeopleSays from "./PeopleSays/PeopleSays";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import SubscribeUs from "./SubscribeUs/SubscribeUs";
import { Link } from "react-scroll";

const MainContent: FC = (props) => {
  return (
    <main className="main">
      <AboutUS />
      <ProductSell />
      <SpecialDeals />
      <StarProducts />
      <AdditionalInformation />
      <OurBlog />
      <PeopleSays />
      <FeaturedProducts />
      <SubscribeUs />

      <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>  
        <div className="button-top"></div>
      </Link>
    </main>
  );
};

export default MainContent;
