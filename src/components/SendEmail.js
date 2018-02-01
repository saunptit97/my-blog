import React from "react";

class SendEmail extends React.Component{
    render(){
        return(
            <div className="group-footer">
            <input type="text"  placeholder="Enter your email..." />
            <button className="btn">Submit</button>
          </div>
        )
    }
}
export default SendEmail;