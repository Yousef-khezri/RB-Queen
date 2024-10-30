import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Our_Company from "./component/Our_Company";
import Our_Services from "./component/Our_Services";
import Contact from "./component/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/our-company" element={<Our_Company />} />
				<Route path="/our_services" element={<Our_Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
