import { useState } from "react"

const Exibir = ({contador}) => {
  return <div><h1>{contador}</h1></div>
}

const Button = (props) => {
  
  return(
    <button onClick={props.handleClick}>
      {props.text}
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
  
  const [value, setValue] = useState(10)
  return (
    <div>
      {esquerda}
      <Button onClick={handleCliqueEsquerda} text={'Esquerda'}/>
      <Button onClick={handleCliqueDireita} text={'Direita'}/>
      {direita}
      <Historico todosOsCliques={todosOsCliques}/>
    </div>
  )
}

export default App