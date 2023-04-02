import React from "react";
import "animate.css";

export const ErrorAlert = (props) => {
	const { emoji, message } = props;

	const toolStepStyle = {
		backgroundColor: "#ffd0d0",
		padding: "1.5rem",
		borderRadius: "0.5rem",
		margin: "1rem 0rem",
		lineHeight: "0",
		height: "2rem",
	};

	return (
		<div style={toolStepStyle}>
			<div className="d-flex flex-column">
				<div style={{ display: "flex", gap: "0.5rem" }}>
					<p className="animate__animated animate__infinite animate__slow animate__tada">{emoji}</p>
					<p style={{color: "red"}}>{message}</p>
				</div>
			</div>
		</div>
	);
};
