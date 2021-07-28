let imgs = document.querySelectorAll(".section3--img");


imgs.forEach(elem => {
    elem.addEventListener("mouseover", function(e) {
        console.log(e.target.nextSibling.nextSibling)
        e.target.nextSibling.nextSibling.style.opacity = "1";
        
    }, false);
});

imgs.forEach(elem => {
    elem.addEventListener("mouseout", function(e) {
        console.log(e.target.nextSibling.nextSibling)
        e.target.nextSibling.nextSibling.style.opacity = "0";
        
    }, false);
});