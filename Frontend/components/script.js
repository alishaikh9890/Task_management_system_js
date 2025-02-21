
// const allUsers = document.getElementById("allUsers")
const dataShowing = document.getElementById("dataShowing");


export const showUsers = (user) => {

   let userDiv = user.map(ele => (`
            <tr>
                <td><img width="50px" src=${ele.pic} alt="${ele.name}" /></td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.password}</td>
                <td>
                     <a class="dropdown-end ">
                        <button class="rounded-circle btn btn-dark" data-bs-toggle="dropdown">:</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            ${
                            ele.todos.map((to) => (`<li class="dropdown-item">${to.todo}</li>`)).join("")
                            }
                        </ul>
                    </a>
                </td>
            </tr>
        `));


        dataShowing.innerHTML = `
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>pic</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>Todos</th>
                </tr>
            </thead>
            <tbody id="allUsers">${userDiv.join("")}</tbody>
        </table>`

}
export const showTasks = (task) => {
    
    console.log(task)

   let userDiv = task.map(ele => (`
            <tr>
                <td>${ele.todo}</td>
                <td>${ele.status}</td>
                <td>✏️</td>
                <td>🗑️</td>
            </tr>
        `));

        dataShowing.innerHTML = `
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>todo</th>
                    <th>status</th>
                    <th>edit</th>
                    <th>del</th>
                </tr>
            </thead>
            <tbody id="allUsers">${userDiv.join("")}</tbody>
        </table>`


}

export const getUsers = async (url) => {
        const res = await fetch(url);
        const users = await res.json();
        
        return users;
}

