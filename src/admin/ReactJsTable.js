import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import TableContent from "./TableContent";

export default class ReactJsTable extends Component{
    constructor(props){
        super(props);
        this.state ={
            reactjs : [],
            id: ''
        }
    }
    componentDidMount(){
        callAPI("/reactjs", "GET", null).then(res=>{
            this.setState({
                reactjs: res.data
            })
        })
        var {id} = this.state;
        console.log(id);
    }
    onDelete = (e) =>{
        callAPI(`reactjs/${e}`, "DELETE", null).then(res =>{
            console.log(res.data);
        })
        var reactjs = this.state.reactjs;
        var index = this.findIndex(reactjs, e);
        reactjs.splice(index,1);
        this.setState({
            reactjs: reactjs
        })
    }
    onEdit = e =>{
        console.log(e);
    }
    showContent = (reactjs) =>{
        var res = reactjs.map((content, index)=>{
            return <TableContent content = {content} key = {index} onDelete={this.onDelete} onEdit = {this.onEdit}/>
        })
        return res;
    }
    findIndex = (posts , id) =>{
        var res = -1;
        posts.forEach( (post, index) => {
            if(post.id===id) return res = index;
        });
        return res;
    }
    render(){
       var {reactjs} = this.state;
        return(
            <div className="tb-content">
            <div className="panel panel-default">
                <h4 className="panel-heading">Data of ReactJS</h4>
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
                            {this.showContent(reactjs)}
                        </tbody>
                    </table>
                </div>		
            </div>
        </div>
        )
    }
}