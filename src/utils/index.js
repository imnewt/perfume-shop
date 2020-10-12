module.exports.scrollToTop = () => {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        var scrollAnimation = setTimeout("scrollToTop()", 30);
    } 
    else 
        clearTimeout(scrollAnimation);
}