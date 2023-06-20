import "./WeatherDaily.scss";
import WeatherDayInfo from "./WeatherDayInfo";

const WeatherCurrentDay = props => {
	let localTime = new Date(props.weather.datetime);

	let weekday = new Date(localTime).toLocaleDateString(undefined, {
		weekday: "long",
	});

	let day = new Date(localTime).toLocaleDateString(undefined, {
		day: "2-digit",
	});

	const { icon, description } = props.weather.weather;
	const { city_name, country_code } = props.weatherInfo;
	const { temp, app_max_temp, rh } = props.weather;

	return (
		<div
			className="city"
			onClick={() => {
				props.setDayState(props.weather);
			}}
		>
			<div className="date">
				<span className="day-name">{weekday}</span>
				<span className="day-number">{day}</span>
			</div>
			<div className="state">
				<div className="info-text">
					<span>{description}</span>
				</div>
				<img
					alt="few clouds"
					src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
				/>
			</div>
			<div className="country-info">
				<h3 className="country-name">
					{city_name}
					<span>{country_code}</span>
				</h3>
				<span className="country-state">{description}</span>
			</div>
			<div className="details">
				<div className="temp">
					<p>Current Temp</p>
					<span>{temp}°C</span>
				</div>

				<div className="temp">
					<p>Feels like</p>
					<span>{app_max_temp}°F</span>
				</div>

				<div className="temp">
					<p>Humidity</p>
					<span>{rh}%</span>
				</div>
			</div>
		</div>
	);
};
export default WeatherCurrentDay;
