import React, { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

const ControlButton = ({ colorValue, buttonText }) => {
	const [color, setColor] = useState(colorValue);
	console.log("colorValue: ", colorValue);
	console.log("color: ", color);
	console.log(typeof color);
	const getTextColor = (backgroundColor) => {
		// Convert background color to RGB values
		const rgb = parseInt(backgroundColor.slice(1), 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;

		// Calculate brightness using luminance formula
		const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

		// Return dark or light text color based on brightness
		return brightness > 0.5 ? "text-black" : "text-white";
	};
	return (
		<div
			className={`relative font-semibold text-center uppercase tracking-[2px] text-[13px] px-[30px] py-[20px] rounded-lg select-none cursor-pointer ${getTextColor(
				color
			)}`}
			style={{ background: color }}
		>
			{buttonText}
			{/* <div className="absolute bottom-[130%] left-0 right-0 w-fit h-auto p-4 bg-[#fff] rounded-lg flex justify-center items-center text-[10px] flex flex-col gap-[10px] cursor-default">
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
			</div> */}
		</div>
	);
};

export default ControlButton;
