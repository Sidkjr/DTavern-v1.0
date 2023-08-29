import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar"
import "./App.css";
import Rightbar from "./components/Rightbar";
import { Button, Icon } from "web3uikit";


const App = () => {

  const ethereum = window.ethereum;

  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);



  const getWallet = async() => {
    console.log("Inside GetWallet");
        if (ethereum) {
          setEthWallet(ethereum);
        }
    
        if (ethWallet) {
          const account = await ethWallet.request({method: "eth_accounts"});
          handleAccount(account);
        }
      }
      useEffect(() => {getWallet();}, []);

    const handleAccount = (account) => {
        if (account) {
          setAccount(account);
        }
    }
    const connectAccount = async() => {
        if (!ethWallet) {
          alert('MetaMask wallet is required to connect');
          return;
        }
      
        const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
        handleAccount(accounts);

         
      };

    
      const initUser = () => {
        // Check to see if user has Metamask
        if (!ethWallet) {
          return <p>Please install Metamask in order to use this ATM.</p>
        }
    
        // Check to see if user is connected. If not, connect to their account
        if (!account) {
          return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
        }
    
        return (
          <>
            <Home/>
          </>
        )

        
      }
  return (
    <>
    {account ? (
      <div className="page">
        <div className="sideBar"> 
          <Sidebar />
          <div className="logout"
          onClick={() => {
            setAccount(undefined);
            window.location.reload();
          }}>Logout</div>
        </div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        <div className="rightBar"> 
          <Rightbar/>
        </div>
      </div>
    ) : (
      <div className="loginPage">
        {initUser()}
      </div>
      
    )}    
    </>
  );
};

export default App;
