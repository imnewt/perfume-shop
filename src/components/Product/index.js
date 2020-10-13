import React from "react";
import { Container, Row } from "reactstrap";

import "./style.css";

const Product = (props) => {
    return (
        <div class="product col-6 col-md-4 col-lg-3 mt-4">
            <div class="position-relative">
                <a href="#">
                    <img src={props.url}/>
                </a>
                <div class="so-2-overlay w-100 h-100 position-absolute transition">
                    <div class="position-relative h-100">
                        <div class="so-2-btn transition position-absolute">
                            <a class="so-2-link transition" href="https://www.facebook.com/saigongaming" target="blank">Tư vấn thêm</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tp-info pt-2">
                <a class="tp-name transition" href="https://www.facebook.com/saigongaming" target="blank">Blue De Gefeiliya</a>
                <div class="price">$148.00</div>
            </div>
        </div>
    )
}

export default Product;