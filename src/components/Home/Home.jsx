import Header from "../Header/Header";
import ShowDonations from "../ShowDonations/ShowDonations";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                <ShowDonations></ShowDonations>
            </div>
        </div>
    );
};

export default Home;