import "./Footer.css";
import React from "react";

export default function Footer() {
	return (
		<div className="footer">
			<div className="box_one">
				<div className="company">
					<div className="company_logo">
						<img
							className="footer_logo"
							src="./images/footer_logo.png"
							alt="RB Queen Logo"
						/>
						<h2>RB Queen GmbH</h2>
					</div>
					<span className="span_company">
						Wir legen großen Wert auf Sicherheit und
						Zuverlässigkeit. Deshalb vertrauen uns bereits tausende
						Kunden ihre Räumlichkeiten an. Lassen Sie uns auch Ihr
						Hotel mit höchstem Standard betreuen.
					</span>
				</div>

				<div className="Contact_us">
					<h3>Kontaktieren Sie uns</h3>
					<div className="address">
						<img
							className="icon"
							src="./images/icon_location.png"
							alt="address icon"
						/>
						<span>Köln</span>
					</div>
					<div className="email">
						<img
							className="icon"
							src="./images/email.png"
							alt="email icon"
						/>
						<span>test@example.com</span>
					</div>
					<div className="telephone">
						<img
							className="icon"
							src="./images/telephone.png"
							alt="telephone icon"
						/>
						<span>+49 162 612 8090</span>
					</div>
				</div>

				<div className="social-media">
					<img src="./images/facebook.png" alt="Facebook" />
					<img src="./images/twitter.png" alt="Twitter" />
					<img src="./images/instagram.png" alt="Instagram" />
					<img src="./images/linkedin.png" alt="LinkedIn" />
				</div>
			</div>

			<div className="box_two">
				<div>Nutzungsbedingungen</div>
				<div>Datenschutzrichtlinie</div>
				<div>
					Urheberrecht © 2024 RB Queen. Alle Rechte vorbehalten.
				</div>
			</div>
		</div>
	);
}
