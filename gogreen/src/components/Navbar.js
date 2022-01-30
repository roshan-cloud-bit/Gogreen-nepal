import React, { Component } from "react";
import Image1 from '../assets/images/logo00.png';
import Image2 from '../assets/images/logo01.png';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<img src={Image1} alt="logo" style={{width:'50px', height:'60px', marginLeft:'2%'}}/>
				<img src={Image2} alt="logo" style={{width:'50px', height:'60px'}}/>

				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href="/register">Register</a></li>
					<li><a href="/login">Login</a></li>
					<li><a href="/aboutus">About Us</a></li>
					<li><a href="/list">List</a></li>
					<li><a href="/contactus">Contact</a></li>
				</ul>
			</div>
		);
	}
}

export default Navbar;