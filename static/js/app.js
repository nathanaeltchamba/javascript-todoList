{/* <li class="list-group-item active">Active item</li>
            <li class="list-group-item">Item</li> */}

let form = document.querySelector('#todoForm');
let ul = document.querySelector('#todoList')
// console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // create an element 
    let li = document.createElement('li');
    
    // add a class to list element
    li.classList.add('list-group-item', 'activate');
    
    // set inner text to the input field value's text
    li.innerText = e.target.todoItemInput.value

    // add event listeners
    li.addEventListener('mouseenter', (e) => li.classList.add('active'));

    li.addEventListener('mouseleave', (e) => li.classList.remove('active'));

    li.addEventListener('click', (e) => {
        li.classList.remove('active');
        console.log(li.classList)
        li.classList.add('disabled');
        console.log(li.classList)
        li.style.textDecoration = 'line-through'
    })
    
    if (li.classList[2] === 'disabled') {
        li.addEventListener('click', function (e) {
           li.classList.remove 
        } )
    }
    // const inputAnswer = document.getElementById('todoList')
    // inputAnswer.remove()

    // pass list into unordered list
    ul.appendChild(li)

    // clear text from input field 
    e.target.todoItemInput.value = '';
    
})




