import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import Banner from "../components/Banner";
import ContentPage from "../components/ContentPage";
class ReactJsPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            reactjs: []
        }
    }
    componentWillMount(){
        callAPI("reactjs","GET", null).then(res =>{
            var length = res.data.length;
            var {reactjs} = this.state;
            for(var i = length -1 ; i >= length -1 -3 && i>=0 ; i--){
               reactjs.push(res.data[i])
            }
            this.setState({
                reactjs: reactjs
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
        var {reactjs} = this.state;
        return(
            <div className="container m-t">
               
                <div className="row">
                    <div className="col-md-8"> 
                        <h3 className="categories">ReactJS</h3>
                        <span className="underline"></span>
                        {this.showContent(reactjs)}
                    </div>
                    <div className="col-md-4">
                        <Banner />
                    </div>
                </div>
            </div>
        
        )
    }
}
export default ReactJsPage;