import {getUsers} from "./main.js";

const userContainer = document.getElementById("usersContainer");

getUsers().then((res) => {
    let users = res.data;

    for (const user of users) {
        const userBlock = document.createElement("div");
        userBlock.classList.add("user-card");
        userBlock.innerHTML = `ID: ${user.id} - ${user.name}`;
        const button = document.createElement("button");
        button.innerText = "Go to user";
        userBlock.appendChild(button);
        userContainer.appendChild(userBlock);
        button.onclick = () => {
            window.location.href = `user-details.html?id=${user.id}`;
        };
    }
})