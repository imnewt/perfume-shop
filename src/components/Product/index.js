import React from "react";
import "./style.css";
const Product = (props) => {
    return (
        <div class="product col-12 col-md-4 col-lg-3 mt-4">
            <div class="position-relative">
                <a href="https://www.facebook.com/perfume8888" target="blank">
                    <img src={props.url} alt="product"/>
                </a>
                <div class="overlay w-100 h-100 position-absolute transition">
                    <div class="position-relative h-100">
                        <div class="btn transition position-absolute">
                            <a class="link transition" href="https://www.facebook.com/perfume8888" target="blank">Tư vấn thêm</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pt-2">
                <a class="transition" href="https://www.facebook.com/perfume8888" target="blank">Blue De Gefeiliya</a>
            </div>
        </div>
    )
}
export default Product;