import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
       <div className="bg-animated min-h-screen w-full flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center h-[45vh] text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse">
            Welcome to CodeFund
          </h1>
          <p className="mt-4 text-lg text-gray-300">A platform to fund open source projects</p>
          <div className="flex gap-3 mt-6">
            <Link href="/login">
              <button className="px-6 py-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all text-white font-semibold">
                Start Here
              </button>
            </Link>
            <Link href="/about">
              <button className="px-6 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Floating Text */}
        <div className="relative w-full z-10">
          <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-lg font-semibold font-mono hidden md:block animate-slideLeft">
            The internet depends on
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-lg font-semibold font-mono hidden md:block animate-slideRight">
            open source, everywhere.
          </div>
        </div>

        {/* Divider */}
        <div className="w-11/12 mx-auto my-12 h-[8px] bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-40 rounded-full"></div>


        {/* Features Section */}
        <div className="text-white flex flex-col items-center px-4 md:px-16 text-center mt-5">
          <h2 className="text-3xl md:text-4xl font-bold my-6">Invest in open source. It powers your world.</h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-24 mt-6">
            <div className="flex flex-col items-center">
              <img src="/man.gif" className="bg-[#334155] rounded-full p-6 w-32 h-32 shadow-md" alt="Monetize" />
              <p className="mt-3 text-slate-300 font-medium">Monetize Your Code</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/coin.gif" className="bg-[#334155] rounded-full p-6 w-32 h-32 shadow-md" alt="Support" />
              <p className="mt-3 text-slate-300 font-medium">Support Projects You Love</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/group.gif" className="bg-[#334155] rounded-full p-6 w-32 h-32 shadow-md" alt="Community" />
              <p className="mt-3 text-slate-300 font-medium">Invest in Community Progress</p>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Footer space */}
        <div className="h-20"></div>
      </div>
      
    </>
  );
}
