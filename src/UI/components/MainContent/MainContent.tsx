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

const MainContent: FC = (props) => {
  return (
    <main className="main">
      <AboutUS />
      <ProductSell />
      <SpecialDeals />
      <StarProducts />
      <AdditionalInformation />
      <OurBlog />
      <PeopleSays/>
      <FeaturedProducts/>
      <SubscribeUs/>
    </main>
  );
};

export default MainContent;
