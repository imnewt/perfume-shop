import React from 'react';
import { Container, Row } from "reactstrap";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
const Home = () => {
  return (
    <div className="homepage">
      <Carousel />
      <Container>
        <div id="nuoc-hoa-nam" class="id-block"></div>
        <h1 className="heading">nước hoa nam</h1>
        <Row>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-burbery-mr-burberry-100ml-12212-768x768.png "/>
          <Product url="https://cdn.vongroup.vn/wp-content/uploads/2019/04/nuoc-hoa-nam-Versace-Pour-Homme-50ml.jpg"/>
          <Product url="https://cdn.vongroup.vn/wp-content/uploads/2019/05/nuoc-hoa-nam-Gucci-Guilty-Absolute-100ml.jpg"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-le-labo-santal-33-100ml-11331-768x873.jpg"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-gucci-made-to-measure-100ml-edt-10001-768x768.jpg"/>
          <Product url="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/09/nuoc-hoa-danh-cho-nam-chanel-bleu-edp-100ml-5d8305516039e-19092019113425.jpg"/>
          <Product url="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/10/nuoc-hoa-versace-eros-cho-nam-say-dam-phai-nu-minisize-5ml-5db936dcd37ed-30102019140812.jpg"/>
          <Product url="https://myphamthuhang.com/wp-content/uploads/2018/08/nuoc-hoa-nam-dior-sauvage-100ml-edp-32103.jpg"/>
        </Row>
      </Container>
      <Container>
        <div id="nuoc-hoa-nu" class="id-block"></div>
        <h1 className="heading">nước hoa nữ</h1>
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
        <div id="nuoc-hoa-unisex" class="id-block"></div>
        <h1 className="heading">nước hoa unisex</h1>
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