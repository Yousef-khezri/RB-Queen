import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
