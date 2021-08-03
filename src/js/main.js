const bttn = document.querySelector('.header__btn');
const popupWrapper = document.querySelector('.popup-wrapper');
const donatePopup = document.querySelector('.event-popup');
const exitButton = document.querySelector('.btn__close');
const nextButton = document.querySelector('.main-part');
const main = document.querySelector('.main-content');
const mainItem = document.querySelector('.main-item');
const mainContent = document.querySelector('.main-participants');

bttn.addEventListener('click', showPopup);

popupWrapper.addEventListener('click',(event) => {
    if (event.target.className === "popup-wrapper popup-event") {
        popupClose();
    }
});
exitButton.addEventListener('click', () => {
    popupClose();
});

function showPopup() {
    popupWrapper.style.display = 'flex';
    donatePopup.style.display = 'block';
}
function popupClose() {
    popupWrapper.style.display = 'none';
    donatePopup.style.display = 'none';
}

nextButton.addEventListener('click', (event) => {
    mainContent.style.display = "flex";
    main.style.display = 'none';

})
mainItem.addEventListener('click', (event) => {
    main.style.display = 'block';
})
