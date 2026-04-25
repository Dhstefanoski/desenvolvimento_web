import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  const adicionarTarefa = (e) => {
    e.preventDefault()
    const texto = novaTarefa.trim()
    if (texto === '') return
    setTarefas([...tarefas, { id: Date.now(), text: texto }])
    setNovaTarefa('')
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar Atividade</button>
      </form>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.text}</span>
            <button
              className="remover"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
