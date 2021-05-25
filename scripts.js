const mainContainer = document.getElementById('todos');
const input = document.querySelector('.todo_input');
const addButton = document.querySelector('.add-item');
const deleteButton = document.querySelector('.deleteBtn');


addButton.addEventListener('click', function() {

    if (input.value.trim()) {

        //create ul tag
        const ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        // create div tag
        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        // create list item
        const liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');

        // create button div
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        //completed button element1
        const completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';

        //completed button element1
        const editButton = document.createElement('button');
        editButton.classList.add('editBtn');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = function() {
            editWorking(liTag);
        }

        //completed button element1
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('trash');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        //appending
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);

        // append all the element in main div
        mainContainer.appendChild(ulTag);

        //add event listener to button div
        todoList.addEventListener('click', function(e) {
            let items = e.target;
            if (items.classList[0] === 'completed') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('line-through');
            } else if (items.classList[0] === 'trash') {
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                let todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                console.log(todo3)
                todo3.addEventListener('transitionend', function() {
                    todo3.remove();
                })
            }
        })

        //clear to input value
        input.value = '';

    } else if (input.value === '') {
        alert('Please fill the input field');
    }
})

function editWorking(e) {
    let editValue = prompt('edit the input value', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleteAllElements() {
    let gettingUlTag = document.querySelectorAll('.todo-list-container');
    for (let i = 0; i < gettingUlTag.length; i++) {
        gettingUlTag[i].remove();

    }
    input.value = '';
}