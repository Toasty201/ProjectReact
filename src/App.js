import logo from './logo.svg';
import React from 'react'
import './App.css';
import BasicExample from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter/counter'
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
//tengo que definir el add
const onAdd = (qty)=>{
  alert(`Se añadio ${qty} productos`); //recordar usar esas comillas, sino no toma el valor del qty
};

  return (
    <div className="App">
      <BasicExample />
      <>
      <ItemListContainer />
    </>

    </div>
  );
}

export default App;
