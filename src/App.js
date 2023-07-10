import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarComp';
import Cards from './components/Cards';
import Forms from './components/FormComp';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='nav'>
        <Navbar />
      </div>

      <div className='cards'>
        <Cards />

        <Cards />

        <Cards />
      </div>

      <div className='forms'>
        <Forms />
      </div>
        </React.Fragment>
  );
}

export default App;
