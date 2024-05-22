import React from 'react'

function Nav() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for the menu when it's closed. */}
                            {/* Icon when menu is open. */}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logotipo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="/tu-logo.png" alt="TuLogo" />
                            <img className="hidden lg:block h-11 w-10" src="../src/assets/img/imgLogoK.png" alt="TuLogo" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* Links de navegación */}
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Acerca de</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* Links de navegación móvil */}
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Acerca de</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav