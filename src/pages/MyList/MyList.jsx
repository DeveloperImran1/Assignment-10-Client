import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const MyList = () => {
    const { user, loading } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState([]);



    const currentUserEmail = user?.email;
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
    console.log(loading)
    if (loading) {
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

    }

    return (
        <div>
            <h1>My added List </h1>
          

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
                                    <Link>
                                    <button className="btn btn-sm ml-2 bg-[#FF5400]"><FaRegEdit /></button>
                                </Link>
                            </td>
                            <td className="">
                                <button onClick={() => handleDelete(ld._id)} className="btn btn-sm ml-2 btn-warning"> <MdDeleteForever /></button>
                            </td>
                        </tr>
                    </tbody> )
                }

            </table>
        </div>


        </div >
    );
};

export default MyList;