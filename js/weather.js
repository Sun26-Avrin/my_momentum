// getCurrentPosition 
// 1st arg : func if success
// 2st arg : func if not success

//openweathermap.org : geo -> weather, geocoding

const API_KEY = "d2949f37bfd7de7a16cc04c10088d7d6";

/*
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

*/

function onGeoOk(e){
    const lat = e.coords.latitude;
    const lng = e.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` 
    //fetch 는 promise임 , 5분이걸릴지 10분이걸릴지 알수없음 
    //fetch(url)
    //그래서 .then 을 해줘야함 
    fetch(url)
     .then(response => response.json())
     .then((data)=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temp = document.querySelector("#weather span:nth-child(2)");

        city.innerText=data.name;
        weather.innerText =data.weather[0].main;
        temp.innerText=data.main.temp;
    });


    //console.log(e);
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);