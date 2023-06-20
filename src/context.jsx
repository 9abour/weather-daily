import React, { Component, createContext, useContext } from "react";
import swal from "sweetalert";

const CitiesContext = createContext();

class CitiesProvider extends Component {
	state = {
		cities: [],
		weather: [],
		weatherDaily: [],
		weatherDailyInfo: [],
		currentCity: [],
		dayInfo: {
			state: false,
			info: [],
		},
	};

	componentDidMount() {
		this.getFormattedWeatherData();
		this.setCities();
		this.setFormattedWeatherDaily();
		this.handleDailyWeather();
	}

	// Import cities from LS and add it to this state
	setCities = () => {
		const citiesFromLS = JSON.parse(localStorage.getItem("cities"));
		if (citiesFromLS !== null) {
			setTimeout(() => {
				this.setState(() => {
					return {
						cities: citiesFromLS,
					};
				});
			}, 500);
		}
	};

	// Get formatted weather data
	getFormattedWeatherData = () => {
		const API_KEY = "5978bd40625a8456317ba53cbde256d1";
		const citiesFromLS = JSON.parse(localStorage.getItem("cities"));
		const weatherCities = [];
		if (citiesFromLS !== null) {
			citiesFromLS.map(async city => {
				const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
				await fetch(API_URL).then(resp => {
					if (resp.ok) {
						resp.json().then(data => {
							weatherCities.push(data);
						});
					} else if (resp.status === 404) {
						// Remove undefined city from LS
						// Selected not found city
						const selectedCity =
							this.state.cities[this.state.cities.length - 1];
						const filtered = this.state.cities.filter(
							item => item !== selectedCity
						);
						localStorage.setItem("cities", JSON.stringify(filtered));

						// Return previous cities
						this.setState(() => {
							return {
								cities: filtered,
							};
						});

						// Alert
						swal("Not found!", "City not found", "error");

						// Return error
						return Promise.reject("City not found");
					}
				});
				this.setState(() => {
					return {
						weather: weatherCities,
					};
				});
			});
		}
	};

	// Save city to LS
	saveCityToLS = city => {
		localStorage.setItem(
			"cities",
			JSON.stringify([...this.state.cities, city])
		);
	};

	// Add new city
	addNewCity = city => {
		this.setState(() => {
			return {
				cities: [...this.state.cities, city],
			};
		});
	};

	getCity = id => {
		const city = this.state.weather.find(item => item.id === id);
		return city;
	};

	// Remove City Weather
	removeCity = id => {
		const weather = this.state.weather;
		const filtered = weather.filter(city => city.id !== id);
		let cityName = this.getCity(id).name;

		// Remove city name from state of cities
		const cities = this.state.cities.filter(item => item !== cityName);

		// Remove city from LS
		localStorage.setItem("cities", JSON.stringify(cities));

		// Update weather
		this.setState(() => {
			return {
				weather: filtered,
				cities: cities,
			};
		});
	};

	getLatAndLon = id => {
		const cityWeather = this.getCity(id);
		const { lat, lon } = cityWeather.coord;
		localStorage.setItem(
			"cityWeatherDaily",
			JSON.stringify({ lat: lat, lon: lon })
		);

		this.setState(() => {
			return {
				currentCity: cityWeather,
			};
		});

		localStorage.setItem("currentCity", JSON.stringify(cityWeather));
	};

	getFormattedDailyWeather = () => {
		const latAndLon = JSON.parse(localStorage.getItem("cityWeatherDaily"));
		let lat, lon;
		if (latAndLon !== null) {
			lat = latAndLon.lat;
			lon = latAndLon.lon;
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"872ee91faamsh96a9e667e4070ebp125d25jsn69e25496b10b",
					"X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
				},
			};
			fetch(
				`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${lat}&lon=${lon}`,
				options
			)
				.then(response => response.json())
				.then(response =>
					this.setState(() => {
						return {
							weatherDailyInfo: response,
						};
					})
				)
				.catch(err => console.error(err));

			setTimeout(() => {
				localStorage.setItem(
					"weatherDailyObject",
					JSON.stringify(this.state.weatherDailyInfo)
				);
			}, 1000);
		}
	};

	setFormattedWeatherDaily = () => {
		const weatherDaily = JSON.parse(localStorage.getItem("weatherDailyObject"));

		this.setState(() => {
			return {
				weatherDailyInfo: weatherDaily,
			};
		});
	};

	setWeatherDailyInfo = id => {
		const cityWeather = this.getCity(id);
		const { name } = cityWeather;
		const { country } = cityWeather.sys;
		this.setState(() => {
			return {
				weatherDailyInfo: { countryName: name, countryFlag: country },
			};
		});
	};

	removeCurrentCity = () => {
		this.setState(() => {
			return {
				weatherDailyInfo: [],
				currentCity: [],
			};
		});
	};

	setDayState = info => {
		document.body.style.height = "100vh";
		document.body.style.overflow = "hidden";
		this.setState(() => {
			return {
				dayInfo: {
					state: true,
					info: info,
				},
			};
		});
	};

	handleDailyWeather = () => {
		setTimeout(() => {
			if (this.state.weather.length === 1) {
				this.getLatAndLon(this.state.weather[0].id);
				this.getFormattedDailyWeather();
			}
		}, 500);
	};

	hideDayInfo = () => {
		document.body.style.height = "100%";
		document.body.style.overflow = "auto";
		this.setState(() => {
			return {
				dayInfo: {
					state: false,
				},
			};
		});
	};

	render() {
		return (
			<CitiesContext.Provider
				value={{
					...this.state,
					addNewCity: this.addNewCity,
					saveCityToLS: this.saveCityToLS,
					getFormattedWeatherData: this.getFormattedWeatherData,
					removeCity: this.removeCity,
					getLatAndLon: this.getLatAndLon,
					setWeatherDailyInfo: this.setWeatherDailyInfo,
					getFormattedDailyWeather: this.getFormattedDailyWeather,
					setFormattedWeatherDaily: this.setFormattedWeatherDaily,
					removeCurrentCity: this.removeCurrentCity,
					setDayState: this.setDayState,
					hideDayInfo: this.hideDayInfo,
					handleDailyWeather: this.handleDailyWeather,
				}}
			>
				{this.props.children}
			</CitiesContext.Provider>
		);
	}
}

const CitiesConsumer = CitiesContext.Consumer;

export { CitiesProvider, CitiesConsumer };
