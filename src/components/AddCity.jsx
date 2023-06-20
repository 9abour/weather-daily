import { useState } from "react";
import { CitiesConsumer } from "../context";
import Swal from "sweetalert2";

const AddCity = () => {
	// Get city from input
	const [inputValue, setInputValue] = useState("");

	const handleOnChange = e => {
		setInputValue(e.target.value);
	};
	return (
		<CitiesConsumer>
			{value => {
				const handleOnSubmit = e => {
					e.preventDefault();
					if (inputValue != "") {
						value.addNewCity(inputValue);
					}

					// Clear add city input value
					setInputValue("");
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
									placeholder="Cairo"
									value={inputValue}
									autoFocus
								/>
								<button
									className="main-btn btn-submit"
									type="submit"
									onClick={e => {
										handleOnSubmit(e);
									}}
								>
									Add
								</button>
							</div>
						</form>
					</main>
				);
			}}
		</CitiesConsumer>
	);
};

export default AddCity;
