"use client"
import { useState } from "react";
import Link from "next/link";
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>


function Navbar(){
    const [isClick, setisClick] = useState(false);
    const toggleNavbar = ():void => {
        setisClick(!isClick)
    }
    return(
        <>
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/"  className="text-black font-mono font-bold hover:underline md:text-3xl">Ansharah</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Home
                            </Link>
                            <Link href="/about" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            About
                            </Link>
                            <Link href="/Projects" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Projects
                            </Link>
                            <Link href="/Services" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Services
                            </Link>
                            <Link href="/Contact" className="text-black hover:bg-black hover:text-white rounded-lg p-2">
                            Contact
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" 
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg className="h-6 w-6"
                                xmlns="httsp://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) :(
                                <svg className="h-6 w-6"
                                xmlns="httsp://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h15m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {/* again nav items ayngy home etc... */}
                        <Link href="/" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Home
                            </Link>
                            <Link href="/about" className="text-black hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            About
                            </Link>
                            <Link href="/Projects" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Project
                            </Link>
                            <Link href="/Services" className="text-black  hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Services
                            </Link>
                            <Link href="/Contact" className="text-black hover:bg-slate-600 hover:text-white rounded-lg p-2">
                            Contact
                            </Link>
                    </div>
                </div>
            )}
        </nav>
        </>
    )
}

export default Navbar;
