import { useState } from "react";
import { CitiesConsumer } from "../context";
import "../Styles/addCity.scss";

const AddCity = () => {
	// Get city from input
	const [inputValue, setInputValue] = useState();
	const handleOnChange = e => {
		setInputValue(e.target.value);
	};
	return (
		<CitiesConsumer>
			{value => {
				const handleOnSubmit = e => {
					e.preventDefault();
					value.addNewCity(inputValue);
					value.saveCityToLS(inputValue);
					value.getFormattedWeatherData();
					value.handleDailyWeather();

					// Clear add city input value
					document.querySelector(".input-add-city").value = "";
				};
				return (
					<main className="add-city-container">
						<form>
							<label>add city</label>
							<div className="main-input">
								<input
									onChange={e => {
										handleOnChange(e);
									}}
									className="input-add-city"
									type="text"
									placeholder="Add city"
									autoFocus
								/>
								<input
									className="main-btn btn-submit"
									type="submit"
									value="Submit"
									onClick={e => {
										handleOnSubmit(e);
									}}
								/>
							</div>
						</form>
					</main>
				);
			}}
		</CitiesConsumer>
	);
};

export default AddCity;
