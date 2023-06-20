import { Link } from "react-router-dom";
import { CitiesConsumer } from "../../context";

const WeatherDailyHeader = () => {
	const currentCity = JSON.parse(localStorage.getItem("currentCity"));
	return (
		<div className="main-header">
			<div className="container">
				<CitiesConsumer>
					{value => {
						return (
							<>
								{/* <h1>{value.weatherDailyInfo.city_name}</h1> */}
								<h3>Weather for the next 7 days</h3>
								<Link to="/">
									<button
										className="main-btn btn-secondary"
										onClick={() => {
											value.removeCity(currentCity.id);
											value.removeCurrentCity();
										}}
									>
										<span>Remove City</span>
									</button>
								</Link>
							</>
						);
					}}
				</CitiesConsumer>
			</div>
		</div>
	);
};

export default WeatherDailyHeader;
