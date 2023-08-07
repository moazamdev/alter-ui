import { useColorContext } from "../color-context";
import { getTextColor } from "../utils";

const ButtonComponent = ({ text, onClick, theme = "primary" }) => {
	const { primary, secondary, accent } = useColorContext();

	let accentBrightness = getTextColor(accent) > 0.5 ? "black" : "white";
	let secondaryBrightness = getTextColor(secondary) > 0.5 ? "black" : "white";
	let primaryBrightness = getTextColor(primary) > 0.5 ? "black" : "white";
	let primaryStyles =
		theme == "primary"
			? {
					border: accent,
					background: accent,
					color: accentBrightness,
			  }
			: {
					border: secondary,
					background: secondary,
					color: secondaryBrightness,
			  };
	return (
		<button
			style={primaryStyles}
			onClick={onClick}
			onMouseEnter={(e) => {
				e.target.style.border = primary;
				e.target.style.background = primary;
				e.target.style.color = primaryBrightness;
			}}
			onMouseLeave={(e) => {
				if (theme === "primary") {
					e.target.style.border = accent;
					e.target.style.background = accent;
					e.target.style.color = accentBrightness;
				} else {
					e.target.style.border = secondary;
					e.target.style.background = secondary;
					e.target.style.color = secondaryBrightness;
				}
			}}
			className={`btn border text-[15px] px-[32px] py-[12px] rounded-full font-regular transition `}
		>
			{text}
		</button>
	);
};

export default ButtonComponent;
