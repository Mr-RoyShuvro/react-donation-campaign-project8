import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getStoredDonation } from '../../utility/localStorage';

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
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
      }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);}

    return (
        <div>
             <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
            <div className='flex justify-center py-20'>
                {/* <h3>You will show pie Chart here.</h3> */}
                <PieChart width={410} height={410}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
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
            <div className='flex flex-col md:flex-row gap-10 justify-center pb-10'>
                <div className='flex gap-5'>
                    <h3 className='text-xl'>Total Donation: <span className='text-[#00C49F] font-semibold'>{remainingDonateFix}%</span></h3>
                    <div className='w-28 h-5 rounded bg-[#00C49F]'></div>
                </div>
                <div className='flex gap-5'>
                    <h3 className='text-xl'>Your Donation: <span className='text-[#FF444A] font-semibold'>{donateFix}%</span></h3>
                    <div className='w-28 h-5 rounded bg-[#FF444A]'></div>
                </div>

            </div>
        </div>

    );

};

export default Statistics;