const addForm = document.querySelector(".addClass")
const list =  document.querySelector('.todos')
const brisenje =  document.querySelector('.delete')

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items center ">
                <span>${todo}</span>
                <i class="fas fa-trash delete"></i>
                </li>
    `
list.innerHTML += html

}
addForm.addEventListener('submit', e => {
e.preventDefault();


let todo = addForm.querySelector('input[name="vrednost"]').value.trim()

if(todo.length) {
    generateTemplate(todo)
    addForm.reset()
}

list.addEventListener ('click',e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

});