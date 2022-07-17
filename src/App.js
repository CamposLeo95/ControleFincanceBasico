//React
import {useState, useEffect} from 'react';

//CSS
import './App.css';

//COMPONENTES
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Lista from './components/List/Lista'


function App() {

    const [pendente, setPendente] = useState(0)
    const [recebido, setRecebido] = useState(0)
    const [total, setTotal] = useState(0)

  return (
    <div className="App">
      <Header />
      <section>
        <Cards pendente={pendente} recebido={recebido} total={total}/>
      </section>
      <section>
        <Lista />
      </section>
    </div>
  );
}

export default App;
