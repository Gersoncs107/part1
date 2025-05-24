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
  const nome = 'Peter'
  const idade = 10
  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10}/>
      <Hello nome={nome} idade={idade}/>
      <Hello nome='Madruga' idade={120}/>
    </div>
  )
}

export default App