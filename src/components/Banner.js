import React , {Component} from "react";
import About from "./About";
import Follow from "./Follow";
import RecentPort from './RecentPort';
import Categories from "./Categories";
class Banner extends Component{
    render(){
        return(
            <div>
                <About />
                <Follow />
                <RecentPort />
                <Categories />
            </div>
        )
    }
}
export default Banner;