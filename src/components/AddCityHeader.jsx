import { Link } from "react-router-dom";
import "../components/Styles/AddCityHeader.scss";

const AddCityHeader = () => {
	return (
		<>
			<div className="main-header">
				<div className="container">
					<h1>Tracked Cities</h1>
					<h3>All the cities you are saved to see the weather!</h3>
					<Link to="add-new-city">
						<button className="main-btn btn-secondary">
							<span>+ Add City</span>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default AddCityHeader;
