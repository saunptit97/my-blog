import React from "react";
import slider1 from "./../photos/slider1.jpg";
import slider2 from "./../photos/slider2.jpg";
class Slider extends React.Component{
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                
                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={slider1} style={{height: 400}} alt="Slider 1"/>
                    </div>

                    <div className="item">
                        <img src={slider2} style={{height: 400}}  alt="Slider 2"/>
                    </div>
                    
                    <div className="item">
                        <img src={slider1} style={{height: 400}} alt="Slider 3"/>
                    </div>
                    </div>

            
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
        )
    }
}

export default Slider;