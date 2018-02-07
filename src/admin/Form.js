import React , {Component} from "react";
import callAPI from "../util/callAPI";
import {
	Link
} from "react-router-dom";
export default class Form extends Component{
	constructor(props){
		super(props);
		this.state ={
			id: '',
			title : '',
			category: '',
			description: '',
			content: '',
			img: '',
			by: '',
			time: ''
		}
	}
	handleChange = (e) =>{
		var target = e.target;
		var name = target.name;
		var value = target.value;
		this.setState({
			[name] : value
		})
	}
	componentDidMount(){
		var {match} = this.props;
		if(match){
			var data = match.params;
			callAPI(`${data.category}/${data.id}`, "GET", null).then(res=>{
				console.log(res);
				this.setState({
					id: res.data.id,
					title : res.data.title,
					category: res.data.category,
					description: res.data.description,
					content: res.data.content,
					by: res.data.by,
					time:res.data.time
				})
			})
		}
	}
	handleSubmit = (e)=>{
		e.preventDefault();
		var {category , title, description, content, img, by, time, id} = this.state;
		time = new Date();
		this.setState({
			time: time
		})
		var {history} = this.props;
		var {match} = this.props;
		if(match){
			callAPI(`${category}/${id}`, "PUT", {
				id :id ,
				title : title, 
				category: category,
				description : description,
				content: content,
				img: img,
				by: by,
				time: time
			}).then(res=>{
				console.log(res);
				history.push(`table-${category}`);
			})
		}else{                                                                                                                            
			callAPI(`${category}`, "POST", {
				title : title, 
				category: category,
				description : description,
				content: content,
				img: img,
				by: by,
				time: time
			}).then(res=>{
				history.push(`table-${category}`);
			})
		}
	}
    render(){
		var {category} = this.state;
		var {match} = this.props;
        return(

            <div className="form">
					<div className="panel panel-default">
						<h3 className="panel-heading">{match? 'Update Content' : 'Add Content'}</h3>
						<form onSubmit={this.handleSubmit}>
						<div className="row panel-body">
							<div className="col-md-6">
						
								<label>
									Title:
								</label>
								<input 
									type="text" 
									name="title" 
									className="form-control" 
									placeholder="Enter text" 
									value={this.state.title} 
									onChange={this.handleChange}
									required
								/>
								<label>Category:</label>
								<select 
									className="form-control" 
									name="category" 
									value = {this.state.category} 
									onChange={this.handleChange}
									required
								>
									<option>Select</option>
									<option value="reactjs">Reactjs</option>
									<option value="angularjs">AngularJS</option>
									<option value="javascript">JavaScript</option>
								</select>
								<label>Description:</label>
								<textarea 
									placeholder="Enter description" 
									className="form-control" 
									rows="5" 
									name="description" 
									value={this.state.description} 
									onChange={this.handleChange}
									required
								></textarea>
								<label>File Image:</label>
								<input type="file" name="file-image"/>
								<button className="btn btn-default post" type="submit" >{match ? 'Update': 'Post'}</button>
							<button className="btn btn-default reset">Reset</button>
							</div>
							<div className="col-md-6">
								<label>Content:</label>
								<textarea 
									placeholder="Enter content" 
									rows="10" 
									className="form-control txt-content" 
									name="content" 
									value={this.state.content} 
									onChange={this.handleChange}
									required
								></textarea>
								<label>Author</label>
								<select 
									className="form-control" 
									name="by" 
									value={this.state.by} 
									onChange={this.handleChange}
									required
								>
									<option>Select</option>
									<option value="saunguyen">Sau Nguyen</option>
									<option value="hannguyen">Han Nguyen</option>
									<option value="minhnguyen">Minh Nguyen</option>
								</select>
							</div>
						</div>
						</form>
					</div>
				</div>
        )
    }
}