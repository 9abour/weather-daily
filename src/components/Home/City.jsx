import { useState } from "react";
import { Link } from "react-router-dom";
import { CitiesConsumer } from "../../context";
import "../Styles/Cities.scss";

const City = props => {
	const [menuIcon, setMenuIcon] = useState(false);
	const {
		weather,
		main: { temp, feels_like, humidity },
		name,
		id,
		sys: { country },
	} = props.weather;

	const { main, description, icon } = weather[0];
	const weatherState = main;

	const days = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
	];

	const date = new Date();
	let dayNumber = date.getDate();
	let dayName = days[date.getDay()];

	return (
		<CitiesConsumer>
			{value => {
				return (
					<div className="city" key={id}>
						<div
							id="menu-city-btn"
							className="menu-icon"
							onClick={() => {
								setMenuIcon(!menuIcon);
							}}
						>
							<svg width="32" height="32" viewBox="0 0 21 21">
								<g fill="none" fillRule="evenodd" transform="translate(2 2)">
									<circle
										cx="8.5"
										cy="8.5"
										r="8"
										stroke="#ffffff"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										fill="currentColor"
										d="M8.5 9.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1zm8 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1z"
									/>
								</g>
							</svg>
							{menuIcon ? (
								<div className="popup">
									<Link to="weather-daily">
										<button
											className="main-btn btn-menu"
											onClick={() => {
												value.getLatAndLon(id);
												value.getFormattedDailyWeather();
												value.setFormattedWeatherDaily();
											}}
										>
											View Weather
										</button>
									</Link>
									<button
										className="main-btn btn-danger"
										onClick={() => {
											value.removeCity(id);
											console.log(id);
										}}
									>
										Remove City
									</button>
								</div>
							) : null}
						</div>
						<div className="date">
							<span className="day-name">{dayName}</span>
							<span className="day-number">{dayNumber}</span>
						</div>
						<div className="state">
							<div className="info-text">
								<span>{weatherState}</span>
							</div>
							<img
								alt="few clouds"
								src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
							/>
						</div>
						<div className="country-info">
							<h3 className="country-name">
								{name}
								<span>{country}</span>
							</h3>
							<span className="country-state">{description}</span>
						</div>
						<div className="details">
							<div className="temp">
								<p>Current Temp</p>
								<span>{Math.round(temp - 273.15, 2)}°C</span>
							</div>

							<div className="temp">
								<p>Feels like</p>
								<span>{Math.round(feels_like - 273.15, 2)}°F</span>
							</div>

							<div className="temp">
								<p>Humidity</p>
								<span>{humidity}%</span>
							</div>
						</div>
					</div>
				);
			}}
		</CitiesConsumer>
	);
};

export default City;
