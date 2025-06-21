import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <div className="flex flex-col  items-center justify-center h-[45vh] text-white">
      <h1 className="text-5xl font-bold">Welcome to CodeFund</h1>
      <p className="mt-4">A platform to fund open source projects</p>
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
        Start here
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
        Learn more
      </button>
        </div>
        

    </div>

<div className="relative w-full z-10">
  {/* Left phrase */}
  <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-lg font-semibold font-mono hidden md:block animate-slideLeft">
    The internet depends on
  </div>

  {/* Right phrase */}
  <div className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-lg font-semibold font-mono hidden md:block animate-slideRight">
    open source, everywhere.
  </div>
</div>


 


    <div className="bg-white h-1 my-9 opacity-10"></div>

    <div className="text-white  flex flex-col items-center font-bold h-[45vh] container  mx-auto flex-wrap mt-5 ">
      <h1 className="text-3xl my-7 ">Invest in open source. It powers your world.</h1>
      <div className="flex flex-wrap justify-center gap-10 md:gap-36 mt-4">

        <div className="item flex-col items-center justify-center">
          <img src="/man.gif" className="bg-slate-400 flex mx-auto justify-center items-center rounded-full my-3 p-5" width={125} alt="" />
          <p className="flex text-center justify-center">Monetize Your Code</p>

        </div>
        <div className="item flex-col items-center justify-center">
          <img src="/coin.gif" className="bg-slate-400 flex mx-auto justify-center items-center rounded-full my-3 p-5" width={125} alt="" />
          <p className="flex text-center justify-center">Support Projects You Love</p>

        </div>
        <div className="item flex-col items-center justify-center">
          <img src="/group.gif" className="bg-slate-400 rounded-full my-3 p-5 flex mx-auto justify-center items-center" width={125} alt="" />
          <p className="flex text-center justify-center">Invest in Community Progress </p>

        </div>
      </div>



  



       



    
    </div>
    </>
  );
}
