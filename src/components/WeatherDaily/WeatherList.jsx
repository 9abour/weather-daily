import { useEffect } from "react";
import { CitiesConsumer } from "../../context";
import WeatherCurrentDay from "./WeatherCurrentDay";
import WeatherDay from "./WeatherDay";

const WeatherList = () => {
	const checkMode = localStorage.getItem("mode");
	const weatherDailyObject = localStorage.getItem("weatherDailyObject");
	useEffect(() => {
		if (checkMode !== null) {
			if (checkMode === "dark") {
				document.getElementById("note").className = "dark";
			} else {
				document.getElementById("note").className = "light";
			}
		}
	}, []);

	return (
		<>
			<div className="container">
				<div className="weather-daily">
					<div className="current-day">
						<CitiesConsumer>
							{value => {
								if (weatherDailyObject !== "null") {
									if (value.weatherDailyInfo.length !== 0) {
										return (
											<WeatherCurrentDay
												weather={value.weatherDailyInfo.data[0]}
												weatherInfo={value.weatherDailyInfo}
												setDayState={value.setDayState}
											/>
										);
									}
								}
							}}
						</CitiesConsumer>
					</div>
					<div className="weather-list">
						<CitiesConsumer>
							{value => {
								if (weatherDailyObject !== "null") {
									if (value.weatherDailyInfo.length !== 0) {
										return value.weatherDailyInfo.data
											.slice(1, 8)
											.map((day, index) => {
												return (
													<WeatherDay
														key={index}
														weather={value.weatherDailyInfo.data[0]}
														weatherInfo={day}
														dateTime={day.datetime}
														setDayState={value.setDayState}
													/>
												);
											});
									}
								} else {
									return <h1>No City</h1>;
								}
							}}
						</CitiesConsumer>
					</div>
				</div>
				<p id="note">
					Note: for further details of a specific day, click on the card.
				</p>
			</div>
		</>
	);
};

export default WeatherList;
