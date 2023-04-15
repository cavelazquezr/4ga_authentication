import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AuthenticationIndicator } from "./AuthenticationIndicator.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const { authentication } = store

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<h1 className="navbar-brand brand-name mb-0">Authentication System</h1>
				<div className="ml-auto h-100 d-flex gap-2">
					<AuthenticationIndicator />
					{authentication.status && <button className="btn btn-ctm-primary col-4" onClick={actions.logout}>Log out</button>}
				</div>
			</div>
		</nav>
	);
};
