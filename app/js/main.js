let myFullpage = new fullpage('#fullpage', {
    anchors:['landing', 'discover', 'services'],
    navigation: true,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE']
});


const menuIcon = document.querySelector('.hamburger-menu');
const burgerMenu = document.getElementById('burger');
const links = document.getElementById('links');
const li = document.querySelectorAll('.small > ul > li');
let i = 1;

window.addEventListener('popstate', () => {
    let link = document.querySelectorAll("a[href='" + window.location.hash + "']");
    $('.links > ul > li > a').not(link).removeClass('active');
    $(link).addClass('active');
});

burgerMenu.addEventListener('click', () => {
    menuIcon.classList.toggle('change');

    if (i === 1){
        links.style.height = '100vh';
        i = 1- i;
    } else {
        links.style.height = '0';
        i = 1- i;
    }

    li.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade .5s ease forwards ${index/4}s`;
        }
    })
})

$('.links > ul > li > a').on('click', () => {
    links.style.height = '0';
    menuIcon.classList.toggle('change');
    i = 1- i;

    li.forEach((link) => {
        link.style.animation = '';
    })
})
