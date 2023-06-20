import { CitiesConsumer } from "../../context";
import City from "./City";

const Cities = () => {
	return (
		<>
			<div className="container">
				<div className="cities">
					<CitiesConsumer>
						{value => {
							return value.weather.map(city => {
								return <City key={city.id} weather={city} />;
							});
						}}
					</CitiesConsumer>
				</div>
			</div>
		</>
	);
};

export default Cities;
