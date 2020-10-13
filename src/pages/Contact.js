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

import Banner from "../components/Banner"
const Contact = () => {
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
    <div id="contactpage">
        <Banner title="test"/>
        <span ><strong>Thông tin liên hệ</strong></span>
        <ul>
            <li><span>Làm việc từ thứ 2 - thứ 7.</span></li>
            <li><span>Hotline: 0901350494.</span></li>
            <li><span>Địa chỉ: 285/37 Cách Mạng Tháng Tám, Phường 12, Quận 10, TP.HCM.</span></li>
            
        </ul>
        <span><strong>Cách thức mua hàng</strong></span>
        <ul>
            <li><span >Mua trực tiếp tại địa chỉ trên.</span></li>
            <li><span >Đặt hàng qua <a href="https://www.facebook.com/saigongaming" target="&quot;_blank" rel="noopener noreferrer"><strong>fanpage Saigongaming</strong></a></span></li>
            <li><span >Gọi qua số hotline.</span></li>
        </ul>
        <span style={{display:"block"}}>Hàng được ship, mặc định thông qua dịch vụ Giao Hàng Tiết Kiệm. Một số trường hợp sẽ được ship qua Grab theo yêu cầu của khách hàng.</span>

        <span><strong>Thông tin chuyển khoản</strong></span>
        <ul>
            <li><span >Ngân hàng ACB</span></li>
            <li><span >Số tài khoản: 10306297</span></li>
            <li><span >Tên tài khoản: Nguyen Minh Hung</span></li>
        </ul>
        <span><strong>Chính sách bảo hành</strong></span>
        <ul>
            <li><span>Cửa hàng nhận bảo hành dựa theo tem và phiếu ghi.</span></li>
            <li><span>Không bảo hành các trường hợp: Khách tự ý mở, sản phẩm bị rơi vỡ, không có phiếu ghi, tem rách.</span></li>
            <li><span>Với phương châm phục vụ khách hàng tốt nhất, cửa hàng sẽ linh động hỗ trợ tối đa các trường hợp không được bảo hành, xin quý khách yên tâm.</span></li>
        </ul>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.431915536731!2d106.67675421461426!3d10.778194192320349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f75afc081b5%3A0x9fc19064fd995fbc!2sSaigongaming!5e0!3m2!1sen!2s!4v1602592721950!5m2!1sen!2s" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
    </div>
  );
};

export default Contact;