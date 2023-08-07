import HeroSection from "./components/hero-section";
import ControlBar from "./components/control-bar";
import Header from "./components/header";
import { useColorContext } from "./color-context";

export default function App() {
	const { background } = useColorContext();
	return (
		<>
			<div style={{ height: "100vh", background: background }}>
				<Header />
				<HeroSection />
				<ControlBar />
			</div>
		</>
	);
}
