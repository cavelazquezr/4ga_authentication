import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ErrorAlert } from "../component/ErrorAlert.jsx";

import { createUser } from "../services/user.js";

export const Signup = () => {
	const [form, setForm] = useState({});
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
	const [error, setError] = useState({
		status: false,
		message: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (form.password && form.confirm_password) {
			if (
				form.password === form.confirm_password &&
				form.password.length &&
				form.confirm_password.length &&
				!error.status
			) {
				setButtonIsDisabled(false);
			} else {
				setButtonIsDisabled(true);
			}
		}
	}, [form]);

	const handleClick = async (e) => {
		e.preventDefault();
		createUser(form);
		navigate("/");
		toast.success("Registro exitoso😎");
	};

	const handleInputChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleBlurPassword = () => {
		const { password } = form;
		if (password.length < 8) {
			setError({
				...error,
				status: true,
				message: "Your password must contain at least 8 characters.",
				inputErrors: {
					...error.inputErrors,
					password: true,
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
			},
		});
	};

	const handleBlurLastInput = () => {
		const { firstname, lastname, email, password, confirm_password } = form;
		if (password !== confirm_password) {
			setError({
				...error,
				status: true,
				message: "Passwords do not match",
				inputErrors: {
					...error.inputErrors,
					password: true,
					confirm_password: true,
				},
			});
			return;
		}
		if (!firstname || !lastname || !email || !password) {
			setError({ ...error, status: true, message: "Please fill in all fields" });
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
			<div className="container-xxl col-xxl-6 container col-12" style={centralContainerStyle}>
				<Link to={"/"} style={goBackStyle}>
					<i className="fa-solid fa-arrow-left"></i>
					Go back to dashboard
				</Link>
				<p className="section-title">Create your account</p>
				<p>Please fill in the inputs to create your account.</p>
				{error.status && <ErrorAlert emoji={"👉"} message={error.message} />}
				<div className="mb-3">
					<label htmlFor="firstname" className="form-label input-label">
						First name
					</label>
					<input type="text" className="form-control" id="firstname" onChange={handleInputChange} />
				</div>
				<div className="mb-3">
					<label htmlFor="lastname" className="form-label input-label">
						Last name
					</label>
					<input type="text" className="form-control" id="lastname" onChange={handleInputChange} />
				</div>
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
				<div className="mb-3">
					<label htmlFor="confirm_password" className="form-label input-label">
						Confirm Password
					</label>
					<input
						type="password"
						className={`form-control ${error.inputErrors && error.inputErrors.confirm_password ? "is-invalid" : null}`}
						id="confirm_password"
						onChange={handleInputChange}
						onBlur={handleBlurLastInput}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button className="btn btn-ctm-primary" disabled={buttonIsDisabled} onClick={handleClick}>
						Create Account
					</button>
				</div>
			</div>
		</div>
	);
};
