import React from "react"
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import ContactPage from "./containers/ContactPage";
import JavaScriptPage from "./containers/JavaScriptPage";
import AngualarJsPage from "./containers/AngualarJsPage";
import ReactJsPage from "./containers/ReactJsPage";
import NotFoundPage from "./containers/NotFoundPage";
import ContentPage from "./containers/ContentPage";

const routes =[
    {
        path : "/",
        exact : true,
        main: () => <HomePage/>
    },
    {
        path: '/about',
        exact : false,
        main : () => <AboutPage />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <ContactPage/>
    },
    {
        path: '/javascript',
        exact: false,
        main: () => <JavaScriptPage/>
    },
    {
        path: '/content/id=:id&&category=:category',
        exact: false,
        main: ({match}) => <ContentPage match ={match}/>
    },
    {
        path: '/angularjs',
        exact: false,
        main : () => <AngualarJsPage/>
    },
    {
        path: '/reactjs',
        exact : false,
        main: () => <ReactJsPage/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFoundPage/>
    }
]
export default routes;