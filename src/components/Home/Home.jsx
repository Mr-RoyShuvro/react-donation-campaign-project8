import { useState } from "react";
import Header from "../Header/Header";
import ShowDonations from "../ShowDonations/ShowDonations";

const Home = () => {
    const [val, setVal] = useState("");

// const handleSearchBtn = () =>{
//     const currentValue = val;
//     console.log(currentValue);
// }

const handleInputField = event =>{
    const newValue = event.target.value;
    setVal(newValue);
}


const [donations, setDonations] = useState([]);
const [displayDonations, setDisplayDonations] = useState([]);

const handleSearchBtn = () =>{
    if(val === 'All'){
        setDisplayDonations(donations);
    }
    else if(val === 'Health'){
        const health = donations.filter(donation => donation.category === 'Health');
        setDisplayDonations(health);
    }
    else if(val === 'Education'){
        const education = donations.filter(donation => donation.category === 'Education');
        setDisplayDonations(education);
    }
    else if(val === 'Clothing'){
        const clothing = donations.filter(donation => donation.category === 'Clothing');
        setDisplayDonations(clothing);
    }
    else if(val === 'Food'){
        const food = donations.filter(donation => donation.category === 'Food');
        setDisplayDonations(food);
    }
    else{
        alert('Please search the correct category!')
    }
}




    return (
        <div>
            <Header handleSearchBtn = {handleSearchBtn} handleInputField= {handleInputField}></Header>
            <div className="max-w-7xl mx-auto">
                <ShowDonations displayDonations={displayDonations} setDonations = {setDonations} setDisplayDonations= {setDisplayDonations}></ShowDonations>
            </div>
        </div>
    );
};

export default Home;