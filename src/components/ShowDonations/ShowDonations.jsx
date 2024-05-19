import { useEffect } from "react";
import ShowDonation from "../ShowDonation/ShowDonation";


const ShowDonations = ({ displayDonations, setDonations, setDisplayDonations }) => {


    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json(res))
            .then(data => {
                setDonations(data);
                setDisplayDonations(data);
            })
    }, [])

    return (
        <div className="mb-24 mt-16">
            {/* <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg">
                <marquee className="text-center font-bold text-black text-3xl py-5 " direction="right">Stand Together, Stand Strong</marquee>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
                {
                    displayDonations.map(donation => <ShowDonation key={donation.id} donation={donation}></ShowDonation>)
                }
            </div>
        </div>
    );
};

export default ShowDonations;