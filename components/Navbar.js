import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#0c0729] text-white p-4 flex flex-col md:flex-row items-center justify-between'>
      <h1 className='text-lg font-bold text-2xl'>CodeFund</h1>
      <ul className="flex justify-center text-center">
        <li className="mx-4">Home</li>
        <li className="mx-4">About</li>
        <li className="mx-4">Projects</li>
        <li className="mx-4">Sign up</li>
        <li className="mx-4">Login</li>


      </ul>

    </nav>
  )
}

export default Navbar
