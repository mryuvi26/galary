import Galary from "./Galary";
import React from 'react';
 

const Navbar = () => {
    return (
        <>
            <nav className="bg-sky-800 p-4 font-bold">
                <div className="container mx-auto">
                    <h1 className="text-sky-400 text-2xl">Gallery App</h1>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </nav>

        </>
    );
}

const Gallary = () => {
    return (
        <>

            <Navbar />
            <Galary />
            <footer className="bg-sky-800 p-4 font-bold">
                <div className="container mx-auto text-center text-white">
                    &copy; 2023 Gallery App
                </div>
            </footer>
           
        </>
    );
}
export default Gallary;