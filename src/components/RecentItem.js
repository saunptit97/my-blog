import port1 from "./../photos/post1.jpg";
import React from "react";

class RecentItem extends React.Component{
    render(){
        return(
            <div className="row">
                  <div className="col-md-4">
                    <img src={port1} alt="Port 1"/>
                  </div>
                  <div className="col-md-8">
                    <h5>Title</h5>
                    <p className="by1">BY Sau nguyen</p>
                  </div>
                </div>
        )
    }
}
export default RecentItem;