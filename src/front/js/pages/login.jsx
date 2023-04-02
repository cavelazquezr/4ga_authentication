import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorAlert } from "../component/ErrorAlert.jsx";

export const Login = () => {
	const [form, setForm] = useState({});
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [error, setError] = useState({
		status: false,
		message: "",
	});

	useEffect(() => {
		if (form.password && form.email) {
			if (form.email.length && form.password.length && !error.status) {
				setButtonIsDisabled(false);
			} else {
				setButtonIsDisabled(true);
			}
		}
	}, [form]);

	const handleInputChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleBlurPassword = () => {
		const { password } = form;
		if (!password.length) {
			setError({
				...error,
				status: true,
				message: "Please type your password",
				inputErrors: {
					...error.inputErrors,
					password: true,
					confirm_password: true,
				},
			});
			return;
		}
		setError({
			...error,
			status: false,
			message: "",
			inputErrors: {
				...error.inputErrors,
				password: false,
				confirm_password: false,
			},
		});
	};

	const handleBlurEmail = () => {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setError({
				...error,
				status: true,
				message: "Your email doesn't have the correct format",
				inputErrors: {
					...error.inputErrors,
					email: true,
				},
			});
			return;
		}
		setError({
			...error,
			status: false,
			message: "",
			inputErrors: {
				...error.inputErrors,
				email: false,
			},
		});
	};

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
			<div className="container col-6" style={centralContainerStyle}>
				<Link to={"/"} style={goBackStyle}>
					<i className="fa-solid fa-arrow-left"></i>
					Go back to dashboard
				</Link>
				<p className="section-title">Log in to our platform</p>
				<p>Please fill in the form with your account details.</p>
				{error.status && Object.values(error.inputErrors).some((it) => it == true) && (
					<ErrorAlert emoji={"👉"} message={error.message} />
				)}
				<div className="mb-3">
					<label htmlFor="email" className="form-label input-label">
						Email address
					</label>
					<input
						type="email"
						className={`form-control ${error.inputErrors && error.inputErrors.email ? "is-invalid" : null}`}
						id="email"
						onChange={handleInputChange}
						onBlur={handleBlurEmail}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label input-label">
						Password
					</label>
					<input
						type="password"
						className={`form-control ${error.inputErrors && error.inputErrors.password ? "is-invalid" : null}`}
						id="password"
						onChange={handleInputChange}
						onBlur={handleBlurPassword}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-ctm-primary" disabled={buttonIsDisabled}>
						Log in
					</button>
				</div>
			</div>
		</div>
	);
};
