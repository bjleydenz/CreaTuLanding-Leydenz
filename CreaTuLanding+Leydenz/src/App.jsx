import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda online! Explora nuestros productos.";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje={mensaje} />
    </div>
  );
}

export default App;