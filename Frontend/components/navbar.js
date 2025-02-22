

import { getUsers } from "./script.js"
const session_url = `http://localhost:8000/session`
const url = `http://localhost:8000/Users/`;

let session = await getUsers(session_url);
let data = await getUsers(url+session.session_id);

export const navbar = () => {

    document.getElementById("navbar").innerHTML = `
          <div class="navbar fixed-top bg-dark navbar-expand-md navbar-dark">
        <div class="container">
            <h2 class="navbar-brand">📋 Todos</h2>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="${session.session_id? `index.html` : ''}" class="nav-link"> Admin</a></li>
            <li class="nav-item">
                <a href="user.html" class="nav-link"> User</a></li>
            <li class="nav-item">
                <a href="login.html" class="nav-link"> Login</a></li>
        </ul>
                    <div class="dropdown-center">
                        <a data-bs-toggle="dropdown"> <img src="${data.pic}" width="40px" /></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">${data.name}</li>
                            <li class="dropdown-item">${data.email}</li>
                            <li class="dropdown-item">${data.todos?.length}</li>
                            <li class="dropdown-item"><button class="btn btn-danger btn-sm" id="logout">Exit</button></li>
                        </ul>
                    </div>
       
        </div>
    </div>
    `

let logout = document.getElementById("logout");
logout.addEventListener("click", async function(){
    const res = await fetch(session_url , { method: "PUT", body: JSON.stringify({})});
    const data = await res.json()
    console.log(data)  
        location.href = "login.html" 
})
}