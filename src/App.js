import { useState } from "react"

 const Exibir = (props) => <div>{props.value}</div>

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

  const setOnValue = (newValue) => {
    console.log('Current value', newValue)
    return setValue(newValue)
  }


  return (
    <div>
      <Exibir value={value}/>
      <Button handleClick={() => setOnValue(1000)} text='Mil'/>   
      <Button handleClick={() => setOnValue(0)} text='Zerar'/>   
      <Button handleClick={() => setOnValue(value + 1)} text='Incrementar'/>   
    </div>
  )
}

export default App