const Footer=() => {
    return (
        <div className="flex mb-7 lg:m-0 flex-col p-3 justify-around items-center">
            <div className="w-full lg:w-[90%] border-t inset-0 border-gray-500"></div>
            <div className="flex p-1">
                <a href="https://github.com/mainaak03">
                    <img className="w-[25px] m-3" src="\src\assets\github-mark-white.svg" />
                </a>
                <a href="https://www.linkedin.com/in/mainaak-chakraborty-176396227/">
                    <img className="w-[25px] m-3" src="\src\assets\linkedin-icon.svg" />
                </a>
            </div>
            <div className="flex p-1 m-1 lg:p-0 lg:m-0 text-gray-500">
                Made with &#128151; by Mainaak
            </div>
        </div>
    )
}

export default Footer;