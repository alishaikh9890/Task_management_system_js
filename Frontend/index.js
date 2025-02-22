
import { showUsers, getUsers, showTasks } from "./components/script.js";
import { navbar } from "./components/navbar.js";
import { addDataUi, addUsers } from "./components/addData.js";


const url = `http://localhost:8000/Users/`;
const session_url = `http://localhost:8000/session`

navbar();

const {addEvent} = addDataUi();


addEvent.onclick = await addUsers;


const session = await getUsers(session_url);
const c_session = await getUsers(url+session.session_id);
const data = await getUsers(url);

if(c_session.auth == "admin")
{
    showUsers(data)
}
else if(c_session.auth == "user")
{
    showTasks(c_session.todos)
}


// await addUsers(url)