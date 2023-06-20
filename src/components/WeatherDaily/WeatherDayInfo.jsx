const WeatherDayInfo = props => {
	const { wind_spd, wind_dir, snow } = props.cityInfo;
	let localTime = new Date(props.cityInfo.datetime);

	let weekday = new Date(localTime).toLocaleDateString(undefined, {
		weekday: "long",
	});

	let day = new Date(localTime).toLocaleDateString(undefined, {
		day: "2-digit",
	});

	const { icon, description } = props.cityInfo.weather;
	const { temp, app_max_temp, rh, clouds } = props.cityInfo;

	return (
		<div className="day-info">
			<div className="overlay"></div>
			<div className="info-container">
				<button
					className="main-btn btn-danger close-btn"
					onClick={() => {
						props.value.hideDayInfo();
					}}
				>
					<svg width="32" height="32" viewBox="0 0 24 24">
						<path
							fill="#ffffff"
							d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
						/>
					</svg>
				</button>
				<div className="city">
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
				<div className="info">
					<div className="day-info-container">
						<div className="wind">
							<div className="icon">
								<svg width="50" height="50" viewBox="0 0 24 24">
									<path
										fill="none"
										stroke="#dfa94a"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24"
									/>
								</svg>
							</div>
							<div className="text">
								<h2 className="title">Wind</h2>
								<h4>Velocity: {wind_spd}m/s</h4>
								<h4>Direction: {wind_dir}º</h4>
							</div>
						</div>
						<div className="rain">
							<div className="icon">
								<svg width="50" height="40" viewBox="0 0 24 24">
									<path
										fill="#dfa94a"
										d="M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496l2.928.936l6.144-1.992l-1.128-3.432zM17.832 12l-2.928.936l1.8 2.496l6.144 1.992l1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232l2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12L.024 13.992l1.128 3.432zM6.168 12l2.928-.936l-1.8-2.496l-6.144-1.992l-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224L3.48 3.36Z"
									/>
								</svg>
							</div>
							<div className="text">
								<h2 className="title">Snow</h2>
								<h4>{snow}%</h4>
							</div>
						</div>
						<div className="clouds">
							<div className="icon">
								<svg width="50" height="50" viewBox="0 0 16 16">
									<g fill="#dfa94a">
										<path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272a3.513 3.513 0 0 0-.65-.824a1.5 1.5 0 0 0-.789-2.896a.5.5 0 0 1-.627-.421a3 3 0 0 0-5.22-1.625a5.587 5.587 0 0 0-1.276.088a4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" />
										<path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873a.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953a.5.5 0 0 1-.624-.492V9.5z" />
									</g>
								</svg>
							</div>
							<div className="text">
								<h2 className="title">Clouds</h2>
								<h4>Percentage: {clouds}%</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherDayInfo;
