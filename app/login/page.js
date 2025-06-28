"use client";
import React, {useEffect} from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

   useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  return (
    <div className="text-white p-4 mx-auto flex py-14 flex-col items-center justify-center">
      <h1 className="text-center font-bold text-3xl">Login to let the community support you</h1>

      <div className="flex flex-col gap-2 min-h-screen p-10">
        {/* Google
        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg className="h-6 w-6 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
  <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.4-34.2-4.1-50.3H272v95.3h146.9c-6.3 34.6-25.3 64-54 83.5v68h87.3c51-47 81.3-116.1 81.3-196.5z" />
  <path fill="#34A853" d="M272 544.3c73.1 0 134.4-24.2 179.1-65.5l-87.3-68c-24.2 16.2-55.2 25.6-91.8 25.6-70.6 0-130.4-47.7-151.7-111.4h-89.6v69.8c44.7 88 136.1 149.5 241.3 149.5z" />
  <path fill="#FBBC05" d="M120.3 325c-10.2-30.6-10.2-63.3 0-93.9v-69.8H30.7C-10.2 203.8-10.2 340.6 30.7 411.6l89.6-69.8z" />
  <path fill="#EA4335" d="M272 107.7c38.8 0 73.6 13.4 101.2 39.8l75.6-75.6C383.2 24.2 321.9 0 272 0 166.8 0 75.3 61.5 30.7 149.5l89.6 69.8c21.3-63.7 81.1-111.4 151.7-111.4z" />
</svg>
          <span>Continue with Google</span>
        </button>


        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg className="h-6 w-6 mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="#0A66C2" d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.67 53.67 0 1 1 53.67-53.66 53.66 53.66 0 0 1-53.67 53.66zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.4s1.2-272 0-300.1h92.4v42.5c12.3-19 34.3-46.1 83.6-46.1 61 0 106.8 39.8 106.8 125.3V448z"/>
</svg>
          <span>Continue with LinkedIn</span>
        </button>


        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
         <svg className="h-6 w-6 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="#1DA1F2" d="M459.4 151.7c.3 4.1.3 8.2.3 12.3 0 125.4-95.5 270-270 270A268.4 268.4 0 0 1 0 398.6a195.5 195.5 0 0 0 22.7 1.1 190 190 0 0 0 117.8-40.7A94.9 94.9 0 0 1 60 273.7a118.3 118.3 0 0 0 17.9 1.5 100.2 100.2 0 0 0 24.9-3.2A94.9 94.9 0 0 1 18.7 180v-1.2a95.7 95.7 0 0 0 43 11.9 95 95 0 0 1-42.2-78.8 94.8 94.8 0 0 1 12.7-47.8 270.5 270.5 0 0 0 196.3 99.5A106.7 106.7 0 0 1 88 116.4a95.3 95.3 0 0 1 43.4-79.5 95.5 95.5 0 0 1 135 87 191.2 191.2 0 0 0 60.2-23.1 94.9 94.9 0 0 1-41.7 52.3 189.5 189.5 0 0 0 54.6-15z"/>
</svg>
          <span>Continue with Twitter</span>
        </button> */}

       

        {/* GitHub */}
        <button onClick={() => signIn("github")} className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg className="h-10 w-10 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000000" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.805 1.305 3.49.997.11-.775.42-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
</svg>
          <span>Continue with Github</span>
        </button>

        
      </div>
    </div>
  );
};

export default Login;
