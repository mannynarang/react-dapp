import Web3b from 'web3';
import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';


function App() {
  const [account, setAccount] = useState();
  const [balance, setbalance] = useState();

  const info ={
    account : "",
    balance : ""


  }
  const [userInfo,setUserInfo] = useState(info);



  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  useEffect(() => {
    async function loadAccounts(){
      

       const accounts = await web3.eth.requestAccounts(); 
       setAccount(accounts[0]);
    }
    

    async function getBalance(){

      const balance = await web3.eth.getBalance(account);
      setbalance(balance/1000000000000000000);
    }

    loadAccounts()
    getBalance();

  }, [account,balance]);

  
  return (
    <div className="App">
      <header className="App-header">
        Decentralized Ballot
        <p>Your Account  {account}</p>
        <p>Your Balance  {balance} eth</p>
      </header>
    </div>
  );
}

export default App;
