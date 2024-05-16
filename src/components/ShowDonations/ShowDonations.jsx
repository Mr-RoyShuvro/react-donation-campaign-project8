import { useEffect, useState } from "react";
import ShowDonation from "../ShowDonation/ShowDonation";


const ShowDonations = () => {

    const [donations, setDonations] = useState([]);
    
    useEffect(()=>{
        fetch('donation.json')
        .then(res => res.json(res))
        .then(data => setDonations(data))
    },[])

    return (
        <div className="my-24">
            <h3 ></h3>
            <marquee className="text-center font-bold text-3xl py-5 text-red-600" direction="right">Stand Together, Stand Strong</marquee>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {
                    donations.map(donation=><ShowDonation key={donation.id} donation={donation}></ShowDonation>)
                }
            </div>
        </div>
    );
};

export default ShowDonations;