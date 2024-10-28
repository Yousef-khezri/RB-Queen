import "./Header.css";
import React from "react";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<div className="header">
			<img
				src="./images/logo.png"
				className="img_Logo"
				alt="Company Logo"
			/>
			<Navbar />
		</div>
	);
}

/* rfc */
