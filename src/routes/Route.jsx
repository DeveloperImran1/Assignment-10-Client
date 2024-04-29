import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import MyList from "../pages/MyList/MyList";
import TouristSpotUpdate from "../pages/TouristSpotUpdate/TouristSpotUpdate";
import TouristDetails from "../pages/TouristDetails/TouristDetails";
import Home from "../pages/Home/Home";
import SameCountries from "../pages/Countries/SameCountries";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
import AuthorProfile from "../pages/Profile/AuthorProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                loader: ()=> fetch("https://assignment-ten-server-side-indol.vercel.app/allTouristSpot")
            },
            {
                path: "/myList",
                element: <MyList></MyList>
            },
            {
                path: "/myList/:id",
                element: <TouristSpotUpdate></TouristSpotUpdate>,
                loader: ({params}) => fetch(`https://assignment-ten-server-side-indol.vercel.app/touristSpot/${params.id}`)
            },
            {
                path: "/touristSpot/:id",
                element: <TouristDetails></TouristDetails>
            },
            {
                path: "/country/:id",
                element: <SameCountries></SameCountries>,
                loader: ({params}) => fetch(`https://assignment-ten-server-side-indol.vercel.app/countriesCollection/${params.id}`)
            },
            {
                path: "/userProfile",
                element: <Profile></Profile>
            },
            {
                path: "/authorProfile",
                element: <AuthorProfile></AuthorProfile>
            },
        ]
    },
]);
export default router;