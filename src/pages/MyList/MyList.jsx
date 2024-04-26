import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyList = () => {
    const { user, loading } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState([]);



    const currentUserEmail = user?.email;
    console.log(currentUserEmail)

    useEffect(() => {
        fetch(`http://localhost:5000/myAddedList/${currentUserEmail}`)
            .then(res => res.json())
            .then(data => {
                setMySpots(data)
            })
    }, [user])

    // delete spots 
    const handleDelete = _id => {
        fetch(`http://localhost:5000/myAddedList/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const currentSpots = mySpots.filter(spot => spot._id !== _id)
                    setMySpots(currentSpots)
                }
            })
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
            <div className="grid grid-cols-3" >
                {
                    mySpots.map(spot =>
                        <div key={spot._id}>
                            <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                                <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover" src={spot.image} alt="card navigate ui" />
                                <div className="grid gap-2">
                                    <h1 className="text-lg font-semibold ">{spot.country_Name}</h1>
                                    <p className="text-sm text-gray-500 dark:text-white/60">{spot.email}</p>
                                    <div className="text-lg font-semibold">{spot.tourists_spot_name}</div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Update</button>
                                    <button onClick={() => handleDelete(spot._id)} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyList;