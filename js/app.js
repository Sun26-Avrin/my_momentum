// js에서 일반적으로 string만 포함된 변수는 대문자로 표기함 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 1. submit 후 first-login 을 hidden
// 2. main-cont visible
// 3. login-cont 에 clock 추가 
// 4. greeting에 저장된 유저네임 추가

//first login
const first_login = document.querySelector("#first-login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// after login
const mainContainer = document.querySelector("#main-container");
const greeting_cont = document.querySelector("#greeting-cont");
const greeting = document.querySelector("#greeting");
const header_right = document.querySelector(".header_right");

function onLoginSubmit(event){
    event.preventDefault();
    //DB
    const user_name = loginInput.value;
    localStorage.setItem(USERNAME_KEY,user_name);
    //view
    paintGreetings();
}


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome,  ${username}`;
    //hidden control
    first_login.classList.add(HIDDEN_CLASSNAME);
    mainContainer.classList.remove(HIDDEN_CLASSNAME);

    //console.log(window.innerWidth);
    paintClock();
}

function paintClock(){
    if(window.innerWidth<=768){
        header_right.appendChild(clock);
    }else{
        greeting_cont.prepend(clock); // 다른 js파일 변수를 사용할수있다... ㄹㅇ....
        // 그리고 그 요소를 어펜드하는 순간 , 그 요소가 떨어져나와서 붙네...    
    }
}



if(savedUsername === null){
    // show the form & add listenr
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // show the greeting
    paintGreetings();
}


window.addEventListener("resize",paintClock);