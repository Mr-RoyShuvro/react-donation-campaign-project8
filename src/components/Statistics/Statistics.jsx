import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getStoredDonation } from '../../utility/localStorage';
import { NavLink } from "react-router-dom";

const Statistics = () => {

    const give = getStoredDonation();

    const donate = (((give.length) / 12) * 100);
    const donateFix = parseFloat(donate.toFixed(2));

    const remainingDonate = (100 - donate);
    const remainingDonateFix = parseFloat(remainingDonate.toFixed(2));

    const data = [
        { name: 'Total Donation', value: remainingDonateFix },
        { name: 'Your Donation', value: donateFix }
    ];
    const COLORS = ['#00C49F', '#FF444A'];

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/donation">Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
    // const RADIAN = Math.PI / 180;

    // const renderCustomizedLabel = ({
    //     cx,
    //     cy,
    //     midAngle,
    //     innerRadius,
    //     outerRadius,
    //     percent,
    //     index
    // }: any) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);
    // } 

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
            {/* <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text> */}
            <div className='flex justify-center py-10'>
                {/* <h3>You will show pie Chart here.</h3> */}
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={190}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div className='flex flex-col md:flex-row gap-10 justify-center pb-20'>
                <div className='flex gap-5 justify-center items-center'>
                    <h3 className='text-xl'>Total Donation: <span className='text-[#00C49F] font-semibold'>{remainingDonateFix}%</span></h3>
                    <div className='w-28 h-5 rounded bg-[#00C49F]'></div>
                </div>
                <div className='flex gap-5 items-center justify-center'>
                    <h3 className='text-xl'>Your Donation: <span className='text-[#FF444A] font-semibold'>{donateFix}%</span></h3>
                    <div className='w-28 h-5 rounded bg-[#FF444A]'></div>
                </div>

            </div>
        </div>

    );

};

export default Statistics;