import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
	const [mode, setMode] = useState("dark");

	const handleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.querySelector("body").className = "light";
			localStorage.setItem("mode", "light");
			if (document.getElementById("note") !== null) {
				document.getElementById("note").className = "light";
			}
		} else {
			setMode("dark");
			document.querySelector("body").className = "dark";
			localStorage.setItem("mode", "dark");
			if (document.getElementById("note") !== null) {
				document.getElementById("note").className = "dark";
			}
		}
	};

	const modeFromLS = localStorage.getItem("mode");
	useEffect(() => {
		if (modeFromLS !== null) {
			setMode(modeFromLS);
			if (modeFromLS === "dark") {
				document.querySelector("body").className = "dark";
			} else {
				document.querySelector("body").className = "light";
			}
		}
	}, []);

	return (
		<>
			<nav
				className="navbar-container"
				style={{
					backgroundColor: mode === "dark" ? "#1c1f26" : "#dff6ff",
				}}
			>
				<div className="logo">
					<Link to="/">
						<div className="logo-btn main-btn btn-primary">
							<svg width="32" height="32" viewBox="0 0 24 24">
								<path
									fill={mode === "dark" ? "#0cc7fe" : "#333333"}
									d="M12 4.001c3.168 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.687 3.687 0 0 1-3.692 3.682h-.582l-1.583 2.637a.75.75 0 0 1-1.344-.659l.045-.091l1.15-1.887h-2.136l-1.583 2.637a.75.75 0 0 1-1.344-.659l.045-.091l1.15-1.887h-2.14l-1.581 2.637a.75.75 0 0 1-1.344-.659l.045-.091l1.148-1.887h-.562A3.687 3.687 0 0 1 3 12.314A3.687 3.687 0 0 1 6.693 8.63h.08C7.035 6.08 8.831 4 12 4Z"
								/>
							</svg>
						</div>
					</Link>
				</div>
				<div className="menu">
					<div
						className="menu-btn main-btn"
						style={{
							backgroundColor: mode === "dark" ? "#1c1f26" : "#333333",
						}}
						onClick={() => {
							handleMode();
						}}
					>
						{mode === "dark" ? (
							<svg className="dark" width="32" height="32" viewBox="0 0 16 16">
								<path
									fill="#0cc7fe"
									d="M7.456 2a6 6 0 1 1-5.406 8.605a.5.5 0 0 1 .36-.71c1.276-.231 3.278-.937 4.078-3.07c.563-1.5.512-3.015.283-4.23a.5.5 0 0 1 .475-.591C7.316 2 7.386 2 7.456 2Z"
								/>
							</svg>
						) : (
							<svg className="light" width="32" height="32" viewBox="0 0 16 16">
								<path
									fill="#dff6ff"
									d="M7.85 3.015a5 5 0 1 1-4.585 7.712c1.403-.38 3.316-1.302 4.16-3.551c.552-1.474.584-2.938.425-4.16ZM13.456 8a6 6 0 0 0-6.21-5.996a.5.5 0 0 0-.475.592c.23 1.214.28 2.728-.283 4.228c-.8 2.134-2.802 2.84-4.077 3.071a.5.5 0 0 0-.361.71A6 6 0 0 0 13.456 8Z"
								/>
							</svg>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
