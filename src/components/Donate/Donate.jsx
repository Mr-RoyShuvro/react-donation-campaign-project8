import { Link } from "react-router-dom";

const Donate = ({ donation }) => {
    const { id, cover, category, title, price, card_bg, text_bg, category_bg } = donation;

    return (
        <div>
            <div className="bg-base-100 shadow-xl flex">
                <figure><img className="rounded-l-lg h-full w-64" src={cover} alt="Donation" /></figure>
                <div className={`card-body rounded-r-lg pl-6 bg-[${card_bg}]`}>
                    <div className="card-actions justify-start">
                        <button className={`rounded border-none text-base font-medium py-1 px-3 bg-[${category_bg}] text-[${text_bg}]`}>{category}</button>
                    </div>
                    <h2 className={`text-2xl font-semibold text-black ]`}>{title}</h2>
                    <h3 className={`text-[${text_bg} text-base font-semibold `}>{price}</h3>
                    <div className="card-actions justify-start">
                        <Link to={`/donation/${id}`}><button className={`btn rounded border-none text-lg font-semibold bg-[${text_bg}] text-white px-4 py-1 rounded`}>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Donate;