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
        <div>
            <h3>All donation list:{donations.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {
                    donations.map(donation=><ShowDonation key={donation.id} donation={donation}></ShowDonation>)
                }
            </div>
        </div>
    );
};

export default ShowDonations;