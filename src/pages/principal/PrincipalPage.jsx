import { useEffect } from "react"

import React from 'react'

function PrincipalPage() {

    return (

        <div className="w-full">
            <nav className="bg-white shadow-lg">
                <div className="md:flex items-center justify-between py-2 px-8 md:px-12 h-28">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-800 md:text-3xl">
                            <a href="#">Fundación kinal</a>
                        </div>
                        <div className="md:hidden">
                            <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                        <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</a>
                        <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</a>
                        <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Contact</a>
                    </div>
                </div>
            </nav>
            <div className="flex bg-black" style={{ height: '650px' }}>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-200 md:text-4xl">Hotel <span className="text-indigo-600">Dashboard</span></h2>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">
                            <br />
                            ¡Bienvenidos a nuestra plataforma de hoteles, donde tus sueños de hospedaje se hacen realidad! Sumérgete en un mundo de lujo, comodidad y hospitalidad sin igual mientras exploras nuestra amplia selección de
                            destinos exquisitos. Desde majestuosos resorts en la playa hasta acogedores refugios en la montaña, tenemos el lugar perfecto para cada viajero. ¡Prepárate para una experiencia inolvidable
                            llena de momentos increíbles!</p>
                        <br />
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a className="px-7 py-4 bg-gray-800 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-800" href="/auth">Login</a>
                            <a className="mx-9 px-6 py-5 bg-gray-300 text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-400" href="/register">Register</a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
                    <div className="h-full object-cover " style={{ backgroundImage: 'url(https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/10/Miradores-en-la-Ciudad-de-Guatemala.jpg)' }}>
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-600 py-20">
                <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                    <div className="max-w-xl">
                        <h2 className="font-black text-white text-3xl mb-4">As the leading experts in this field, we're in over 90 countries</h2>
                        <p className="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button className="text-white uppercase py-3 text-base px-10 border border-white hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
                </div>
            </div>
        </div>


    )
}

export default PrincipalPage