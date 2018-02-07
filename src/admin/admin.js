import React , {Component} from "react"
import {
    Redirect, Link, Route , Switch , BrowserRouter
}from "react-router-dom";
import "./admin.css";
import routes from "./routes";
export default class Admin extends Component{
	constructor(props){
		super(props);
		this.state = {
			admin : ''
		}
	}
	componentDidMount(){
		this.setState({
			admin:localStorage.getItem('user')
		})
	}
    removeLocal(){
		localStorage.removeItem("user");
		this.setState({
			admin: null
		})
    }
    showRoutes = (routes) =>{
        var res = null;
        res = routes.map((route , index) =>{
            return <Route exact = {route.exact} path={route.path} key = {index} component={route.main}/>
        })
        return <Switch>{res}</Switch>
    }
    render(){
		var {admin} = this.state;
	   if(admin === null) return <Redirect to="/login"/>
        return (
            <BrowserRouter>
            <div className="container-fluid">
		        <div className="row">
			<nav className="menu-header">
				<ul>
					<li><a href="">Logo</a></li>
					<li><a href=""><i className="fa fa-envelope"></i> <i className="fa fa-angle-down"></i></a></li>
					<li><a href=""><i className="fa fa-bars"></i> <i className="fa fa-angle-down"></i></a></li>
					<li><a href=""><i className="fa fa-bell"></i> <i className="fa fa-angle-down"></i></a></li>
					<li><a href=""><i className="fa fa-user"></i> <i className="fa fa-angle-down"></i></a></li>
					<li><Link onClick={this.removeLocal} to="/login"><i className="fa fa-sign-out"/></Link></li>
				</ul>
			</nav>
			<div className="col-md-2 admin-left">
				<nav>
					<ul>
						<li>
							<div className="input-group search-input">
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
						</li>
						<Link to="/admin"><li><i className="fa fa-dashboard"> Dashboard </i></li></Link>
						<li><a href=""><i className="fa fa-bar-chart-o"
							/> Charts</a></li>
						<li className="toggle"><a href=""><i className="fa fa-table"/> Table</a> <i className="fa fa-angle-down pl-20"/>
							<ul>
                                <Link to="/table-reactjs"><li>ReactJS</li></Link>
                                <Link to="/table-javascript"><li>JavaScript</li></Link>
                                <Link to="/table-angularjs"><li>AngularJS</li></Link>
							</ul>
						</li>
						<li><Link to="/form"><i className="fa fa-table"/> Forms</Link></li>
					</ul>
				</nav>
			</div>
			<div className="col-md-10 admin-right">
			{this.showRoutes(routes)}
			</div>
		</div>
	</div>
    </BrowserRouter>
        )
    }
}