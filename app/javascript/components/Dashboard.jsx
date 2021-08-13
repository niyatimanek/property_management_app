import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			isLoggedIn: false
		}
	}

	componentDidMount(){
		const url = '/logged_in';
		fetch(url)
			.then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
   		    	const data = isJson && await response.json();
				if (data.logged_in) {
					this.setState({ user: data.user, isLoggedIn: data.logged_in} )
				}else{
					this.props.history.push("/")
				}
			})
			.catch(() => this.props.history.push("/"))
	}

	render(){
		const userParams = this.state.user;
		return(
			<div className="container">
				<Header loggedIn={this.state.isLoggedIn} user={this.state.user}/>
				<h3>{`Welcome, ${userParams.first_name} ${userParams.last_name}`}</h3>
				<Link
			        to="/superAdminDashboard"
		            className="btn btn-lg custom-button"
		         	role="button"
			    >
		        	Go to Super Admin Dashboard
		       	</Link>
			</div>
		);
	}
}

export default Dashboard;