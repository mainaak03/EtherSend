const Navbar=() => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between bg-gray-800 bg-opacity-60 rounded-sm lg:rounded-md m-1 p-1 lg:m-2 text-gray-200">
            <div className="flex flex-row justify-center items-center">
                <img src="..\public\eth-glyph-colored.png" className="mx-6 my-1 lg:ml-8 h-8" />
                {/* <div className="text-3xl font-Montserrat font-extralight lg:text-4xl mx-1 my-1 lg:mx-5 lg:my-1">ES</div> */}
            </div>
            <div className="flex lg:h-auto items-center justify-evenly my-1 lg:m-0 font-Montserrat font-light">
                <div className="lg:mx-10 text-md lg:text-lg">
                    <button className="hover:bg-gray-950 lg:p-1 rounded-full">Exchange</button>
                </div>
                <div className="lg:mx-10 text-sm lg:text-lg">
                    <button className="hover:bg-gray-950 lg:p-1 rounded-full">Market</button>
                </div>
                <div className="lg:mx-10 text-sm lg:text-lg">
                    <button className="hover:bg-gray-950 lg:p-1 rounded-full">Contact Us</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;