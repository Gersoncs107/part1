import { useState } from "react"

const Exibir = ({contador}) => {
  return <div><h1>{contador}</h1></div>
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])
  const [total, setTotal] = useState(0)

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    setEsquerda(esquerda + 1)
    setTotal(esquerda + direita)
  }

  const handleCliqueDireita =() => {
    setDireita(direita + 1)
    setTotal(esquerda + direita)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}
      <p>{todosOsCliques.join(' ')}</p>
    </div>
  )
}

export default App