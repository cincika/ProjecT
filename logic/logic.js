const image = document.getElementById('first')
const image2 = document.getElementById('second')
const carousel = document.getElementById('carousel')

let offset = window.pageYOffset;

const cards = document.querySelectorAll('.testimonialCards');
const cardup = document.querySelectorAll('.cardtra1');

function scrollanimations() {
    setInterval(() => {
        if (offset >= 500) {
            image.classList.add('comein');
            image2.classList.add('comein');
        } else {
            image.classList.remove('comein')
            image2.classList.remove('comein')
        }

        if (offset >= 2000){
            cards.forEach(function(card){
                card.classList.add('cardsin')
            })
        } else {
            cards.forEach(function(removed){
                removed.classList.remove('cardsin')
            })
        }

        if (offset >= 2800){
            cardup.forEach(function(cardups){
                cardups.classList.add('cardup');
            }) 
            
        } else {
            cardup.forEach(function(cardUpRemove){
                cardUpRemove.classList.remove('cardup')
            })
        }

       
    }, 100);
}

window.addEventListener('scroll', () => {
    offset = window.pageYOffset;
    scrollanimations();
})

const dotOne = document.getElementById('dotOne')
const dotTwo = document.getElementById('dotTwo')
const dotThree = document.getElementById('dotThree')

dotOne.addEventListener('click', () => {
    carousel.scrollLeft = 0;
    flag = 1;
})
dotTwo.addEventListener('click', () => {
    carousel.scrollLeft = 1000;
    flag = 2;
})
dotThree.addEventListener('click', () => {
    carousel.scrollLeft = 3000;
    flag = 3;
})
let flag = 1;
const interval2 = setInterval(() => {
   if (flag === 1) {
        carousel.scrollLeft = 1000;
        flag = 2;
   }

   else if (flag === 2) {
        carousel.scrollLeft = 3000;
        flag = 3;
   }

   else if (flag === 3) {
    carousel.scrollLeft = 0;
    flag = 1;
   }
}, 3000);

setInterval(() => {
    function dotColors() {
        if (flag === 1) {
            dotOne.style.backgroundColor = "#02b8b8";
            dotTwo.style.backgroundColor = "gray";
            dotThree.style.backgroundColor = "gray";
        } else if (flag === 2) {
            dotOne.style.backgroundColor = "gray";
            dotTwo.style.backgroundColor = "#02b8b8";
            dotThree.style.backgroundColor = "gray";
        } else if (flag === 3) {
            dotOne.style.backgroundColor = "gray";
            dotTwo.style.backgroundColor = "gray";
            dotThree.style.backgroundColor = "#02b8b8";
        }
    }
    dotColors();
}, 100);

