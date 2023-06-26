const Landing=() => {

    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around h-[100%]">
            {/* <img src="src\assets\eth.png" className="w-[70%] self-start"/> */}
            <div className="flex flex-col items-center self-center m-2 lg:w-[50%]">
                <div className="font-Montserrat font-light text-5xl lg:text-8xl m-2 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                    EtherSend
                </div>
                <div className="font-Montserrat font-medium lg:text-[1.3rem] text-center bg-gradient-to-br from-gray-100 to-gray-400 bg-clip-text text-transparent m-2">
                    Accelerate Your Ethereum Sends, Embrace the Future of Finance
                </div>
                <div className="mt-16 font-Montserrat text-sm lg:text-lg text-justify bg-gradient-to-br from-gray-100 to-gray-400 bg-clip-text text-transparent m-2 w-[80%]">
                Send Ethereum instantly to anyone, anywhere in the world with EtherSend. Our user-friendly interface and robust encryption ensure that your transactions are safe and reliable. Seamlessly manage your Ethereum wallet, send funds with just a few taps, and track the progress of your transfers in real-time.
                </div>
                {/* <img src="src\assets\core.png" className="w-[90%] relative" /> */}
            </div>
            <img src="src\assets\eth.png" className="w-[50%] self-center"/>
        </div>
    )
};

export default Landing;