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

const App = () => {
  const [contador, setContador] = useState(0)

  setTimeout(
    () => setContador(contador + 1),
    1000
  )

  return(
    <div>
      <h1>{contador}</h1>
    </div>
  )
}

export default App