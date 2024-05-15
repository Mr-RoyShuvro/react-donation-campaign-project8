import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div>
            <div className="min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/821dhx2/banner.jpg)', backgroundRepeat: "no-repeat", height: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-60 min-h-screen">
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
                    <div className="text-center text-neutral-content pt-32">
                        <div className="">
                            <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
                            <div className="join rounded-lg">
                                <input className="input input-bordered join-item bg-white w-96" placeholder="Search here...." />
                                <button className="btn join-item bg-[#FF444A] hover:bg-red-600 border-none text-white font-semibold text-base">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;