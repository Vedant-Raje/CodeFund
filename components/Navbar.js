"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

const Navbar = () => {

    const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }


  return (
    
    <nav className="bg-[#0c0729] text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-lg font-bold text-2xl">CodeFund</h1>
      {/* <ul className="flex justify-center text-center">
        <li className="mx-4">Home</li>
        <li className="mx-4">About</li>
        <li className="mx-4">Projects</li>
        <li className="mx-4">Sign up</li>
        <li className="mx-4">Login</li>


      </ul> */}

      <div>
        <Link href={"/login"}>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Login
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );

};

export default Navbar;
