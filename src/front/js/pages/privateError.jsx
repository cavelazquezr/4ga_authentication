import React from "react";
import { Link } from "react-router-dom";

export const PrivateError = () => {
	const centralContainerStyle = {
		backgroundColor: "white",
		height: "100%",
		borderRadius: "0.5rem",
		margin: "auto",
		padding: "2rem",
	};

	const goBackStyle = {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
		textDecoration: "none",
		marginBottom: "0.85rem",
		color: "#8f8f8f",
		_onHover: {
			color: "#000", // Change the text color to black
			textDecoration: "underline", // Add an underline to the text
		},
	};

	return (
		<div className="container-fluid">
			<div className="container-xxl col-xxl-6 container col-12" style={centralContainerStyle}>
				<Link to={"/"} style={goBackStyle}>
					<i className="fa-solid fa-arrow-left"></i>
					Go back to dashboard
				</Link>
				<p className="section-title">Ops!</p>
				<p>Looks like you are not authenticated. Go back to dashboard and log in.</p>
			</div>
		</div>
	);
};
