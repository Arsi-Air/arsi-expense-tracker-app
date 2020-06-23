import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { Quotes } from './components/Quotes'

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (<div>
    <GlobalProvider>
      <Header />
      <Quotes />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
