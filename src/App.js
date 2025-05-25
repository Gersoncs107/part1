import { useState } from "react"

const Hello = ({nome, idade})=>{

  const anoDenascimento = () => {
    const anoAtual = new Date().getFullYear()
    return anoAtual - idade  
  } 
  return(
    <div>
      <p>Olá {nome} você tem {idade}</p>
      <p>Então você nasceu provavelmente em {anoDenascimento()}</p>
    </div>
  )
}

const Exibir = (props) => {
  return <div><h1>{props.contador}</h1></div>
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
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
      <Botao handleClique={aumentarEmUm} texto="mais+" />
      <Botao handleClique={zerarContador} texto="zerar" />
      <Botao handleClique={diminuirEmUm} texto="menos-" />
    </div>
  )
} 

export default App