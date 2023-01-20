import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import App from "./App";
import { CitiesProvider } from "./context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<CitiesProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CitiesProvider>
	</React.StrictMode>
);
