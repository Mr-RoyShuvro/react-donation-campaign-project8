import { Link } from "react-router-dom";



const ShowDonation = ({ donation }) => {

    const { id, title, cover, category, text_bg, card_bg, category_bg } = donation;

    return (
        <Link to={`/donation/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className="h-48 rounded-t-lg" src={cover} alt="Donation" /></figure>
                <div className={`card-body rounded-b-lg bg-[${card_bg}]`}>
                    <div className="card-actions justify-start pt-4">
                        <button className={`rounded p-3 border-none text-base font-semibold bg-[${category_bg}] text-[${text_bg}]`}>{category}</button>
                    </div>
                    <h2 className={`text-xl pt-2 pb-4 font-semibold text-[${text_bg}]`}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ShowDonation;