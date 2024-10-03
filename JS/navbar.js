function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Img/Img_navbar/menu-de-tres-linhas.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Img/Img_navbar/marca-de-cruz.png";
    }
}