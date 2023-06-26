import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext=React.createContext();

const { ethereum }=window;

const getEthereumContract=() => {
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const transactionContract=new ethers.Contract(contractAddress, contractABI, signer);

    // console.log(provider,signer,transactionContract);
    return transactionContract;
}

export const TransactionProvider=({children}) => {
    const [currentWallet, setCurrentWallet]=useState("");
    const [formData, setFormData]=useState({
        receiver: "",
        amount: "",
        message: ""
    });
    const [loader, setLoader]=useState(false);
    const [count, setCount]=useState(localStorage.getItem("count"));
    const handleChange=(e,name)=> {
        setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value
        }));
    };

    const checkWallet=async () => {
        try {
            if (!ethereum) return alert("Please install and set up Metamask.");
            
            const accounts=await ethereum.request({method: "eth_accounts"});
            
            if (accounts.length!==0) {
                setCurrentWallet(accounts[0]);
            }

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object. 1");
        }
    }

    const connectWallet=async () => {
        try {  
            if (!ethereum) return alert("Please install and set up Metamask.");
            
            const accounts=await ethereum.request({method: "eth_requestAccounts"});
            
            setCurrentWallet(accounts[0]);

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object. 2");
        }
    }

    const sendTransaction=async () => {
        try {
            if (!ethereum) return alert("Please install and set up Metamask.");
            const { receiver, amount, message }=formData;
            const transactionContract=getEthereumContract();
            const parsedAmount=ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentWallet,
                    to: receiver,
                    gas: "0x5208",
                    value: parsedAmount._hex
                }]
            });

            const transactionID=await transactionContract.addToBlockchain(receiver, parsedAmount, message);
            setLoader(true);
            await transactionID.wait();
            setLoader(false);

            const transactionCount=await transactionContract.getTransactionCount();
            setCount(transactionCount.toNumber());

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object. 3");
        }
    }

    useEffect(() => {
        checkWallet();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentWallet, formData, setFormData, sendTransaction, handleChange, loader }}>
            {children}
        </TransactionContext.Provider>
    )
}