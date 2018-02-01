import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <Logo />
                </div>  
                <div className="menu text-center">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="fa fa-bars"></span>                 
                        </button>
                    <Menu />	
                </div>
                </header>
        )
    }
}
export default Header;