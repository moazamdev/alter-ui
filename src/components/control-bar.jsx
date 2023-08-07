import ControlButton from "./control-button";
import { useColorContext } from "../color-context";
import { useState } from "react";

const ControlBar = () => {
	const [isShowing, setIsShowing] = useState(true);
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

	const controlButtonDetailsArr = [
		{
			setter: setPrimary,
			colorValue: primary,
			buttonText: "Primary",
		},
		{
			setter: setSecondary,
			colorValue: secondary,
			buttonText: "Secondary",
		},
		{
			setter: setText,
			colorValue: text,
			buttonText: "Text",
		},
		{
			setter: setAccent,
			colorValue: accent,
			buttonText: "Accent",
		},
		{
			setter: setBackground,
			colorValue: background,
			buttonText: "Background",
		},
	];

	return (
		<div className="flex justify-center items-center w-full mx-auto my-0 px-2.5 py-[20px] lg:py-[50px]">
			<div className="w-[min(100%_-_15px,1250px)] border border-[#bbb] p-[15px] rounded-lg grid md:grid-cols-3 lg:grid-cols-6 gap-[10px] bg-[#ccc] fixed bottom-[10px] drop-shadow-2xl">
				{/* {controlButtonDetailsArr.map((item) => {
					<ControlButton
						key={item.buttonText}
						setter={item.setter}
						colorValue={item.colorValue}
						buttonText={item.buttonText}
					/>;
				})} */}
				<div
					onClick={() => setIsShowing(!isShowing)}
					style={{transform: `rotate(${isShowing ? `180deg` : `0deg`})`}}
					className="select-none cursor-pointer absolute -top-10 left-[45%] bg-white border border-[#ccc] w-14 h-14 rounded-full flex justify-center items-center font-bold text-[2em]"
				>
					^
				</div>
				{isShowing && (
					<>
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
						<ControlButton
							buttonType={"font"}
							buttonText={"Font"}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default ControlBar;
