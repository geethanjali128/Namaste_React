
import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Body from './components/Body';
import Contact from './components/Contact';
import Error from "./components/Error";
import Header from './components/Header';
import RestaurantMenu from "./components/RestaurantMenu";

const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

// createBrowserRouter => creates a configuration for routing and it takes  a list[]
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
             {
            path:'/',
            element:<Body/>
            },
            {
            path:'/about',
            element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
             {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    

])

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)