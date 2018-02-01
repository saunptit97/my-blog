import React from "react";

class Follow extends React.Component{
    render(){
        return(
            <div className="follow-me">
                <h2 className="follow-title">Follow me</h2>
                <table>
                  <tbody>
                  <tr>
                    <td><a href=""><i className="fa fa-facebook"/><br/><span>Facebook</span></a></td>
                    <td><a href=""><i className="fa fa-instagram"/><br/><span>Instagram</span></a></td>
                    <td><a href=""><i className="fa fa-google-plus"/><br/><span>Google+</span></a></td>
                  </tr>
                  <tr>
                    <td><a href=""><i className="fa fa-twitter"/><br/><span>Twitter</span></a></td>
                    <td><a href=""><i className="fa fa-tumblr"/><br/><span>Tumblr</span></a></td>
                    <td><a href=""><i className="fa fa-heart"/><br/><span>Blog</span></a></td>
                  </tr>
                  </tbody>
                </table>	
              </div>
        )
    }
}

export default Follow;