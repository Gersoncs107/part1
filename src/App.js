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
  const [ contador, setContador ] = useState(0)

  console.log('renderizando com o valor do contador em', contador)

  const aumentarEmUm = () => {

    console.log('aumentando, valor anterior', contador)
    setContador(contador + 1)
  }

  const diminuirEmUm = () => { 

    console.log('diminuindo, valor anterior', contador)
    setContador(contador - 1)
  }

  const zerarContador = () => {

    console.log('zerando, valor anterior', contador)
    setContador(0)
  }

  return (
    <div>
      <Exibir contador={contador} />
      <Button onClick={aumentarEmUm} text="mais+" />
      <Button onClick={zerarContador} text="zerar" />
      <Button onClick={diminuirEmUm} text="menos-" />
    </div>
  )
} 

export default App