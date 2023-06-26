import { useContext, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const MainEx=() => {

    const { connectWallet, currentWallet, formData, sendTransaction, handleChange, loader }=useContext(TransactionContext);

    const handleSubmit=(e) => {
        const { receiver, amount, message }=formData;

        e.preventDefault();
        
        if (!receiver || !amount || !message) return;
        
        sendTransaction();
        // setLoader(!loader);
        
        console.log(formData);
    };

    const handleReceiverChange=(e) => {
        handleChange(e,"receiver");
    };

    const handleAmountChange=(e) => {
        handleChange(e,"amount");
    };

    const handleMessageChange=(e) => {
        handleChange(e,"message");
    };

    return (
        <div className="flex flex-col md:flex-row w-screen lg:w-full lg:h-full items-center justify-center">
            <div className="flex flex-grow flex-col bg-gray-800 text-gray-100 p-4 lg:p-6 m-3 lg:m-5 md:w-1/2 md:self-stretch lg:h-[90%] items-center justify-between rounded-md">
                <img src="..\public\doge-computer.png" className="lg:h-[60%]" />
            {/* <img src="src\assets\developers-eth-blocks.png" className="h-[100%]" /> */}
                <div className="flex flex-col mb-5 mt-5">
                    <div className="text-3xl lg:text-6xl font-light m-1 lg:m-3 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                        Send Crypto across the world.
                    </div>
                    <div className="text-md tracking-wide lg:text-xl font-light m-1 lg:m-3 bg-gradient-to-r from-gray-100 to-gray-200 bg-clip-text text-transparent">
                        <span>Unleash the Power of Instant Crypto Transfers,</span>
                        <br/>
                        <span>Seamlessly Connect, Send and Safeguard Your Digital Wealth.</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-grow flex-col bg-gray-800 text-gray-100 p-4 lg:p-6 m-3 lg:m-5 md:w-1/2 md:self-stretch lg:h-[90%] items-center justify-between lg:justify-evenly rounded-md">
                <div className="flex flex-col justify-between w-4/5 lg:w-3/4 aspect-video p-3 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400">
                    <img src="..\public\eth-logo.png" className="h-6 lg:h-14 self-start" />
                    <div className="flex flex-col antialiased">
                        <span className="text-sm lg:text-xl font-normal bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">{currentWallet||"NO ACCOUNT CONNECTED"}</span>
                        <span className="text-xs lg:text-lg tracking-wider font-light text-gray-900">ADDRESS</span>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-2 lg:mt-8 justify-between items-center font-Montserrat">
                    <input type="text" name="receiver" onChange={handleReceiverChange} placeholder="Enter address of receiver" className="bg-gray-700 rounded-sm p-2 m-1 w-full" />
                    <input type="number" name="amount" onChange={handleAmountChange} step={0.000001} placeholder="Enter amount (ETH)" className="bg-gray-700 rounded-sm p-2 m-1 w-full" />
                    <input type="text" name="message" onChange={handleMessageChange} placeholder="Enter a message" className="bg-gray-700 rounded-sm p-2 m-1 w-full" />
                    <div className="w-[100%] m-1 border-t inset-0 border-gray-500"></div>
                    <div className="flex flex-row w-full justify-around">
                        {
                            !currentWallet && <button onClick={connectWallet} className="lg:h-10 w-1/2 lg:w-52 pl-5 pr-5 rounded-md lg:rounded-full text-gray-200 text-lg font-light bg-blue-600 m-3 hover:bg-purple-600 transition duration-200">Connect Wallet</button>
                        }
                        {
                            loader===false ? 
                            <button onClick={handleSubmit} className="lg:h-10 w-1/2 lg:w-52 pl-5 pr-5 rounded-md lg:rounded-full text-gray-200 text-lg font-light bg-blue-600 m-3 hover:bg-purple-600 transition duration-200">Send now</button>
                            :
                            <button className="flex flex-row items-center p-1 h-10 rounded-full text-gray-200 text-lg font-light bg-purple-600" disabled>
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="lg:m-1 lg:p-1">Processing Transaction</span>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainEx;