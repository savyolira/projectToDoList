const adicionar = document.getElementById("criar-tarefa");
const input = document.querySelector("input");
const lista = document.getElementById("lista-tarefas");
const apagaTudo = document.querySelector("#apaga-tudo");
const itens = document.getElementsByClassName("itensLista");

adicionar.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    item.classList.add("itensLista");
    lista.appendChild(item);
    input.value = '';  

})

lista.addEventListener("click", (item)=>{
    const itensLista = document.querySelectorAll(".itensLista");
    for(let i = 0; i < itensLista.length; i+=1){
        itensLista[i].classList.remove("selected");
    }
    item.target.classList.add("selected");
})

lista.addEventListener("dblclick", (item)=>{
    item.target.classList.add("completed");
})

apagaTudo.addEventListener("click", function(){
    lista.parentNode.removeChild(itens);
})