const burgerBtn = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.header__menu');
const bodyElement = document.body;
const workSummary = document.querySelectorAll('.work__summary');
const workDetails = document.querySelectorAll('.work__details');

for(const item of workSummary){
    item.addEventListener('click', function(){
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            let elSummary = document.querySelectorAll('.work__summary-text');
            for(const i of elSummary){
                i.style.maxHeight = null;
            }
        }
        else{
            let elSummary = document.querySelectorAll('.work__summary-text');
            for(const i of elSummary){
                i.style.maxHeight = null;
            }
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
burgerBtn.onclick = function(){
    headerMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    bodyElement.classList.toggle('lock');
}
const phoneButton = document.querySelector('.phone-button');
phoneButton.onclick = function(){
    const number = "+380960937115";
    navigator.clipboard.writeText(number);
    alert('Номер +380960937115 скопирован');
}

new Swiper('.work__slider', {
    loop: true,
    pagination: {
        el: '.work__pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
