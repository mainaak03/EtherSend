const Infographic=() => {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center mt-12 mb-12 lg:p-2 lg:m-2 lg:mt-10 lg:mb-10">
            <div className="flex flex-col lg:w-1/2 items-center lg:self-stretch justify-evenly">
                <div className="text-center font-light text-3xl lg:text-6xl m-1 lg:p-5 lg:m-3 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                    Why Ethereum?
                </div>
                <img className="w-2/4 lg:w-3/4 m-1 p-1" src="\what-is-ethereum.png" />
            </div>
            <div className="flex flex-col w-4/5 lg:w-3/4 p-1 text-center lg:text-left lg:border-l inset-0 border-gray-500">
                <div className="flex flex-col tex-sm lg:text-xl font-light m-1 lg:m-5 text-gray-200">
                    <span className="m-0 mt-2 mb-2 font-semibold tracking-wide">Decentralization and Security:</span>
                    Ethereum&#39;s blockchain technology ensures a decentralized network, enhancing security and eliminating single points of failure.
                </div>
                <div className="flex flex-col tex-sm lg:text-xl font-light m-1 lg:m-5 text-gray-200">
                    <span className="m-0 mt-2 mb-2 font-semibold tracking-wide">Smart Contract Platform:</span>
                    Ethereum&#39;s smart contracts enable the development of decentralized applications, eliminating intermediaries and opening up new possibilities across industries.
                </div>
                <div className="flex flex-col tex-sm lg:text-xl font-light m-1 lg:m-5 text-gray-200">
                    <span className="m-0 mt-2 mb-2 font-semibold tracking-wide">Innovation and Ecosystem:</span>
                    Ethereum&#39;s active developer community fosters continuous innovation, leading to the creation of decentralized finance (DeFi) protocols and a thriving ecosystem.
                </div>
                <div className="flex flex-col tex-sm lg:text-xl font-light m-1 lg:m-5 text-gray-200">
                    <span className="m-0 mt-2 mb-2 font-semibold tracking-wide">Interoperability and Standardization:</span>
                    Ethereum&#39;s widespread adoption and compatibility make it a standard for building interoperable applications and launching new cryptocurrencies through the ERC-20 token standard.
                </div>
            </div>
        </div>
    )
};

export default Infographic;