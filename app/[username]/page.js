import React from "react";

const Username = ({ params }) => {
  return (
    <div className="min-h-screen bg-[#0c0a1b] px-4 pb-16 text-white">

      <div className="relative">
        <img
          className="object-cover w-full h-[375px] rounded-b-3xl shadow-xl"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10979759/59e00f881bd4413b873f1b714e05a25d/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/3.jpg?token-hash=GwOjN0aKTvts9WqYbecAFkxpWCFeEPzhkSqkjixb6Xg%3D&token-time=1751587200"
          alt="cover"
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            width={140}
            height={140}
            className="border-4 border-[#0c0a1b] shadow-xl rounded-full object-cover"
            src="https://i.pinimg.com/736x/19/d8/51/19d851065d0fa43c356328bcec240bf9.jpg"
            alt="avatar"
          />
        </div>
      </div>


      <div className="flex flex-col items-center mt-24">
        <h1 className="text-3xl font-bold tracking-tight">@{params.username}</h1>
        <p className="text-gray-400 text-sm mt-1">Developer of OpenSource projects</p>


        <div className="flex gap-6 mt-5 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            449 members
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 4v2h8V7H6zm0 4v2h5v-2H6z" />
            </svg>
            3 posts
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13v2h2a1 1 0 110 2h-2v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2v-2H7a1 1 0 110-2h2V5a1 1 0 112 0z" />
            </svg>
            ₹3838/month
          </span>
        </div>


        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mt-10">

          <div className="bg-[#1a172c] rounded-xl shadow-md p-6 flex-1">
            <h2 className="text-lg font-semibold text-gray-300 border-b border-gray-600 pb-2 mb-4">
              Supporters
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">Rohan</span>
                <span className="text-sm">donated ₹230</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">Aarya</span>
                <span className="text-sm">donated ₹150</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">Neha</span>
                <span className="text-sm">donated ₹100</span>
              </li>
            </ul>
          </div>


          <div className="bg-gradient-to-tr from-red-500 via-pink-500 to-yellow-500 rounded-xl shadow-lg p-6 flex-1 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white mb-4">Support this creator</h2>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100 shadow transition duration-200">
              Make a Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
