function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu');
    const icon =document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

//slideshow
let index = 0;
slideshow();

function slideshow() {
    let i;
    const image = document.getElementsByClassName('slides');
    for (i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
    index++;
    if(index > image.length) {
        index = 1
    } 
    image[index-1].style.display = 'block';
    setTimeout(slideshow, 4000);
}