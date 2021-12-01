const adicionar = document.getElementById("criar-tarefa");
const lista = document.querySelector("#lista-tarefas");
const apagaTudo = document.querySelector("#apaga-tudo");
const itensFinalizados = document.querySelector("#remover-finalizados")

adicionar.addEventListener("click", function(){
    const input = document.querySelector("input");
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
    if(item.target.classList.contains("completed") === false){
        item.target.classList.add("completed");
    }else{
        item.target.classList.remove("completed");
    }
})

itensFinalizados.addEventListener("click", ()=>{
    const itensLista = document.querySelectorAll(".itensLista");
    for(let i = 0; i < itensLista.length; i+=1){
        if(itensLista[i].classList.contains("completed") === true){
            itensLista[i].remove()
        }
    }
})

apagaTudo.addEventListener("click", ()=>{
    lista.parentNode.removeChild(lista)
})
