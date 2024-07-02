let swiper = new Swiper(".swiper-container", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 11,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        320: { slidesPerView: 1.2, slideToClickedSlide: true, },
        420: { slidesPerView: 1.4, slideToClickedSlide: true, },
        480: { slidesPerView: 1.7, slideToClickedSlide: true, }, 
        640: { slidesPerView: 2.2, slideToClickedSlide: true, } }
});


const readMoreButton = document.querySelector('.button-read-more');
const listItems = document.querySelectorAll('.services__list-item');

function updateListItemsDisplay() {
    const screenWidth = window.innerWidth;

    let itemsToShow = screenWidth >= 1120 ? 8 : screenWidth >= 768 ? 6 : 0;

    listItems.forEach((item, index) => {
        if (index < itemsToShow) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none'
        }
    });

}

readMoreButton.addEventListener('click', () => {
    readMoreButton.classList.toggle('expanded');

    if (readMoreButton.classList.contains('expanded')) {
        listItems.forEach(item => item.style.display = 'flex');
        readMoreButton.textContent = 'Скрыть';
    } else {
        updateListItemsDisplay();
        readMoreButton.textContent = 'Показать все';
    }
});

window.addEventListener('resize', updateListItemsDisplay);

updateListItemsDisplay();