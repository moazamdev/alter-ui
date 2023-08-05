import { useState } from "react";
import HeroSection from "./components/hero-section";
import ControlBar from "./components/control-bar";
import Header from "./components/header";

export default function App() {
	return (
		<>
			<Header />

			<HeroSection />

			<ControlBar />
		</>
	);
}
