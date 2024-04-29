import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DataNotFound from "../ErrorPage/DataNotFound";
import { ScaleLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";


const MyList = () => {
    const { user, loading } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState([]);



    const currentUserEmail = user?.email || "ih9066588@gmail.com" ;
    console.log(currentUserEmail)

    useEffect(() => {
        fetch(`https://assignment-ten-server-side-indol.vercel.app/myAddedList/${currentUserEmail}`)
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
            })
    }, [user])

    // delete spots 
    const handleDelete = _id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary Post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://assignment-ten-server-side-indol.vercel.app/myAddedList/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const currentSpots = mySpots.filter(spot => spot._id !== _id)
                                setMySpots(currentSpots)
                            }
                        })

                    swal("Success! Your imaginary Post has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary Post is safe!");
                }
            });


        console.log(_id)

    }

    console.log(mySpots)
 
    if (loading) {
        return <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)]">
        <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>
      </div>

    }
    if(!mySpots.length){
        return <DataNotFound></DataNotFound>
    }

    return (
        <div>
            <Helmet>
                <title>TravelsBook || MyList </title>
            </Helmet>
            <h1 className="text-xl mg:text-2xl lg:text-3xl font-bold text-center text-black mb-3 ">My added List</h1>

            <div className="flex flex-col items-center justify-center" >
                <p className="text-center text-black w-[75%] mt-3 mb-11 " >In This Section You see All Post Informaion . You Added This post. If you nedd Post Update or Delete. You do Click in Update and Delete Button.</p>

            </div>

            <div className="overflow-x-auto border w-full mx-auto bg-[#1313180D] rounded-xl border-black  ">
                <table className="min-w-full text-[16px] font-semibold ">
                    <thead className="dark:bg-gray-300 bg-slate-600 mt-10">
                        <tr className="text-left text-[#131318]">
                            <th></th>
                            <th className="p-3">Tourist </th>
                            <th className="p-3">Time</th>
                            <th className="p-3">country</th>
                            <th className="p-3">Average Cost</th>
                            <th className="p-3">Update</th>
                            <th className="p-3">Delete</th>

                        </tr>
                    </thead>
                    {
                        mySpots.map((ld, i) => <tbody key={ld._id}>
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <th>{i + 1}</th>
                                <td className="p-3">
                                    <p>{ld.tourists_spot_name}</p>
                                </td>

                                <td className="p-3">
                                    <p>{ld.tourists_spot_name}</p>

                                </td>
                                <td className="p-3">
                                    <p>{ld.tourists_spot_name}</p>

                                </td>
                                <td className="p-3">
                                    <p>{ld.average_cost}</p>

                                </td>
                                <td className="">
                                    <Link to={`/myList/${ld._id}`} >
                                        <button className="btn btn-sm ml-2 bg-[#FF5400]"><FaRegEdit /></button>
                                    </Link>
                                </td>
                                <td className="">
                                    <button onClick={() => handleDelete(ld._id)} className="btn btn-sm ml-2 btn-warning"> <MdDeleteForever /></button>
                                </td>
                            </tr>
                        </tbody>)
                    }

                </table>
            </div>


        </div >
    );
};

export default MyList;