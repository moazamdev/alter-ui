import React, { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

const ControlButton = ({ colorValue, buttonText }) => {
	const [color, setColor] = useState(colorValue);
	console.log("colorValue: ", colorValue);
	console.log("color: ", color);
	console.log(typeof color);
	return (
		<div
			className={`relative font-semibold text-center uppercase tracking-[2px] text-[13px] px-[30px] py-[20px] rounded-lg select-none cursor-pointer text-white bg-[${color}]`}
		>
			{buttonText}
			<div className="absolute bottom-[130%] left-0 right-0 w-fit h-auto p-4 bg-[#fff] rounded-lg flex justify-center items-center text-[10px] flex flex-col gap-[10px] cursor-default">
				<HexColorPicker color={color} onChange={setColor} />
				<HexColorInput
					color={color}
					onChange={setColor}
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
		</div>
	);
};

export default ControlButton;
