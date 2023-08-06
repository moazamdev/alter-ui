import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ColorProvider } from "./color-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ColorProvider>
			<App />
		</ColorProvider>
	</React.StrictMode>
);
