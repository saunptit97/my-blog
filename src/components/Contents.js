import React from "react";
import callAPI from "./../util/callAPI";
import ContentItem from "./ContentItem";
import {connect} from "react-redux";
class Contents extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      angularjs: "",
      reactjs :"",
      javascript: ""
    }
  }
  componentWillMount(){ 
   callAPI("reactjs","GET", null).then(res =>{
     var length = res.data.length;
     this.setState({
        reactjs : res.data[length-1]
     })
   })
  
   callAPI("javascript","GET", null).then(res =>{
    var length = res.data.length;
    this.setState({
      javascript : res.data[length-1]
   })
  })
  callAPI("angularjs","GET", null).then(res =>{
    var length = res.data.length;
    this.setState({
      angularjs : res.data[length-1]
   })
  })
}
    render(){
        var {angularjs, reactjs, javascript} = this.state;
        return(
            <div>
             { angularjs !=='' ?<ContentItem content ={angularjs} /> : '' }
             { reactjs !=='' ?<ContentItem content ={reactjs} /> : '' }
             { javascript !=='' ?<ContentItem content ={javascript} /> : '' }
            </div>
        )
    }
  
}
var mapStateToProps = (state) =>{
  return{
    posts: state.listpost
  }
}
export default connect(mapStateToProps, null)(Contents);