const body = document.body,
    scrollWrap = document.getElementsByTagName("section") [0],
    height = 0,
    speed = 0.02;

var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll  = requestAnimationFrame(smoothScroll);
// }

smoothScroll()

function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}