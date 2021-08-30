const images =[
    "1.jpg",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.jpg",
    "6.webp",
    "7.webp",
    "8.jpg",
    "9.webp",
    "10.webp",
    "11.jpg",
];


const chosenImage = images[Math.floor(Math.random() * (images.length) )];
// const body = document.body;
//img 태그 추가 

const bgImage = document.createElement("img");

// bgImage.src = `./images/${chosenImage}`;
bgImage.src = `./images/11.jpg`;
bgImage.className = "bg-img";

// prepend : html 요소 중 가장 앞에 추가 
document.body.prepend(bgImage);
// document.querySelector("#background").appendChild(bgImage);
// function randomBackground(){
//     body.style.background = `url(./images/${chosenImage})` ;
// }

// randomBackground();
// setInterval(randomBackground,3000);



