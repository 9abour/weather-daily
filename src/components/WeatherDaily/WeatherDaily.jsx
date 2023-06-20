import WeatherDailyHeader from "./WeatherDailyHeader";
import WeatherList from "./WeatherList";
import "../WeatherDaily/WeatherDaily.scss";
import WeatherDayInfo from "./WeatherDayInfo";
import { CitiesConsumer } from "../../context";

const WeatherDaily = () => {
	return (
		<>
			<WeatherDailyHeader />
			<WeatherList />
			<CitiesConsumer>
				{value => {
					if (value.dayInfo.state) {
						return (
							<WeatherDayInfo cityInfo={value.dayInfo.info} value={value} />
						);
					}
				}}
			</CitiesConsumer>
		</>
	);
};

export default WeatherDaily;
