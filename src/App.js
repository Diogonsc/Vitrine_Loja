import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import CardItems from './components/card/CardItems'
import Footer from './components/footer/Footer'
import Formulario from './components/form/Formulario';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <CardItems />
        <Formulario />
        <Footer />
    </div>
  );
}

export default App;
