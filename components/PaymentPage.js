"use client"
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSearchParams, useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({ name: '', message: '', amount: '' });
    const [currentUser, setcurrentUser] = useState({});
    const [payments, setPayments] = useState([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (searchParams.get('paymentdone') === 'true') {
            toast.success('Thanks for your donation!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        }
        router.push(`/${username}`);
    }, []);

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    };

    const getData = async () => {
        const u = await fetchuser(username);
        setcurrentUser(u);
        const dbpayments = await fetchpayments(username);
        setPayments(dbpayments);
    };

    const pay = async (amount) => {
        const a = await initiate(amount, username, paymentform);
        const orderId = a.id;

        const options = {
            key: currentUser.razorpayid,
            amount,
            currency: 'INR',
            name: 'CodeFund',
            description: 'Support the creator',
            image: 'https://example.com/your_logo',
            order_id: orderId,
            callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            prefill: {
                name: paymentform.name,
                email: 'gaurav.kumar@example.com',
                contact: '9000090000'
            },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#6C63FF'
            }
        };

        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    return (
        <>
            <ToastContainer theme="dark" />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

           <div className="bg-[#0f172a] min-h-screen pb-20 text-white font-sans">

                <div className='relative'>
                    <img className='w-full h-64 md:h-96 object-cover opacity-90 rounded-2xl shadow-lg' src={currentUser.coverpic} alt="cover" />
                    <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 border-4 border-[#1e293b] rounded-full overflow-hidden w-36 h-36'>
                        <img className='object-cover w-full h-full' src={currentUser.profilepic} alt="profile" />
                    </div>
                </div>

                <div className="text-center mt-24 mb-10">
                    <h1 className="text-2xl font-bold">@{username}</h1>
                    <p className="text-slate-400">Let’s fund {username}'s code!</p>
                    <p className="text-slate-400 mt-1">{payments.length} payments · ₹{payments.reduce((a, b) => a + b.amount, 0)} raised</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 px-4 md:px-20 mb-20">
                    <div className="bg-[#1e293b] w-full md:w-1/2 p-6 rounded-2xl shadow-xl">
                        <h2 className='text-xl font-semibold mb-4'>Top Supporters</h2>
                        <ul className='space-y-4'>
                            {payments.length === 0 && <li className='text-slate-400'>No payments yet</li>}
                            {payments.map((p, i) => (
                                <li key={i} className='flex gap-3 items-start'>
                                    <img className='w-10 h-10' src="/avatar.gif" alt="avatar" />
                                    <span>
                                        <strong>{p.name}</strong> donated <span className='text-green-400 font-bold'>₹{p.amount}</span><br />
                                        <span className='text-slate-400 text-sm'>"{p.message}"</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#1e293b] w-full md:w-1/2 p-6 rounded-2xl shadow-xl">
                        <h2 className='text-xl font-semibold mb-4'>Make a Payment</h2>
                        <div className='space-y-4'>
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-[#334155] focus:outline-none' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-[#334155] focus:outline-none' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name="amount" type="number" className='w-full p-3 rounded-lg bg-[#334155] focus:outline-none' placeholder='Enter Amount' />

                            <button onClick={() => pay(Number(paymentform.amount) * 100)} disabled={paymentform.name.length < 3 || paymentform.message.length < 4 || !paymentform.amount} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 rounded-lg disabled:bg-gray-600">
                                Pay
                            </button>
                        </div>

                        <div className='mt-6 text-sm text-slate-300'>Quick Donate:</div>
                        <div className='flex gap-2 mt-2'>
                            <button onClick={() => pay(1000)} className='bg-[#334155] hover:bg-[#475569] py-2 px-4 rounded-lg'>₹10</button>
                            <button onClick={() => pay(2000)} className='bg-[#334155] hover:bg-[#475569] py-2 px-4 rounded-lg'>₹20</button>
                            <button onClick={() => pay(3000)} className='bg-[#334155] hover:bg-[#475569] py-2 px-4 rounded-lg'>₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage;
