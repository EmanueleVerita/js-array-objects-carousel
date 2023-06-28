//array con oggetti

const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let itemsContent = ' ';

for (let i = 0 ; i < images.length ; i++){

    itemsContent += `
    
    <div class="item">

        <img src="./img/${images[i].image}">
        
        <div class="item-description">

            <h2>${images[i].title}</h2>

            <p>${images[i].text}</p>

        </div>

    </div>

    `
}


const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;


const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click' , function(){

    if(itemActive < items.length -1){

        items[itemActive].classList.remove("active");

        itemActive++;

        items[itemActive].classList.add("active");

    }
    else{
        items[itemActive].classList.remove("active");

        itemActive = 0;

        items[itemActive].classList.add("active");
    }

})


prev.addEventListener('click' , function(){

    if(itemActive > 0){

        items[itemActive].classList.remove("active");

        itemActive --;

        items[itemActive].classList.add("active");

    }
    else{

        items[itemActive].classList.remove("active");

        itemActive = items.length - 1;

        items[itemActive].classList.add("active");

    }

})