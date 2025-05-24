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
  const [contador, setContador] = useState(0)

  const aumentarContador = () => setContador(contador + 1)
  const diminuirContador = () => setContador(contador -1)
  const zerarContador = () => setContador(0)


  return(
    <div>
      <Exibir contador={contador}/>
     <Button onClick={aumentarContador} text='Mais+'/>
     <Button onClick={zerarContador} text='Zerar0'/>
     <Button onClick={diminuirContador} text='Menos-'/>
    </div>
  )
}

export default App