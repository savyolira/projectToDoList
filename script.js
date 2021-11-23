const adicionar = document.getElementById("criar-tarefa");
const input = document.querySelector('input');
const lista = document.getElementById("lista-tarefas");
adicionar.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    lista.appendChild(item);
    input.value = '';
})