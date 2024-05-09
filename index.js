const mainHeader = document.querySelector('.main-header');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    if (scrollValue > 1000) {
        backToTop.classList.add('back-to-top-open');
    } else {
        backToTop.classList.remove('back-to-top-open');
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})