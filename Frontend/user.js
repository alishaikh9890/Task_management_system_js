import { navbar } from "./components/navbar.js";
import { getUsers } from "./components/script.js";

let card = document.getElementById("card")

navbar();

const session_url = `http://localhost:8000/session`

let data = await getUsers(session_url);


// card.innerHTML = `
//             <div class="col-6">
//                 <div class="card mb-3 text-bg-dark" style="max-width: 540px;">
//                     <div class="row g-0">
//                       <div class="col-md-4">
//                         <img src=${data.pic} class="img-fluid rounded-start" alt="...">
//                       </div>
//                       <div class="col-md-8">
//                         <div class="card-body">
//                           <h5 class="card-title">${data.name}</h5>
//                           <p class="card-text">${data.email}</p>
//                           <p class="card-text"><small">Last updated 3 mins ago</small></p>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//             </div>
// `