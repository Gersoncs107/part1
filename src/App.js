// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  const App = () => {
    const amigos = [
      {nome: 'George', idade: 25},
      {nome:'Maria', idade: 30}
    ]
      return(
      <>
        <h1>{amigos[0].nome} {amigos[0].idade}</h1>
        <h1>{amigos[1].nome} {amigos[1].idade}</h1>
       </>
      )
    
  }

export default App
