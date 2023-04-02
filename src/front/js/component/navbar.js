import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<h1 className="navbar-brand brand-name mb-0">Authentication System</h1>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-ctm-primary">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
