import React from 'react';
import DataView from './components/DataView.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="header">Earn More, Pay Less? Average Housing Costs and Incomes by NYC Borough</h1>
    <DataView
  borough="Staten Island"
  renterCost="$14,292"
  ownerCost="$29,752"
  renterIncome="$37,882"
  ownerIncome="$94,177"/>


 <DataView
  borough="Queens"
  renterCost="$16,812"
  ownerCost="$29,256"
  renterIncome="$46,549"
  ownerIncome="$80,144"/>
 

 <DataView
  borough="Manhattan"
  renterCost="$18,900"
  ownerCost="$36,252"
  renterIncome="$62,173"
  ownerIncome="$142,046"/>


 <DataView
  borough="Bronx"
  renterCost="$13,176"
  ownerCost="$28,248"
  renterIncome="$29,302"
  ownerIncome="$76,454"/>


 <DataView
  borough="Brooklyn"
  renterCost="$15,144"
  ownerCost="$31,908"
  renterIncome="$40,128"
  ownerIncome="$83,747"/>
  

 

         </div>
  );
}

export default App;
