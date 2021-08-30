const clock = document.querySelector("h2#clock");

// new 키워드 : instance object를 반환
// const date = new Date();   

function getClock(){
    // Date객체가 생성될때 시간이랑 다 가져오나봄... 실시간이아니라.. 
    // 그래서 전역변수로 선언하면 작동안함.
    const date = new Date();    
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour} : ${minute} : ${second} `;
    // console.log(` ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}

getClock(); // 이거 안하면 html 로딩된 후 1초뒤에 표시됨
setInterval(getClock,1000);

// Interval(Timer) : 반복적으로
// setInterval(sayHello,2000);

// Timeout : 한번만
// setTimeout(sayHello,3000);


//"str".padStart(2,"0"); : str이 2글자가아니면 앞에서 0으로채우셈
//"str".padEnd(2,"0") : 뒤에서 0 채움 


//String(number) : number -> str 
//number+=""; : number -> str

//Number(str) : str -> number
//str*=1; : str->number