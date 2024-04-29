import { Link, useNavigate } from "react-router-dom";

const DataNotFound = () => {
    const navigate = useNavigate();

    return (
        <div>

            <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                <div className="rounded-lg bg-white p-8 text-center ">
                    <h1 className="mb-2 text-4xl font-bold">Opps!</h1>
                    <img src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg" alt="" className="h-[250px] w-[250px] mx-auto" />
                    <p className="text-gray-600 text-3xl ">Data Could not be found.</p>
                    <Link onClick={() => navigate(-1)} className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back Page </Link>
                </div>
            </div>
        </div>
    );
};

export default DataNotFound;



