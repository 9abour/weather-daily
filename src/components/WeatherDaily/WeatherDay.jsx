const WeatherDay = props => {
	let localTime = new Date(props.dateTime);

	let weekday = new Date(localTime).toLocaleDateString(undefined, {
		weekday: "long",
	});

	let day = new Date(localTime).toLocaleDateString(undefined, {
		day: "2-digit",
	});

	const { icon, description } = props.weatherInfo.weather;
	const { temp, app_max_temp } = props.weatherInfo;

	return (
		<>
			<div
				className="city"
				onClick={() => {
					props.setDayState(props.weatherInfo);
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
				<div className="country-info"></div>
				<div className="details">
					<div className="temp">
						<span>{temp}°C</span>
					</div>
					<div className="temp">
						<span>{app_max_temp}°F</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherDay;
