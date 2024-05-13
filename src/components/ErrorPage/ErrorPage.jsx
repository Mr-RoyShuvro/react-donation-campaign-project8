import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h3 className="pt-32">Oops!</h3>
            <p className="pt-5 pb-10">The page you search is not found...</p>
            <button className="btn bg-orange-600 hover:bg-orange-700 font-semibold text-white"><Link to='/'>Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;