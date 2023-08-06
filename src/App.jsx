import { useState } from "react";
import HeroSection from "./components/hero-section";
import ControlBar from "./components/control-bar";
import Header from "./components/header";
import { ColorProvider, useColorContext } from "./color-context";

export default function App() {
	const { background } = useColorContext();
	// const [primary, setPrimary] = useState("#010205");
	// const [secondary, setSecondary] = useState("#EBEBEB");
	// const [text, setText] = useState("#656565");
	// const [accent, setAccent] = useState("#669C30");
	// const [background, setBackground] = useState("#F9F9F9");
	return (
		<>
			{/* <ColorProvider> */}
				<div style={{ background: background }}>
					<Header />
					<HeroSection />
					<ControlBar />
				</div>
			{/* </ColorProvider> */}
		</>
	);
}
