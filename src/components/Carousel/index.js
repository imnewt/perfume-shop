import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './style.css';
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

const Carousel = () => {
    const [content] = useState([
        {
            title: 'CAM KẾT HÀNG CHÍNH HÃNG',
            button: 'Mua Ngay',
            image: Slider1
        },
        {
            title: 'MIỄN PHÍ VẬN CHUYỂN',
            button: 'Mua Ngay',
            image: Slider2
        },
        {
            title: 'NHẬN ĐẶT HÀNG THEO YÊU CẦU',
            button: 'Mua Ngay',
            image: Slider3
        }
    ]);

    return (
        <Slider className="slider-wrapper" autoplay={2500}>
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner pt-6">
                        <h1>{item.title}</h1>
                        <Link to="#nuoc-hoa-nam">
                            <button>{item.button}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default Carousel;