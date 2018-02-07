import React from "react";
import port2 from "./../photos/port2.jpg";
import callAPI from "./../util/callAPI";
import {Link} from "react-router-dom";
class ContentItem extends React.Component{

    render(){
        var {content} = this.props;
        return(
            <div className="ct">
                <h3 className="categories">{content.category}</h3>
                <span className="underline"></span>
                <h2 className="title">{content.title}</h2>
                <p className="by">BY {content.by} - {content.time}</p>
                
                <p className="content">
                  {content.description}
                </p>
                <img src={port2} className="img-port" alt="Port 2"/>
                <p className="pd-t-10">{content.content}</p>
                <div className="comment">
                  <i className="fa fa-comment-o"></i> <span>16 comments</span>
                  <div className="share">
                    <span>share: </span>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-google-plus"></i>
                  </div>
                </div>
                <div className="next-post">
                  <Link to={`content/id=${content.id -1}&&category=${content.category}`} >Next <i className="fa fa-angle-double-right"/></Link>
                </div>
                <div className="row">
                  <h2 className="also-like text-center">You might also like</h2>
                  <p className="line"></p>
                  <div className="col-md-4 ">   
                    <div className="also-like-item">
                      <img src={port2} className="img-item" alt="post"/>
                      <h5 className="title-item">Title</h5>
                    </div>
                  </div>
                  <div className="col-md-4 ">   
                    <div className="also-like-item">
                      <img src={port2} className="img-item" alt="post"/>
                      <h5 className="title-item">Title</h5>
                    </div>
                  </div>
                  <div className="col-md-4 ">   
                    <div className="also-like-item">
                      <img src={port2} className="img-item" alt="post"/>
                      <h5 className="title-item">Title</h5>
                    </div>
                  </div>
                </div>
                <div className="comment-bot">
                  <h2 className="title-comment"><span>1</span> Comments</h2>
                  <p className="line"></p>
                  <div className="comments">
                    <div className="comment">
                    <p className="cm-by">Sau nguyen</p>
                    <p className="time-cm">23:46:00 - 2/1/2008</p>
                    <p className="cm">Hay</p>
                    </div>
                  </div>
              <form className="scroll">
                <div className="createComment">
                  <li><textarea className="comment" className="form-control" placeholder="Enter your comment..."></textarea></li>
                  <br/>
                  <li>Comment as: 
                    <select>
                      <option>Google</option>
                      <option>TypeID</option>
                      <option>Wordpress</option>
                    </select>
                    <button>Sign out</button>
                  </li>
                 
                </div>
                <div className="bottom-comment">
                    <button  type="submit" name="post" className="primary">Comment</button>&nbsp;
                    <button  type="reset">Reset</button>
                </div>
              </form>
            </div>



                </div>
          
              
        )
    }
}
export default ContentItem;