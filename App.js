import './App.css';
import Bedroom from './components/Bedrooms';
import React from 'react';
 

function App() {
  const identityNumber = process.env.REACT_APP_IDENTITY_NUMBER=405571159 || 'Identity Number Not Found';

  return (
    <div className="App">
      <h1>My Identity Number:{identityNumber}</h1>
      <Bedroom height={200} width={300} color="lightblue" name="dania abu jazar" />

    
    </div>
  );
}

export default App;
