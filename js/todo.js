const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = toDoForm.querySelector("input");

//dropdown variable
const dropdown_btn = document.querySelector("#dropdown-btn");
const dropdown_list = document.querySelector("#dropdown-list");
//end dropdown varialbe

let toDos =[];

const TODOS_KEY="todos";
const OBMIT_ID="obmitted";
const HOW_MANY_SHOW = 4;


function paintMore(){
    const more = document.querySelector(`#${OBMIT_ID}`);
    if(more !== null){return;}
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = OBMIT_ID;
    li.appendChild(span);
    span.innerText = "more ...";
    toDoList.appendChild(li);
}
// localstorage는 string만 저장가능, 오브젝트 불가능 
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintTodo(todo, key){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("i");

    li.id = todo.id;
    span.innerText = todo.text;
    
    button.id="todo-button";
    button.className = "fas fa-backspace";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);

    if(key === undefined){ // 맨뒤에 어펜드 
        toDoList.appendChild(li);
    }else{ //more앞에 어펜드 
        //more 삭제시오류남  => more 앞 맨마지막요소 뒤로 어펜드
        //const more = document.querySelector(`#${OBMIT_ID}`);
        // more.before(li);
        const lastElementBeforeMore = document.querySelector(`#todo-list li:nth-child(${HOW_MANY_SHOW})`); 
        lastElementBeforeMore.after(li);
    }

    

    
}

function deleteToDo(e,key){
    //지우기전에 검사하기때문에 HOW_MANY_SHOW+1  
    if(toDos.length <= HOW_MANY_SHOW+1){ 
        const more = document.querySelector(`#${OBMIT_ID}`);
        if(more !== null){toDoList.removeChild(more);}
    }
    
    //view
    const id = (e.target.parentElement.id);
    const lis =document.querySelectorAll("#todo-list li");
    let li;
    for(let i=0; i<lis.length; i++){
        if(lis[i].id === id){
            li = lis[i];
            break;
        }
    }

    if(toDos.length>HOW_MANY_SHOW){
        paintTodo(toDos[HOW_MANY_SHOW],2)
    };
    toDoList.removeChild(li);
    
    //db
    console.log("I'm Todo Deleter");
    console.log(key);
    if(key !== 1){
        deleteFromDropdown(e,1);
        deleteFromDB(e);
    }
    // toDos = toDos.filter((arg)=> arg.id !== parseInt(li.id));
    // console.log(toDos);
    // saveToDos();

    

}

function onToDoSubmit(e){
    e.preventDefault();
    const newTodo= toDoInput.value;


    toDoInput.value ="";

    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }

    toDos.push(newTodoObj);

    if(toDos.length>4){paintMore();}
    else{paintTodo(newTodoObj);}

    paintDropdown(newTodoObj);
    
    saveToDos();
}

toDoForm.addEventListener("submit",onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null){
    toDos = JSON.parse(savedToDos);
    if(toDos.length >4){
        for(let i=0;i<4;i++){
            paintTodo(toDos[i]);
        }
        paintMore();
        //add to menu
        addToDropdown(toDos);
    }else{
        for(let i=0;i<toDos.length;i++){
            paintTodo(toDos[i]);
        } 
        addToDropdown(toDos);
    }
}



//DROPDOWN

// const dropdown_menu = document.querySelector("#dropdown-menu");
// const dropdown_list = document.querySelector("#dropdown-list");


function addToDropdown(todos){
    console.log("adding To Dropdown");
    todos.forEach(element => {
        console.log(element);
        paintDropdown(element);
    });
}

function paintDropdown(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("i");

    li.id = todo.id;
    li.className = "drop-content"
    span.innerText = todo.text;
    
    button.id="todo-button";
    button.className = "fas fa-backspace";
    button.addEventListener("click", deleteFromDropdown);
    
    li.appendChild(span);
    li.appendChild(button);
    dropdown_list.appendChild(li);
}

function deleteFromDropdown(e,key){
    //view
    const id = (e.target.parentElement.id);
    let lis = document.querySelectorAll("#dropdown-list li");
    let li;
    for(let i=0; i<lis.length; i++){
        if(lis[i].id === id){
            li = lis[i];
            break;
        }
    }

    dropdown_list.removeChild(li);
    //redraw
    // dropdown_list.classList.remove(HIDDEN_CLASSNAME);
    

    // db
    console.log("I'm Menu Deleter");
    console.log(key);
    if(key !== 1){
        deleteToDo(e,1);
        deleteFromDB(e);
    }


}

function deleteFromDB(e){
    const li = e.target.parentElement;
    toDos = toDos.filter((arg)=> arg.id !== parseInt(li.id));
    saveToDos();

}


function dropdownMenu(){
    
    if(dropdown_list.classList.contains(HIDDEN_CLASSNAME)){
        dropdown_list.classList.remove(HIDDEN_CLASSNAME);
    }else{
        dropdown_list.classList.add(HIDDEN_CLASSNAME);
    }
}


dropdown_btn.addEventListener("click",dropdownMenu);
