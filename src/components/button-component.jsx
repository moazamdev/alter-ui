import { useColorContext } from "../color-context";
import { getTextColor } from "../utils";

const ButtonComponent = ({ text, onClick, theme = "primary" }) => {
	const { primary, secondary, accent } = useColorContext();
	// console.log(getTextColor(primary));

	let accentBrightness = getTextColor(accent);
	let secondaryBrightness = getTextColor(secondary);
	let primaryStyles =
		theme == "primary"
			? {
					border: accent,
					background: accent,
					// if the contrast is inappropriate, then flip the values
					color: accentBrightness > 0.5 ? "black" : "white",
			  }
			: {
					border: secondary,
					background: secondary,
					color: secondaryBrightness > 0.5 ? "black" : "white",
			  };
	return (
		<button
			style={primaryStyles}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.target.style.border = primary;
				e.target.style.background = primary;
				e.target.style.color =
					getTextColor(primary) > 0.5 ? "black" : "white";
			}}
			onMouseLeave={(e) => {
				if (theme === "primary") {
					e.target.style.border = accent;
					e.target.style.background = accent;
					e.target.style.color =
						// if the contrast is inappropriate, then flip the values
						accentBrightness > 0.5 ? "black" : "white";
				} else {
					e.target.style.border = secondary;
					e.target.style.background = secondary;
					e.target.style.color =
						secondaryBrightness > 0.5 ? "black" : "white";
				}
			}}
			className={`btn border text-[15px] px-[32px] py-[12px] rounded-full font-regular transition`}
		>
			{text}
		</button>
	);
};

export default ButtonComponent;

// className={`btn border hover:border-primary ${
// 	theme == "primary"
// 		? "bg-accent text-white hover:bg-primary border-accent"
// 		: "bg-secondary text-primary hover:bg-primary hover:text-secondary border-secondary "
// } text-[15px] px-[32px] py-[12px] rounded-full font-regular transition`}
// >
