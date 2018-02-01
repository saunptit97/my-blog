import React from "react";
import logo from "./../photos/logo-black.png";
import Search from "./Search";
class Logo extends React.Component{
    render(){
        return(
            <div className="row logo">
                <div className="col-md-4 top-icon">
                    <span className="fa fa-facebook left-icon"></span>
                    <span className="fa fa-twitter left-icon"></span>
                    <span className="fa fa-instagram left-icon"></span>
                    <span className="fa fa-heart left-icon"></span>
                    <span className="fa fa-phone left-icon"></span>
                </div>
                <div className="col-md-4 text-center">
                    <img src={logo} alt={"Logo"}/>
                </div>
                <div className="col-md-4 top-icon">
                    <Search />
                </div>
            </div>
        )
    }
}
export default Logo;