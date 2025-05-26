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

  return (
    <div>
      {esquerda}
      <button onClick={()=> setEsquerda(esquerda + 1)}>Esquerda</button>
      <button onClick={()=> setDireita(direita + 1)}>Direita</button>
      {direita}
    </div>
  )
} 

export default App