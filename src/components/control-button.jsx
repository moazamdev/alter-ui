import React, { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { getTextColor } from "../utils";

const ControlButton = ({
	colorValue,
	setter,
	buttonText,
	buttonType = "color",
}) => {
	const [displayBox, setDisplayBox] = useState(false);

	const textColor =
		getTextColor(colorValue) > 0.5 ? "text-black" : "text-white";

	return buttonType == "color" ? (
		<div
			onClick={() => {
				setDisplayBox(!displayBox);
			}}
			className={`relative font-semibold text-center uppercase tracking-[2px] text-[13px] px-[30px] py-[20px] rounded-lg select-none cursor-pointer ${textColor}`}
			style={{ background: colorValue }}
		>
			{buttonText}
			{displayBox && (
				<div
					onClick={(e) => e.stopPropagation()}
					className="absolute bottom-[130%] left-0 right-0 w-fit h-auto p-4 bg-[#fff] rounded-lg flex justify-center items-center text-[10px] flex flex-col gap-[10px] cursor-default"
				>
					<HexColorPicker color={colorValue} onChange={setter} />
					<HexColorInput
						color={colorValue}
						onChange={setter}
						style={{
							borderRadius: "10px",
							width: "60%",
							height: "3em",
							background: "#ccc",
							color: "black",
							textAlign: "center",
							fontSize: "16px",
							outline: "none",
						}}
					/>
				</div>
			)}
		</div>
	) : (
		<div
			className={`relative bg-white text-black font-semibold text-center uppercase tracking-[2px] text-[13px] px-[30px] py-[20px] rounded-lg select-none cursor-pointer`}
		>
			{buttonText}
		</div>
	);
};

export default ControlButton;
