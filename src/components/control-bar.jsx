import ControlButton from "./control-button";
import { useColorContext } from "../color-context";

const ControlBar = () => {
	const {
		primary,
		setPrimary,
		secondary,
		setSecondary,
		text,
		setText,
		accent,
		setAccent,
		background,
		setBackground,
	} = useColorContext();

	return (
		<div className="flex justify-center items-center w-full mx-auto my-0 px-2.5 py-[20px] md:py-[50px]">
			<div className="w-[min(100%_-_15px,1250px)] border border-[#bbb] p-[15px] rounded-lg grid grid-cols-6 gap-[10px] bg-[#ccc] fixed bottom-[10px] drop-shadow-2xl">
				<ControlButton
					setter={setPrimary}
					colorValue={primary}
					buttonText={"Primary"}
				/>
				<ControlButton
					setter={setSecondary}
					colorValue={secondary}
					buttonText={"Secondary"}
				/>
				<ControlButton
					setter={setText}
					colorValue={text}
					buttonText={"Text"}
				/>
				<ControlButton
					setter={setAccent}
					colorValue={accent}
					buttonText={"Accent"}
				/>
				<ControlButton
					setter={setBackground}
					colorValue={background}
					buttonText={"Background"}
				/>
				<ControlButton buttonType={"font"} buttonText={"Font"} />
			</div>
		</div>
	);
};

export default ControlBar;
