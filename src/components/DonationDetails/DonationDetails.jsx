import { useLoaderData, useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const donation = donations.find(donation => donation.id === parseInt(id));



    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>


    const handleDonateBtn = () => {
        toast.success("You have donated successfully!")
    }


    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-56 h-14" src="https://i.ibb.co/sm1W580/Logo.png" alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
            {/* Nav end  */}
            <div className="flex items-end justify-end min-h-screen bg-cover bg-no-repeat mt-14" style={{ backgroundImage: `url(${donation.cover})` }}>
                <div className=" hero-overlay bg-opacity-60 w-full py-7 pl-2">
                    <button onClick={handleDonateBtn} className={`btn bg-[${donation.text_bg}] text-white rounded text-xl font-semibold`}>Donate {donation.price}</button>
                </div>
            </div>
            <div>
                <h3 className="text-5xl font-bold pt-14">{donation.title}</h3>
                <p className="text-lg font-normal pt-6 pb-20">{donation.description}</p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Flip/>
        </div>
    );
};

export default DonationDetails;