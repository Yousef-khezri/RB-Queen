import "./Navbar.css";
import React, { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentLanguage, setCurrentLanguage] = useState("Deutsch");
	const [currentFlag, setCurrentFlag] = useState("./images/germany-flag.png");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // اضافه کردن state برای کنترل منوی موبایل

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLanguageChange = (language, flag) => {
		setCurrentLanguage(language);
		setCurrentFlag(flag);
		setIsOpen(false);
	};

	return (
		<div className="navbar">
			<div className="desktop-menu">
				<ul className="nav_list">
					<li>
						<a href="#Our_services">Unsere Dienstleistungen</a>
					</li>
					<li>
						<a href="#Our_company">Unser Unternehmen</a>
					</li>
					<li>
						<a href="#contact">Kontakt</a>
					</li>
				</ul>
			</div>

			{/* منوی موبایل */}
			<div className="mobile-menu">
				<img
					src="./images/menu.png"
					alt="Menu"
					className="menu-icon"
					onClick={toggleMobileMenu}
				/>
				{isMobileMenuOpen && (
					<ul className="mobile-dropdown">
						<li>
							<a href="#Our_services">Unsere Dienstleistungen</a>
						</li>
						<li>
							<a href="#Our_company">Unser Unternehmen</a>
						</li>
						<li>
							<a href="#contact">Kontakt</a>
						</li>
					</ul>
				)}
			</div>

			<div className="dropdown">
				<button className="btn_Languages" onClick={toggleMenu}>
					<img
						src={currentFlag}
						alt={currentLanguage}
						className="flag-icon"
					/>
					{currentLanguage}
				</button>
				{isOpen && (
					<div className="dropdown-menu">
						<div
							className="language-option"
							onClick={() =>
								handleLanguageChange(
									"Deutsch",
									"./images/germany-flag.png"
								)
							}
						>
							<img src="./images/germany-flag.png" alt="German" />
							<span>Deutsch</span>
						</div>
						<div
							className="language-option"
							onClick={() =>
								handleLanguageChange(
									"English",
									"./images/uk-flag.png"
								)
							}
						>
							<img src="./images/uk-flag.png" alt="English" />
							<span>English</span>
						</div>
						<div
							className="language-option"
							onClick={() =>
								handleLanguageChange(
									"عربي",
									"./images/uae-flag.png"
								)
							}
						>
							<img src="./images/uae-flag.png" alt="Arabic" />
							<span>عربي</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;

//******************************************************* */
// import "./Navbar.css";
// import React, { useState } from "react";

// function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [currentLanguage, setCurrentLanguage] = useState("Deutsch"); // زبان پیش‌فرض آلمانی
// 	const [currentFlag, setCurrentFlag] = useState("./images/germany-flag.png"); // مسیر تصویر پرچم آلمانی به‌عنوان پیش‌فرض

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	const handleLanguageChange = (language, flag) => {
// 		setCurrentLanguage(language);
// 		setCurrentFlag(flag); // به‌روز کردن تصویر پرچم
// 		setIsOpen(false); // بستن منو بعد از انتخاب زبان
// 	};

// 	return (
// 		<div className="navbar">
// 			<ul className="nav_list">
// 				<li>
// 					<a href="#Our_services">Unsere Dienstleistungen</a>
// 				</li>
// 				<li>
// 					<a href="#Our_company">Unser Unternehmen</a>
// 				</li>
// 				<li>
// 					<a href="#contact">Kontakt</a>
// 				</li>
// 			</ul>
// 			<div className="dropdown">
// 				<button className="btn_Languages" onClick={toggleMenu}>
// 					<img
// 						src={currentFlag}
// 						alt={currentLanguage}
// 						className="flag-icon"
// 					/>
// 					{/* نمایش پرچم زبان فعلی */}
// 					{currentLanguage}
// 				</button>
// 				{isOpen && (
// 					<div className="dropdown-menu">
// 						<div
// 							className="language-option"
// 							onClick={() =>
// 								handleLanguageChange(
// 									"Deutsch",
// 									"./images/germany-flag.png"
// 								)
// 							}
// 						>
// 							<img src="./images/germany-flag.png" alt="German" />
// 							<span>Deutsch</span>
// 						</div>
// 						<div
// 							className="language-option"
// 							onClick={() =>
// 								handleLanguageChange(
// 									"English",
// 									"./images/uk-flag.png"
// 								)
// 							}
// 						>
// 							<img src="./images/uk-flag.png" alt="English" />
// 							<span>English</span>
// 						</div>
// 						<div
// 							className="language-option"
// 							onClick={() =>
// 								handleLanguageChange(
// 									"عربي",
// 									"./images/uae-flag.png"
// 								)
// 							}
// 						>
// 							<img src="./images/uae-flag.png" alt="Arabic" />
// 							<span>عربي</span>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default Navbar;
