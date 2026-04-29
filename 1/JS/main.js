function renderList(data) {
    ul.innerText = ``;
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.textContent = (`${data[i].name}=${data[i].value}`);
        ul.appendChild(li);
    }
}

function saveAndRender(data) {
    localStorage.setItem('pairArray', JSON.stringify(data));
    renderList(data);
}

let pairArray = JSON.parse(localStorage.getItem('pairArray')) || [];

const input = document.getElementById("inputPair");
const ul = document.getElementById("ulListDiv");
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.includes('='))  {
        if (input.value.indexOf('=') === input.value.lastIndexOf('=')) {
            let pair = input.value.split('=');
            let name = pair[0].trim();
            let value = pair[1].trim();
            if ((name.length > 0) && (value.length > 0)) {
                let newPair = {name: name, value: value};
                pairArray.push(newPair);
                saveAndRender(pairArray);
                input.value = '';
            }
            else {alert("Name and Value can't be empty!")};
        } else {alert("only one character")}
    }
    else {alert("Please enter a valid input! (key=value)")}
    })
let sortByName = document.querySelector('#sortByName');
sortByName.addEventListener('click', (e) => {
    e.preventDefault();
    pairArray.sort((a,b) => a.name.localeCompare(b.name));
    saveAndRender(pairArray);
})

let sortByValue = document.querySelector('#sortByValue');
sortByValue.addEventListener('click', (e) => {
    e.preventDefault();
    pairArray.sort((a,b) => a.value.localeCompare(b.value));
    saveAndRender(pairArray);
})

let deleteBtn = document.querySelector('#deleteBtn');
deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pairArray = [];
    saveAndRender(pairArray);
    })
renderList(pairArray);

