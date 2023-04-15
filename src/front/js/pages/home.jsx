import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { ToolStep } from "../component/ToolStep.jsx";

export const Home = () => {
	const { store } = useContext(Context);
	const { authentication } = store;

	const centralContainerStyle = {
		backgroundColor: "white",
		height: "100%",
		borderRadius: "0.5rem",
		margin: "auto",
		padding: "2rem",
	};

	return (
		<div className="container-fluid">
			<div className="container-xxl col-xxl-6 container col-12" style={centralContainerStyle}>
				<p className="section-title">Welcome to the Authentication System</p>
				<p>
					If this is your first time, you have to register on our platform in order to test the authentication system
					and access the private section.
				</p>
				<p>You can follow these steps:</p>
				<div className="d-flex flex-column gap-3">
					<ToolStep
						emoji={"✍️"}
						title={"Sign in"}
						content={"To register, you only have to access the form and fill in your email address and password."}
						buttonLabel={"Sign in"}
						buttonPath="/signup"
					/>
					<ToolStep
						emoji={"🔑"}
						title={"Log in"}
						content={
							"Once registered, you must log in. To go to the login form you will need to click on the Log in button. Once authenticated, your username should appear in the navigation bar."
						}
						buttonLabel={"Log in"}
						buttonPath="/login"
					/>
					<ToolStep
						emoji={"🔐"}
						title={"Try to open the private component"}
						content={
							"If you are successfully authenticated, you will be able to access the secret component by clicking on the button below. 😱"
						}
						buttonLabel={"Try it"}
						buttonPath={authentication.status ? "/private" : "/error"}
					/>
				</div>
			</div>
		</div>
	);
};
