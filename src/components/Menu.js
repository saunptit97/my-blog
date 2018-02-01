import React from "react"
import {Link} from "react-router-dom"
class Menu extends React.Component{
    render(){
        return(
            <nav id="myNavbar" className="collapse navbar-collapse">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/reactjs">ReactJS</Link></li>
                            <li><Link to="/angularjs">AngularJS</Link></li>
                            <li><Link to="/javascript">JavaScript</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>		
        )
    }
}
export default Menu;