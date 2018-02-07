import React from "react";
import port2 from "./../photos/port2.jpg";
import callAPI from "./../util/callAPI";
import {Link} from "react-router-dom";
class ContentPage extends React.Component{

    render(){
        var {content} = this.props;
        return(
            <div className="ct">
                <h2 className="title">{content.title}</h2>
                <p className="by">BY {content.by} - {content.time}</p>
                <img src={port2} className="img-port" alt="Port 2"/>
                <p className="content">
                  {content.description}
                </p>
                <Link  to={`content/id=${content.id}&&category=${content.category}`}  className="text-center continue-reading">Continue reading</Link>
                <div className="comment">
                  <i className="fa fa-comment-o"></i> <span>16 comments</span>
                  <div className="share">
                    <span>share: </span>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-google-plus"></i>
                  </div>
                </div>
              </div>
        )
    }
}
export default ContentPage;