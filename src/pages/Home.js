import React, { useState } from 'react';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Carousel from "../components/Carousel";
import CategoryBlock from "../components/CategoryBlock";
import Cate1 from "../assets/images/cate1.jpg";
import Cate2 from "../assets/images/cate2.jpg";
import Cate3 from "../assets/images/cate3.png";
const Home = () => {
  const [categoryBlock] = useState([
    {
      imgUrl: Cate1,
      link: "/books/category/history"
    },
    {
      imgUrl: Cate2,
      link: "/books/category/science"
    },
    {
      imgUrl: Cate3,
      link: "/books/category/design"
    }
  ])

  return (
    <div className="homepage">
      <Carousel />
      <Container className="pt-5">
        <h2 className="heading">thương hiệu nổi bật</h2>
        <Row>
          {
            categoryBlock.map(item => (
              <Col lg="4">
                <CategoryBlock imgUrl={item.imgUrl} link={item.link} />
              </Col>
            ))
          }
        </Row>
      </Container>
      <h2 className="heading">sản phẩm nổi bật</h2>
    </div>
  );
};

export default Home;