import React from "react"
import "./css/util.css";
import "./css/main.css";
import {
	 Redirect
}from"react-router-dom"

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			user: '',
			pass:'',
			isDisplay: false
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
	handleSubmit = () =>{
		var {user, pass} = this.state;
		if(user ==='admin' && pass ==='admin'){
			localStorage.setItem('user', JSON.stringify({
				user: user,
				pass: pass
			}))
			this.setState({
				isDisplay: true
			})
		}
		
	}
	render(){
		var data = localStorage.getItem('user');
		var {isDisplay} = this.state;
		if(data===null || isDisplay === false){
			//return <Prompt when ={true} message="The password that you've entered is incorrect" />
		}
		else{
			return <Redirect to="/admin" />
		}
        return(
            <div>
                <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={this.handleSubmit}>
					<span className="login100-form-title p-b-10">
						Welcome
					</span>
					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="user" placeholder="User" onChange={this.handleChange}/>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password" onChange={this.handleChange}/>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type="submit">
								Login
							</button>
						</div>
					</div>

					
				</form>
			</div>
		</div>
	</div>
	

	        </div>
        )
    }
}