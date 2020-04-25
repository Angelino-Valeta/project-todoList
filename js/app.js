
const addForm = document.querySelector('.add')
const list = document.querySelector('.todo')
const search = document.querySelector('.search input')
/*Add item  todo */
const generateTemplate = todo =>{
    
    const itemListHtml = `
    <li>
        <span>${todo}</span>
        <i class="ion-ios-trash-outline delete"></i>
    </li>
    ` 
    list.innerHTML += itemListHtml
}


addForm.addEventListener('submit', e => {
    e.preventDefault()

    const todo = addForm.add.value.trim()

    if(todo){
        generateTemplate(todo)
        addForm.reset()
    }


})

/*Delete item todo */
list.addEventListener('click', e =>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }

})


/* Search todo */

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
}


// keyup event
search.addEventListener('keyup', e =>{

    const term = search.value.trim().toLowerCase()
    filterTodos(term)

})

