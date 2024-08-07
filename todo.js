let button=document.getElementById('add')
let input=document.getElementById('input')
let todolist=document.getElementById('todoList')
let todos=[]//entered work will be added to this array
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}
    button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)//values in input box will be pushed to todos
input.value=''//emptying the text box to enter next job
})
function addtodo(todo)
{
let para=document.createElement('p')//creates a para tag to store the list in todo.html
para.innerText=todo
todolist.appendChild(para)//todo in inserted in p tag
para.addEventListener('click',()=>{
    para.style.textDecoration='line-through'//to strike the job when it is clicked
    remove(todo)
})
para.addEventListener('dblclick',()=>{
    todolist.removeChild(para)//to strike the job when it is clicked
    remove(todo)//to remove the striked job from actual array list
})
}
function remove(todo)
{
let index=todos.indexOf(todo)
if(index>-1)
    todos.splice(index,1)//splice used to remove data
localStorage.setItem('todos',JSON.stringify(todos))
}