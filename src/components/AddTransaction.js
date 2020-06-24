import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [cat, setCat] = useState('Income (Rent/Invest. returns etc.)');
  const [amount, setAmount] = useState('');
  const [otherinput, setOtherinput] = useState(false);

  const { addTransaction, maxValue } = useContext(GlobalContext);

  const onSubmit = e => {
    if ((amount > 0 || amount < 0) && amount < maxValue && amount > maxValue*-1) {
    e.preventDefault();
    setAmount('');
    
    const newTransaction = {
        id: Math.floor(Math.random()*100000000),
        cat,
        amount: +amount
    }

    addTransaction(newTransaction); 
    } else {
        alert("Please enter a value lower than $" + maxValue + " and greater than 0");
        e.preventDefault();
    }

    setOtherinput(false);
}

const otherCat = e => {
          
    if (e.target.value === "Other") {

        setCat("Other");
        setOtherinput(true);

    } else {
        
        setCat(e.target.value);
        setOtherinput(false);
    }
    
    
}

     return(
      <>
        <h3>Add transactions</h3>
        <form onSubmit={onSubmit}>

            <div>
                <label htmlFor="dropdown"><strong className="amountinput2">Expense Category:</strong>
                <br/>
                Select "Other" to enter another option</label>
                <br/>

                <select name="dropdown" value={cat} onChange={(e) => otherCat(e)}>
                    <option value="Income (Rent/Invest. returns etc.)">Income (Rent/Invest. returns etc.)</option>
                    <option value="Groceries and other essentials">Groceries and other essentials</option>
                    <option value="Shopping; non essential(Fashion etc.)">Shopping; non essential(Fashion etc.)</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Other">Other</option>

                </select>
            </div>

            <div style={{display: otherinput ? "inline":"none"}}>
                <label><strong className="amountinput2">Enter the category:</strong>
                <br/>
                Please change at least one character each time.</label>
                <br />
                <input type="text" onChange={(e) => setCat(e.target.value)} placeholder="Enter category..." />
            </div>

            <div>
                <label className="amountinput" htmlFor="amount"><strong className = "amountinput2">Amount:</strong> <br/>
                Values larger than ${maxValue} are not allowed.</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            
            <button className="btn">Add transaction</button>
            
        
        </form>
    </>);
}
