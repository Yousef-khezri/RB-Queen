import "./Main.css";
import React, { useEffect, useState } from "react";

function Main() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		const titleText = " Welcome to My Website";
		const descriptionText = "This is a sample website created with React.";

		let titleIndex = 0;
		let descriptionIndex = 0;

		const titleInterval = setInterval(() => {
			if (titleIndex < titleText.length) {
				setTitle((prev) => prev + titleText[titleIndex]);
				titleIndex++;
			} else {
				clearInterval(titleInterval);
			}
		}, 60); // زمان کوتاه‌تر برای نمایش سریع‌تر حروف

		const descriptionInterval = setInterval(() => {
			if (descriptionIndex < descriptionText.length) {
				setDescription(
					(prev) => prev + descriptionText[descriptionIndex]
				);
				descriptionIndex++;
			} else {
				clearInterval(descriptionInterval);
			}
		}, 50); // زمان کوتاه‌تر برای نمایش سریع‌تر حروف

		return () => {
			clearInterval(titleInterval);
			clearInterval(descriptionInterval);
		};
	}, []);

	//---------------- Abute qualities-----------------------------
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.5 }
		);

		const qualities = document.querySelectorAll(".item-qualities");
		qualities.forEach((quality) => observer.observe(quality));

		return () => {
			qualities.forEach((quality) => observer.unobserve(quality));
		};
	}, []);
	//---------------------------------------------

	return (
		<div className="main">
			{/* ---------------- Banner ------------------------------ */}
			<div className="banner">
				<div className="txt_banner">
					<div>
						<h1 className="title">
							{title.split("").map((char, index) =>
								char === " " ? (
									<span key={index}>&nbsp;</span> // نمایش فاصله بین کلمات
								) : (
									<span
										key={index}
										style={{
											animationDelay: `${index * 0.05}s`,
										}}
										className="title-char"
									>
										{char}
									</span>
								)
							)}
						</h1>
						<p className="description">
							{description.split("").map((char, index) =>
								char === " " ? (
									<span key={index}>&nbsp;</span>
								) : (
									<span
										key={index}
										style={{
											animationDelay: `${index * 0.05}s`,
										}}
										className="description-char"
									>
										{char}
									</span>
								)
							)}
						</p>
					</div>
					<button>Learn More</button>
				</div>
				<img
					className="img_banner"
					src="./images/Banner.webp"
					alt="banner"
				/>
			</div>
			{/* -------------------- End Banner ---------------------- */}
			{/* ###################################################### */}
			{/* ---------------- about-qualities ------------------------------ */}
			<div className="about-qualities">
				<div className="item-qualities left">
					<h2>Vertrauenswürdigkeit</h2>
					<span>
						Wir legen großen Wert auf Vertrauen und Transparenz.
						Unser Engagement für Ehrlichkeit und Zuverlässigkeit
						schafft eine solide Grundlage für langfristige
						Partnerschaften.
					</span>
				</div>
				<div className="item-qualities center">
					<h2>Professionalität</h2>
					<span>
						Mit höchster Professionalität setzen wir uns für die
						Bedürfnisse unserer Kunden ein. Unser Team arbeitet
						präzise, organisiert und stets auf höchstem Niveau.
					</span>
				</div>
				<div className="item-qualities right">
					<h2>Kundenzufriedenheit</h2>
					<span>
						Die Zufriedenheit unserer Kunden ist unser größtes
						Anliegen. Durch maßgeschneiderte Lösungen und
						engagierten Service sorgen wir dafür, dass Ihre
						Erwartungen stets übertroffen werden.
					</span>
				</div>
			</div>
			{/* -------------------- End about-qualities ---------------------- */}
			{/* ###################################################### */}
			{/* ---------------- about-company ------------------------------ */}
			<div className="about-company">
				<div className="about-left">
					<img
						className="img-background"
						src="./images/about-company-img.png"
						alt="about company"
					/>
					{/* <img
						className="img-overlay"
						src="./images/About-Company2.jpg"
						alt="about company"
					/> */}
				</div>
				<div className="about-right">
					<h1>Hinter den Geschichten der RB Queen Company</h1>
					<p>
						Die RB Queen Company ist stolz darauf, erstklassige
						Reinigungsdienstleistungen für Hotelzimmer anzubieten.
						Unser engagiertes Team sorgt für Sauberkeit und Komfort,
						damit sich die Gäste wie zu Hause fühlen. Hinter jeder
						Geschichte steht unser unermüdlicher Einsatz für
						Exzellenz und die Zufriedenheit unserer Kunden.
					</p>
					<div className="item-about">
						<img
							src="./images/checked.png"
							className="item-checked"
							alt="item checked"
						/>
						<p>Saubere Zimmer, Glückliche Herzen</p>
					</div>
					<div className="item-about">
						<img
							src="./images/checked.png"
							className="item-checked"
							alt="item checked"
						/>
						<p>Glänze jeden Raum</p>
					</div>
					<div className="item-about">
						<img
							src="./images/checked.png"
							className="item-checked"
							alt="item checked"
						/>
						<p>Reinigen. Erfrischen. Beleben.</p>
					</div>
					<div className="item-about">
						<img
							src="./images/checked.png"
							className="item-checked"
							alt="item checked"
						/>
						<p>Reinigungsstandards</p>
					</div>
				</div>
			</div>
			{/* -------------------- End about-company ---------------------- */}
			{/* ###################################################### */}
			{/* ---------------- partner-hotels ------------------------------ */}
			<div className="partner-hotels">
				<img
					src="./images/motel-one.svg"
					className="item-partner-hotels"
					alt="item-partner-hotels"
				/>
				<img
					src="./images/logo-rhein-hotel.svg"
					className="item-partner-hotels"
					alt="item-partner-hotels"
				/>
			</div>

			{/* -------------------- End partner-hotels ---------------------- */}
			{/* ###################################################### */}
			{/* ---------------- Gallery ------------------------------ */}
			<div className="gallery">
				<div className="first-line">
					<img
						src="./images/item-gallery-01.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-02.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-03.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-04.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
				</div>
				<div className="second-line">
					<img
						src="./images/item-gallery-05.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-06.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-07.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
					<img
						src="./images/item-gallery-08.jpg"
						className="item-gallery"
						alt="item gallery"
					/>
				</div>
			</div>
			{/* -------------------- End Gallery ---------------------- */}
			{/* ###################################################### */}
		</div>
	);
}

