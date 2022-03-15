import { FC } from "react";
import Container from "../../../Elements/Container";
import "./OurBlog.scss";
import "../MainContent.scss";
import first from "../../../../img/our-blog/first.png";
import second from "../../../../img/our-blog/second.png";
import third from "../../../../img/our-blog/third.png";
import fourth from "../../../../img/our-blog/fourth.png";

const OurBlog: FC = () => {
  type pagesType = {
    data: string;
    coments: string;
    name: string;
    img: string;
  };
  const pages: Array<pagesType> = [
    { data: "13 September", coments: "05", img: first, name: "Home Decore" },
    { data: "30 November", coments: "09", img: second, name: "Home Decore" },
    { data: "3 December", coments: "12", img: third, name: "Home Decore" },
    { data: "27 December", coments: "06", img: fourth, name: "Home Decore" },
  ];

  return (
    <section id={'Blog'} className="our-blog">
      <Container>
        <div className="our-blog__inner">
          <div className="our-blog__hat hat">
            <div className="our-blog__title title">WHAT’S NEW IN OUR BLOG</div>
            <div className="our-blog__wishes wishes">
              Only for our customers we have some collections of the blog post.
            </div>
          </div>
          <div className="our-blog__pages">
            {pages.map((elem:pagesType, index) => (
              <div key={index} className="our-blog__page">
                <img src={elem.img} alt={elem.name} />
                <div className="our-blog__information">
                  <div className="our-blog__time-comments">
                    <span>{elem.data} </span>
                    <span>Comments {elem.coments}</span>
                  </div>
                  <div className="our-blog__name">{elem.name}</div>
                  <p>Read More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurBlog;
