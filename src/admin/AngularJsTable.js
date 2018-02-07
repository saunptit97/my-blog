import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import TableContent from "./TableContent";
export default class AngularJsTable extends Component{
    constructor(props){
        super(props);
        this.state ={
            angularjs : []
        }
    }
    componentDidMount(){
        callAPI("/angularjs", "GET", null).then(res=>{
            this.setState({
                angularjs: res.data
            })
        })
    }
    onDelete = e =>{
        // callAPI(`angularjst/${e}`, "DELETE", null).then(res =>{
        //     console.log(res.data);
        // })
        var angularjs = this.state.angularjs;
        var index = this.findIndex(angularjs, e);
        angularjs.splice(index,1);
        this.setState({
            angularjs: angularjs
        })
    }
    findIndex = (posts , id) =>{
        var res = -1;
        posts.forEach( (post, index) => {
            if(post.id===id) return res = index;
        });
        return res;
    }
    showContent = (angularjs) =>{
        var res = angularjs.map((content, index)=>{
            return <TableContent content = {content} key = {index} onDelete= {this.onDelete}/>
        })
        return res;
    }
    render(){
        var{ angularjs} = this.state;
        return(
            <div className="tb-content">
            <div className="panel panel-default">
                <h4 className="panel-heading">Data of Angularjs</h4>
                <div className="row">
                <div className="col-md-8"></div>
                <div className="input-group">
                        <input type="text" name="search"
                        className="form-control" 
                        placeholder="Search ..." 
                        />
                        <span className="input-group-btn">
                        <button
                        className="btn btn-default"
                        >
                            <i className="fa fa-search"></i>
                        </button>	
                        </span>
                    </div>
                </div>
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th width="10%">ID</th>
                                <th width="30">Name</th>
                                <th width="20%">Author</th>
                                <th width="20%">Time</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>	
                            {this.showContent(angularjs)}
                        </tbody>
                    </table>
                </div>		
            </div>
        </div>
        )
    }
}