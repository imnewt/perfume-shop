import React from 'react';

import "./style.css";
const Banner = (props) => {
    return  (
        <div className="position-relative head-image d-flex align-items-center"
        >
            <div className="position-absolute w-100 text-center">
                <h4 style={{color: "#fff"}}>{props.title}</h4>
            </div>
        </div>
    )
}

export default Banner;