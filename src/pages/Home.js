import React, { useState } from 'react';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Carousel from "../components/Carousel";
import CategoryBlock from "../components/CategoryBlock";
import Product from "../components/Product";

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
      {/* <Container className="pt-5">
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
      </Container> */}
      
      <Container>
        <div id="nuoc-hoa-nam" class="id-block"></div>
        <h2 className="heading">nước hoa nam</h2>
        <Row>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-burbery-mr-burberry-100ml-12212-768x768.png "/>
          <Product url="https://cdn.vongroup.vn/wp-content/uploads/2019/04/nuoc-hoa-nam-Versace-Pour-Homme-50ml.jpg"/>
          <Product url="https://cdn.vongroup.vn/wp-content/uploads/2019/05/nuoc-hoa-nam-Gucci-Guilty-Absolute-100ml.jpg"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-le-labo-santal-33-100ml-11331-768x873.jpg"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-gucci-made-to-measure-100ml-edt-10001-768x768.jpg"/>
          <Product url="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/09/nuoc-hoa-danh-cho-nam-chanel-bleu-edp-100ml-5d8305516039e-19092019113425.jpg"/>
          <Product url="https://lh3.googleusercontent.com/proxy/ycgIWudyfZryWFaJLe31sFzYxVr5CPsgpPb_ck4L878NxbPAaU0dPzfHfXdKdx3FSFB6MNTSqj5duvtuIZhPEK2w47SkJ2auy5vvbgJhIL5dyPsUu1Cj7jp9q7-dbSQBZkW9YmFYf4Sf4YrgmdMb7DWbezfbBbs9B0d7eA"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-nam-dior-sauvage-100ml-edp-32103.jpg"/>
        </Row>
      </Container>
      <Container>
        <div id="nuoc-hoa-nu" class="id-block"></div>
        <h2 className="heading">nước hoa nữ</h2>
        <Row>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
        </Row>
      </Container>
      <Container>
        <div id="nuoc-hoa-mini" class="id-block"></div>
        <h2 className="heading">nước hoa mini</h2>
        <Row>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
          <Product url="https://nuochoangoisao.com/wp-content/uploads/2019/03/nuoc-hoa-nam-allure-50ml-1.jpg"/>
        </Row>
      </Container>
      
      
    </div>
  );
};

export default Home;