export default Main;

//----------------------------------------------------------------
// import "./Main.css";
// import React, { useEffect, useState } from "react";

// function Main() {
// 	const [title, setTitle] = useState("");
// 	const [description, setDescription] = useState("");

// 	useEffect(() => {
// 		const titleText = "Welcome to My Website";
// 		const descriptionText = "This is a sample website created with React.";

// 		let titleIndex = 0;
// 		let descriptionIndex = 0;

// 		// انیمیشن نمایش حروف عنوان
// 		const titleInterval = setInterval(() => {
// 			if (titleIndex < titleText.length) {
// 				setTitle((prev) => prev + titleText[titleIndex]);
// 				titleIndex++;
// 			} else {
// 				clearInterval(titleInterval);
// 			}
// 		}, 100); // زمان بین نمایش حروف (میلی‌ثانیه)

// 		// انیمیشن نمایش حروف توضیحات
// 		const descriptionInterval = setInterval(() => {
// 			if (descriptionIndex < descriptionText.length) {
// 				setDescription(
// 					(prev) => prev + descriptionText[descriptionIndex]
// 				);
// 				descriptionIndex++;
// 			} else {
// 				clearInterval(descriptionInterval);
// 			}
// 		}, 80); // زمان بین نمایش حروف (میلی‌ثانیه)

// 		return () => {
// 			clearInterval(titleInterval);
// 			clearInterval(descriptionInterval);
// 		};
// 	}, []);

// 	return (
// 		<div className="main">
// 			<div className="banner">
// 				<div className="txt_banner">
// 					<div>
// 						<h1 className="title">{title}</h1>
// 						<p className="description">{description}</p>
// 					</div>
// 					<button>Learn More</button>
// 				</div>
// 				<img
// 					className="img_banner"
// 					src="./images/Banner.webp"
// 					alt="banner"
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// export default Main;
