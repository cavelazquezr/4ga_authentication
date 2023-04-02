import React from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

export const Private = () => {
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

	const videoOptions = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			controls: 0,
		},
	};

	return (
		<div className="container-fluid">
			<div className="container col-6" style={centralContainerStyle}>
				<Link to={"/"} style={goBackStyle}>
					<i className="fa-solid fa-arrow-left"></i>
					Go back to dashboard
				</Link>
				<p className="section-title">Congratulations!</p>
				<p>Now that you have authenticated yourself, you will be rickrolled.</p>
				<YouTube videoId={"dQw4w9WgXcQ"} opts={videoOptions} />
			</div>
		</div>
	);
};
