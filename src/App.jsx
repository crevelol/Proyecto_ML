import './assets/css/App.css';

import firebase from 'firebase/app';
import {firebaseConfig} from './config/config';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Buscador from './componentes/Buscador';


function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    
    <div className="App">
      <Header/>
      <Buscador/>
      <Footer/>
    </div>
  );
}

export default App;
