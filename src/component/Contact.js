import "./Contact.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // ---------------- Filter Text fields ---------------------------- //
	const handleMessageChange = (e) => {
		const value = e.target.value;

		// الگوی برای شناسایی کدهای HTML
		const htmlPattern = /<.*?>/;

		// اگر ورودی شامل کدهای HTML باشد، آن را نپذیرید
		if (htmlPattern.test(value)) {
			alert("Bitte keine HTML-Tags eingeben."); // پیام هشدار
			return;
		}

		// بروزرسانی وضعیت پیام
		setMessage(value);
	};
    // ----------------------------------------------------------------- //

    // ---------------- Send email to server --------------------------- //
    const handleSendEmail = (e) => {
		e.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه

		// بررسی خالی بودن فیلدها
		if (!email || !phone || !message) {
			alert("Bitte füllen Sie alle Pflichtfelder aus.");
			return;
		}

		const templateParams = {
			from_name: email, // $$$ نام فرستنده
			phone_number: phone, // $$$ شماره تلفن
			message: message, // $$$ پیام
		};

		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID, // نام متغیر محیطی برای service_id
				process.env.NEXT_PUBLIC_TEMPLATE_ID, // نام متغیر محیطی برای template_id
				templateParams,
				process.env.NEXT_PUBLIC_USER_ID // نام متغیر محیطی برای user_id
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					setEmail("");
					setPhone("");
					setMessage("");
					alert("Nachricht erfolgreich gesendet!");
				},
				(err) => {
					console.log("FAILED...", err);
					alert("Fehler beim Senden der Nachricht.");
				}
			);
	};
    // ----------------------------------------------------------------- //

	return (
		<div className="main_Contact">
			{/* ------------------ Send box contact -------------------------------------- */}
			<div className="Send_box_Text">
				<img
					className="img_contact_us"
					src="./images/email-contact.webp"
					alt="contact us"
				/>
				<div className="right_Box">
					<h1>Kontaktieren Sie uns</h1>

					<h3>Email :</h3>
					<input
						type="email"
						className="input-field"
						placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
						title="Bitte geben Sie eine gültige E-Mail-Adresse ein."
					/>

					<h3>Telefon :</h3>
					<input
						type="tel"
						className="input-field"
						maxLength={15}
						placeholder="Bitte geben Sie Ihre Telefonnummer ein"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
						onKeyPress={(e) => {
							// فقط عدد اجازه داده شود
							if (!/[0-9]/.test(e.key)) {
								e.preventDefault();
							}
						}}
					/>

					<h3>Nachricht :</h3>
					<textarea
						rows="4"
						cols="50"
						className="textarea-field"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Bitte Ihre Nachricht eingeben"
						required
					/>

					<button className="send-button" onClick={handleSendEmail}>
						Senden
					</button>
				</div>
			</div>
			{/* -------------------------------------------------------------------------- */}
			{/* ************************************************************************** */}
		</div>
	);
}

export default Contact;
