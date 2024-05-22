import React from 'react'

function Header() {
    return (
        <header>

            <div className="w-full bg-cover bg-center" style={{ height: "32rem", backgroundImage: "url(https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">HOTELES <span className="underline text-blue-400">FD </span></h1>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Reservar</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header