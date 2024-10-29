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
					<p className="span_company">
						Deshalb vertrauen uns bereits zahlreiche Kunden aus
						verschiedenen Branchen ihre Räumlichkeiten an, von
						Hotels über Büros bis hin zu Privathaushalten und
						Gesundheitseinrichtungen. Lassen Sie uns auch Ihr Hotel,
						Büro oder Zuhause mit höchstem Standard und
						erstklassigem Service betreuen.
					</p>
				</div>

				<div className="Contact_us">
					<h3>Kontaktieren Sie uns</h3>
					<div className="address">
						<img
							className="icon"
							src="./images/icon_location.png"
							alt="address icon"
						/>
						<span>Koblenzer Str. 65, 53173 Bonn</span>
					</div>
					<div className="email">
						<img
							className="icon"
							src="./images/email.png"
							alt="email icon"
						/>
						<span>info@rb-reinigungsservice.de</span>
					</div>
					<div className="telephone">
						<img
							className="icon"
							src="./images/telephone.png"
							alt="telephone icon"
						/>
						<span>+49 174 973 6994</span>
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
