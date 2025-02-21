import { getUsers } from "./components/script.js";
import { navbar } from "./components/navbar.js";

navbar()

let login1 = document.getElementById("login")

const url = `http://localhost:8000/Users/`;
const session_url = `http://localhost:8000/session`


const showSingleUser = async (data) => {
    const res = await fetch(session_url, {
        method:"PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    });

    location.href="index.html"
}


const data = await getUsers(url)


 function login(){

    let email_log = document.getElementById("email_log").value
    let password_log = document.getElementById("password_log").value

   let newData = data.find((ele) => ele.email == email_log && ele.password == password_log)

        if(!newData)
        {
            alert("invalid creadintal...!")
        }
        else{
            showSingleUser(newData)
        }
}


login1.addEventListener("click", login)


