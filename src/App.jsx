import './assets/css/App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Buscador from './componentes/Buscador';


function App() {
  return (
    <div className="App">
      <Header/>
      <Buscador/>
      <Footer/>
    </div>
  );
}

export default App;
