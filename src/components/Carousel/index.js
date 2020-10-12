import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './style.css';

import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";
class Carousel extends Component {
    state = {
        content: [
        {
            title: 'SẢN PHẨM ĐA DẠNG',
            description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            button: 'Mua Ngay',
            image: Slider1
        },
        {
            title: 'CHẤT LƯỢNG TỐT',
            description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
            button: 'Mua Ngay',
            image: Slider2
        },
        {
            title: 'DỊCH VỤ CHUYÊN NGHIỆP',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
            button: 'Mua Ngay',
            image: Slider3
        }
        ]
    }

    render() {
        const { content } = this.state;
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
                            <p>{item.description}</p>
                            <Link to="/books/all">
                                <button>{item.button}</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}

export default Carousel;