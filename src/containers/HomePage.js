import React , {Component} from "react";
import Banner from "./../components/Banner"
import Contents from "./../components/Contents";
import Slider from "./../components/Slider";
class Homepage extends Component{
    render(){
        return(
            <div>
                 <Slider />
            <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Contents />
              </div>
              <div className="col-md-4">
                <Banner />
              </div>
            </div>
          </div>
        </div>
        )
    }
}
export default Homepage;