import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import Banner from "../components/Banner";
import ContentPage from "../components/ContentPage";
class AngularJsPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            angularjs: []
        }
    }
    componentWillMount(){
        callAPI("angularjs","GET", null).then(res =>{
            var length = res.data.length;
            var {angularjs} = this.state;
            for(var i = length -1 ; i >= length -1 -3 && i>=0 ; i--){
               angularjs.push(res.data[i])
            }
            this.setState({
                angularjs: angularjs
            })
          })
          
    }
    showContent = contents =>{
        var res = null;
        if(contents.length >0){
            res = contents.map((content , index)=>{
                return <ContentPage content ={content} key = {index} />
            })
            return res;
        }
        return res;
    }
    render(){
        var {angularjs} = this.state;
        return(
            <div className="container m-t">
               
                <div className="row">
                    <div className="col-md-8"> 
                        <h3 className="categories">angularjs</h3>
                        <span className="underline"></span>
                        {this.showContent(angularjs)}
                    </div>
                    <div className="col-md-4">
                        <Banner />
                    </div>
                </div>
            </div>
        
        )
    }
}
export default AngularJsPage;