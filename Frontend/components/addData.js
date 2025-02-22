import { getUsers } from "./script.js";

const addData = document.getElementById("addData");

const url = `http://localhost:8000/Users/`;
const session_url = `http://localhost:8000/session`


let session = await getUsers(session_url);
let c_data = await getUsers(url+session.session_id);


export const addDataUi = () => {
    
    const user = ` 
            <div class="container p-4 my-5 pt-5">
                <div class="row g-2">
                    <div class="col-3">
                        <input type="text" class="form-control form-control-sm" id="pic" placeholder="pic">
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control form-control-sm" id="name" placeholder="name">
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control form-control-sm" id="email" placeholder="email">
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control form-control-sm" id="password" placeholder="password">
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-success btn-sm" id="btnUser" >Add User</button>
                    </div>
                </div>
            </div>
        `;

        const task = `
            <div class="container p-4 my-5 pt-5">
                <div class="row g-2 justify-content-center">
                    <div class="col-3 text-center">
                        <input type="text" class="form-control form-control-sm" id="task" placeholder="task">
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-success btn-sm" id="btnTask" >Add Task</button>
                    </div>
                </div>
            </div>
        `
    
        addData.innerHTML = c_data.auth == "user" ? task : user;

    let addEvent = c_data.auth == "user" ?
                    document.getElementById("btnTask")
                    : document.getElementById("btnUser")

    return {addEvent}
}

// onclick="addUsers()"



 export const addUsers = async () => {


if(c_data.auth=="user")
{
    let task = {
        todo_id : Math.round((Math.random()*10000)+1),
        todo : document.getElementById("task")?.value,
        status : "false",
    }
    
    let data_to_post = c_data.todos;
    data_to_post.push(task)
    console.log(data_to_post)

    const res = await fetch(url+c_data.id, {
        method:"PATCH",
        body: JSON.stringify({todos:data_to_post}),
        headers:{"Content-Type" : "application/json"}
    })
}
else{
    let user = {
        id : Math.round((Math.random()*10000)+1),
        pic : document.getElementById("pic")?.value,
        name : document.getElementById("name")?.value,
        email : document.getElementById("email")?.value,
        password : document.getElementById("password")?.value,
        auth : "user",
        todos : []
    }

    const res = await fetch(url, {
        method:"POST",
        body: JSON.stringify(user),
        headers:{"Content-Type" : "application/json"}
    })
 
}
  
}
