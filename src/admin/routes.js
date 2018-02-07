import React from "react"

import Dashboard from "./Dashboard";
import Form from "./Form";
import ReactJsTable from "./ReactJsTable";
import JavaScriptTable from "./JavaScriptTable"
import AngualarJsTable from "./AngularJsTable";
const routes = [
    {
        path: '/admin',
        exact: true,
        main: () => <Dashboard/>
    },
    {
        path: '/table-reactjs',
        exact: false,
        main : ({match}) => <ReactJsTable match={match} />
    },
    {
        path: '/table-angularjs',
        exact : false,
        main : () => <AngualarJsTable/>
    },
    {
        path: '/table-javascript',
        exact: false, 
        main : () => <JavaScriptTable/>
    },
    {
        path :'/form',
        exact: false,
        main: () => <Form/>
    },
    {
        path: '/form-edit/id=:id&&category=:category',
        exact : false,
        main: ({match, history}) => <Form match ={match} history ={history} />
    },
    { 
        path: '/form-edit/table-angularjs',
        exact : false,
        main : () => <AngualarJsTable/>
    },
    { 
        path: '/form-edit/table-reactjs',
        exact : false,
        main : () => <ReactJsTable/>
    },
    { 
        path: '/form-edit/table-javascript',
        exact : false,
        main : () => <JavaScriptTable/>
    }

]
export default routes;