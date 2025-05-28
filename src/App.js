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

const Historico = (props) => {
 
  if( props.todosOsCliques.length === 0) {
    return (
      <div>
        <p>Clique em um dos botões para usar a aplicação!</p>
      </div>
    )
  }

  return(
    <div>
      Histórico de cliques:{props.todosOsCliques.join(' ')}
    </div>
  )
}

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])
  const [total, setTotal] = useState(0)

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
    setTotal(atualizaEsquerda + direita)
  }

  const handleCliqueDireita =() => {
    setTodos(todosOsCliques.concat('D'))
    setDireita(direita + 1)
    setTotal(esquerda + direita)
  }

  return (
    <div>
      {esquerda}
      <Button onClick={handleCliqueEsquerda} text={'EEsquerda'}/>
      <Button onClick={handleCliqueDireita} text={'Direita'}/>
      {direita}
      <Historico todosOsCliques={todosOsCliques}/>
    </div>
  )
}

export default App