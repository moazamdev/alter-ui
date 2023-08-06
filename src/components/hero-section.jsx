import ButtonComponent from "./button-component";
import WrapperSection from "./wrapper-component";
import { useColorContext } from "../color-context";

const HeroSection = () => {
	const {
		primary,
		accent,
		text: paraTextColor,
		secondary,
	} = useColorContext();
	return (
		<WrapperSection>
			<div className="col-one w-[60%] flex flex-col gap-[30px] pr-[30px]">
				<h1
					style={{ color: primary }}
					className="font-semibold text-[70px]"
				>
					Stay ahead of the curve with our{" "}
					<span
						style={{
							backgroundImage: `linear-gradient(to right, ${accent}, ${primary})`,
						}}
						className="bg-clip-text text-transparent"
					>
						forward-thinking.
					</span>
				</h1>
				<p style={{ color: paraTextColor }} className="text-[18px]">
					An award winning SEO agency with disciplines in digital
					marketing, design and website development, focused on
					understanding you.
				</p>
				<div className="button-box flex gap-[20px]">
					<ButtonComponent theme={"primary"} text={"Get Started"} />
					<ButtonComponent
						theme={"secondary"}
						text={"View Case Study"}
					/>
				</div>
			</div>

			<div className="col-two flex flex-col gap-[20px] w-[50%] p-[20px]">
				<div className="first-row flex gap-[20px]">
					<div
						style={{ background: accent }}
						className="w-[50%] h-[250px] rounded-tl-[250px] rounded-lg"
					></div>
					<div
						style={{ background: secondary }}
						className="w-[50%] h-[250px] rounded-lg"
					></div>
				</div>
				<div
					style={{ background: primary }}
					className="second-row w-[100%] h-[250px] rounded-lg"
				></div>
			</div>
		</WrapperSection>
	);
};

export default HeroSection;
