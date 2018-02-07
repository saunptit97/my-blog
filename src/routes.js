import React from "react";
import Login from "./admin/login";
import Admin from "./admin/admin";
import App from "./components/App";
import NotFoundPage from "./containers/NotFoundPage";
const routes =[
    {
        path : "/",
        exact : true,
        main: () => <App/>
    },
    {
        path: '/login', 
        exact: false,
        main:()=> <Login />
    },
    {
        path:"/admin",
        exact: false,
        main: () => <Admin/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFoundPage/>
    }
]
export default routes;