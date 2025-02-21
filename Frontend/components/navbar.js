

import { getUsers } from "./script.js"
const session_url = `http://localhost:8000/session`

let data = await getUsers(session_url);

export const navbar = () => {

    document.getElementById("navbar").innerHTML = `
          <div class="navbar fixed-top bg-dark navbar-expand-md navbar-dark">
        <div class="container">
            <h2 class="navbar-brand">📋 Todos</h2>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="index.html" class="nav-link"> Admin</a></li>
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
                            <li class="dropdown-item">${data.todos.length}</li>
                            <li class="dropdown-item"><button class="btn btn-danger btn-sm">Exit</button></li>
                        </ul>
                    </div>
       
        </div>
    </div>
    `
}