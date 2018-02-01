import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import ContentPage from "./../components/ContentPage";
import Banner from "./../components/Banner"
class JavaScriptPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            javascript: []
        }
    }
    componentWillMount(){
        callAPI("javascript","GET", null).then(res =>{
            var length = res.data.length;
            var {javascript} = this.state;
            for(var i = length -1 ; i >= length -1 -3 && i>=0 ; i--){
               javascript.push(res.data[i])
            }
            this.setState({
                javascript: javascript
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
        var {javascript} = this.state;
        return(
            <div className="container m-t">
               
                <div className="row">
                    <div className="col-md-8"> 
                        <h3 className="categories">javascript</h3>
                        <span className="underline"></span>
                        {this.showContent(javascript)}
                    </div>
                    <div className="col-md-4">
                        <Banner />
                    </div>
                </div>
            </div>
        
        )
    }
}
export default JavaScriptPage;