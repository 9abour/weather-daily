import { Route, Routes } from "react-router-dom";
import AddCity from "./components/AddCity";
import AddCityHeader from "./components/AddCityHeader";
import Cities from "./components/Home/Cities";
import Navbar from "./components/Navbar/Navbar";
import WeatherDaily from "./components/WeatherDaily/WeatherDaily";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<AddCityHeader /> <Cities />{" "}
						</>
					}
				/>
				<Route path="/add-new-city" element={<AddCity />} />
				<Route path="/weather-daily" element={<WeatherDaily />} />;
			</Routes>
		</>
	);
}

export default App;
