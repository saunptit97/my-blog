import React ,{Component} from "react";
import about from "./../photos/about.jpg";
class About extends Component{
    render(){
        return(
            <div className="about-me">
                <h2 className="about-title">About me</h2>
                <img src={about} alt="About"/>
                <p>Months had too ham cousin remove far spirit. She procuring the why performed continual improving.</p>
                <a href="">Read more</a>
            </div>
        )
    }
}
export default About;