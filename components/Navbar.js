import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col bg-green-400">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/profile">PROFILE</Link>
    </div>
  )
}

export default Navbar;