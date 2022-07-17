//CSS
import './App.css';

//COMPONENTES
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

function App() {

  return (
    <div className="App">
      <Header />
      <section>
        <Cards />
      </section>
    </div>
  );
}

export default App;
