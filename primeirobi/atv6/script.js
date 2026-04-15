const tarefa = document.getElementById("tarefa");
const lista_tarefas= document.getElementById("lista-tarefas")
const adicao_tarefas = document.getElementById("adicao-tarefa")

adicao_tarefas.addEventListener("click", function() {
    const tarefa1 = tarefa.value
    const novoItem = document.createElement("li");
    novoItem.textContent = tarefa1;
    lista_tarefas.appendChild(novoItem);
    tarefa.value = "";
});

lista_tarefas.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove()
    }   
});