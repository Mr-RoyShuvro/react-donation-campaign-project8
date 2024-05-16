import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import Donate from "../Donate/Donate";
import { NavLink } from "react-router-dom";

const GivenDonation = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    const donations = useLoaderData()

    const [givenDonation, setGivenDonation] = useState([]);

    useEffect(() => {
        const storedDonationsId = getStoredDonation();
        if (donations.length > 0) {
            const donationGiven = donations.filter(donation => storedDonationsId.includes(donation.id));
            setGivenDonation(donationGiven);
        }
    }, [])

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto py-16">
                {
                    givenDonation.map(donation => <Donate key={donation.id} donation={donation}></Donate>)
                }
            </div>
        </div>
    );
};

export default GivenDonation;