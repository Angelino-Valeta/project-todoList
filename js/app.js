/*Add item  todo */
const addForm = document.querySelector('.add')
const list = document.querySelector('.todo')

const generateTemplate = todo =>{
    
    const itemListHtml = `
    <li>
        <span>${todo}</span>
        <i class="ion-ios-trash-outline icon"></i>
    </li>
    ` 
    list.innerHTML += itemListHtml
}


addForm.addEventListener('submit', e => {
    e.preventDefault()

    const todo = addForm.add.value.trim()

    if(todo){
        generateTemplate(todo)
    }


})
