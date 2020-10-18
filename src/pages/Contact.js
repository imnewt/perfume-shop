import React from 'react';
import { Container, Row } from "reactstrap";
import Banner from "../assets/images/banner.jpg"
const Contact = () => {
  return (
    <div id="contactpage">
        <div className="banner">
          <img src={Banner} alt="banner"/>
        </div>
        <Container className="mt-3">
          <Row>
            <div className="col-12 col-md-6 mt-5">
              <span><strong>Thông tin liên hệ</strong></span>
              <ul>
                <li><span>Làm việc từ thứ 2 - thứ 7</span></li>
                <li><span>Điện thoại: 0918888955</span></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <span><strong>Cách thức mua hàng</strong></span>
              <ul>
                  <li><span >Đặt hàng qua <a href="https://www.facebook.com/ferfume8888" target="blank"><b>fanpage Perfume8888</b ></a></span></li>
                  <li><span >Gọi qua số hotline để tư vấn trực tiếp.</span></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <span><strong>Thông tin chuyển khoản</strong></span>
              <ul>
                  <li><span >Ngân hàng ACB</span></li>
                  <li><span >Số tài khoản: 10306297</span></li>
                  <li><span >Tên tài khoản: Nguyen Minh Hung</span></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 mt-5">
              <span><strong>Chính sách bảo hành</strong></span>
              <ul>
                  <li><span>Cửa hàng nhận bảo hành dựa theo tem và phiếu ghi.</span></li>
                  <li><span>Không bảo hành các trường hợp: Khách tự ý mở, sản phẩm bị rơi vỡ, không có phiếu ghi, tem rách.</span></li>
                  <li><span>Với phương châm phục vụ khách hàng tốt nhất, cửa hàng sẽ linh động hỗ trợ tối đa các trường hợp không được bảo hành, xin quý khách yên tâm.</span></li>
              </ul>
            </div>
          </Row>
        </Container>
    </div>
  );
};

export default Contact;