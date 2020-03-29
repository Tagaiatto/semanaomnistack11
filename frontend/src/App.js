import React from 'react';
//import Header from './Header';
import Routes from './routes';
// JSX (JS e XML)
//Componente no react é uma função que retorna html
import './global.css'
function App() {
  return(
    <Routes />
  )
}

export default App;



/* 
  ex {useState}
  const [counter, setCounter] = useState(0);
  //useState retorna um array com duas posições
  // Array[valor, funcaoDeAtualizacao]

  function increment(){
    setCounter(counter + 1);

  }
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );*/