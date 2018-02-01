import React from"react";

import ScrollToTop from "react-scroll-up";
import SendEmail from "./SendEmail";
class Footer extends React.Component{
    render(){
        return(
            <div className="footer text-center">
          <h2>NEWSLETTER </h2>
          <p>Get updates on my life, and be the first to get exlusive offers</p>
          <SendEmail />
          <p className="by1 text-center">create by <i className="fa fa-heart"> </i> Sau nguyen</p>
          <ScrollToTop showUnder={160}>
            <span id="myBtn"><i className="fa fa-arrow-up"></i> </span>
          </ScrollToTop>
        </div>
        )
    }
}
export default Footer;