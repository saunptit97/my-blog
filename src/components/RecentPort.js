
import React from "react";
import RecentItem from "./RecentItem";

class RecentPort extends React.Component{  
  render(){
        return(
            <div className="recent-port">
                <h2>Recent Port</h2>
                <RecentItem />
                
            </div>
        )
    }
}
export default RecentPort;