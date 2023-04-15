import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const AuthenticationIndicator = () => {
	const { store, actions } = useContext(Context);
	const { authentication } = store;

	useEffect(() => {
		actions.login();
	}, []);

	return (
		<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
			{authentication.status ? (
				<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					<i className="fa-solid fa-lock-open" style={{ color: "green" }} />
					<p style={{ color: "green", height: "100%", width: "10rem", margin: "auto" }}>{`Authenticated as ${
						authentication.currentUser && authentication.currentUser.firstname
					}`}</p>
				</div>
			) : (
				<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					<i className="fa-solid fa-lock" style={{ color: "red" }} />
					<p style={{ color: "red", height: "100%", width: "10rem", margin: "auto" }}>Not authenticated</p>
				</div>
			)}
		</div>
	);
};
