import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Banner from "../pages/Banner/Banner";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import MyList from "../pages/MyList/MyList";
import TouristSpotUpdate from "../pages/TouristSpotUpdate/TouristSpotUpdate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addTouristSpot",
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: "/allTouristSpot",
                element: <AllTouristSpot></AllTouristSpot>,
                loader: ()=> fetch("http://localhost:5000/allTouristSpot")
            },
            {
                path: "/myList",
                element: <MyList></MyList>
            },
            {
                path: "/myList/:id",
                element: <TouristSpotUpdate></TouristSpotUpdate>,
                loader: ({params}) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
            },
        ]
    },
]);
export default router;