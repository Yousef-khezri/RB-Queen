import "./Header.css";
import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/"); // آدرس مقصد را مشخص کنید
	};

	return (
		<div className="header">
			<img
				src="./images/logo.png"
				className="img_Logo"
				alt="Company Logo"
				onClick={handleClick}
			/>
			<Navbar />
		</div>
	);
}

/* rfc */
