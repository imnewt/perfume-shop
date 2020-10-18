import React from "react";
import "./style.css";
const ScrollButton = () => {
    const scrollToTop = () => {
        var position = document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
            var scrollAnimation = setTimeout(scrollToTop(), 30);
        } 
        else 
            clearTimeout(scrollAnimation);
    }
    return (
        <a id="scroll-btn" href="#top" onClick={scrollToTop}>
            <i class="fas fa-chevron-up"></i>
        </a>
    );
};
export default ScrollButton;