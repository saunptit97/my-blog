import React , {Component} from "react";
import{
    Link
}from "react-router-dom";
import TableContent from "./TableContent";
class Table extends Component{
    render(){
        return(
            <div className="tb-content">
					<div className="panel panel-default">
                        <Link onClick={this.removeLocal} to="/login">Login</Link>
						<h4 className="panel-heading">Data of ReactJS</h4>
						<div className="row">
						<div className="col-md-8"></div>
						<div className="input-group pr-40">
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
									<TableContent/>
								</tbody>
							</table>
						</div>		
					</div>
				</div>
        )
    }
}
export default Table;