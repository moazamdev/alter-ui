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
			<div className="col-one w-full lg:w-[60%] flex flex-col gap-[30px] lg:pr-[30px]">
				<h1
					style={{ color: primary }}
					className="font-semibold text-[40px] md:text-[70px]"
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
				<p
					style={{ color: paraTextColor }}
					className="text-[16px] md:text-[18px]"
				>
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

			<div className="col-two flex flex-col gap-[20px] mt-5 lg:mt-auto w-full lg:w-[50%] p-[20px]">
				<div className="first-row flex gap-[20px]">
					<div
						style={{ background: accent }}
						className="w-[50%] h-[150px] md:h-[250px] rounded-tl-[250px] rounded-lg"
					></div>
					<div
						style={{ background: secondary }}
						className="w-[50%] h-[150px] md:h-[250px] rounded-lg p-10 flex gap-6 flex-col justify-center items-start"
					>
						<h2
							style={{ color: accent }}
							className="font-bold text-[50px]"
						>
							230+
						</h2>
						<span
							style={{ background: primary }}
							className="relative w-full h-3 rounded-lg"
						>
							<span
								style={{ background: accent }}
								className="absolute top-0 left-0 rounded-lg w-[70%] h-full"
							></span>
						</span>
					</div>
				</div>
				<div
					style={{ background: primary }}
					className="relative second-row w-[100%] h-[150px] md:h-[250px] overflow-hidden rounded-lg"
				>
					<span
						className="absolute bottom-0 right-[35%] vertical-bar rounded-lg -mb-2 w-10 md:w-16 h-[40%]"
						style={{ background: accent }}
					></span>
					<span
						className="absolute bottom-0 right-[20%] vertical-bar rounded-lg -mb-2 w-10 md:w-16 h-[60%]"
						style={{ background: accent }}
					></span>
					<span
						className="absolute bottom-0 right-[5%] vertical-bar rounded-lg -mb-2 w-10 md:w-16 h-[80%]"
						style={{ background: accent }}
					></span>
				</div>
			</div>
		</WrapperSection>
	);
};

export default HeroSection;
