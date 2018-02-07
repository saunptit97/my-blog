import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import TableContent from "./TableContent";
export default class JavaScriptTable extends Component{
    constructor(props){
        super(props);
        this.state ={
            javascript : []
        }
    }
    componentDidMount(){
        callAPI("/javascript", "GET", null).then(res=>{
            this.setState({
                javascript: res.data
            })
        })
    }
    onDelete = e =>{
        callAPI(`javascript/${e}`, "DELETE", null).then(res =>{
            console.log(res.data);
        })
        var javascript = this.state.javascript;
        var index = this.findIndex(javascript, e);
        javascript.splice(index,1);
        this.setState({
            javascript: javascript
        })
    }
    findIndex = (posts , id) =>{
        var res = -1;
        posts.forEach( (post, index) => {
            if(post.id===id) return res = index;
        });
        return res;
    }
    showContent = (javascript) =>{
        var res = javascript.map((content, index)=>{
            return <TableContent content = {content} key = {index} onDelete={this.onDelete}/>
        })
        return res;
    }
    render(){
        var{ javascript} = this.state;
        return(
            <div className="tb-content">
            <div className="panel panel-default">
                <h4 className="panel-heading">Data of javascript</h4>
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
                            {this.showContent(javascript)}
                        </tbody>
                    </table>
                </div>		
            </div>
        </div>
        )
    }
}