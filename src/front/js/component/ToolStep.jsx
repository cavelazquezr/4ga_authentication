import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

export const ToolStep = (props) => {
	const { emoji, title, content, buttonLabel, buttonPath } = props;

	const toolStepStyle = {
		backgroundColor: "#b7ebeb",
		padding: "1rem",
		borderRadius: "0.5rem",
		margin: "auto",
	};

	return (
		<div className="container-xxl col-xxl-10 container col-12" style={toolStepStyle}>
			<div className="d-flex flex-column">
				<div className="d-flex align-middle gap-2 h-100">
					<p className="toolstep-title animate__animated animate__infinite animate__slow animate__tada">{emoji}</p>
					<p className="toolstep-title">{title}</p>
				</div>
				<p>{content}</p>
				<Link to={buttonPath} className="d-flex justify-content-center" style={{textDecoration: "none"}}>
					<button className="btn btn-ctm-primary col-4">{buttonLabel}</button>
				</Link>
			</div>
		</div>
	);
};
