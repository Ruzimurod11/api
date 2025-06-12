"use client"

import { Menu, X } from "lucide-react" // ikonka uchun (lucide-react eng zamonaviy)
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <span className="text-2xl font-bold">DummyJSON Shop</span>
                </Link>

                {/* Hamburger icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ?
                            <X size={28} />
                        :   <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-500">
                    <nav className="flex flex-col space-y-4 py-4 px-6">
                        <Link href="/" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link href="/products" onClick={toggleMenu}>
                            Products
                        </Link>
                        <Link href="/about" onClick={toggleMenu}>
                            About
                        </Link>
                        <Link href="/contact" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
