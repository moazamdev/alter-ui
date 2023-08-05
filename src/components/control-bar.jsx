import ControlButton from "./control-button";

const ControlBar = () => {
	// let classes =
	// 	"relative font-semibold text-center uppercase tracking-[2px] text-[13px] px-[30px] py-[20px] rounded-lg select-none cursor-pointer";
	return (
		<div className="flex justify-center items-center w-full mx-auto my-0 px-2.5 py-[20px] md:py-[50px]">
			<div className="w-[min(100%_-_15px,1250px)] border border-[#bbb] p-[15px] rounded-lg grid grid-cols-6 gap-[10px] bg-[#ccc] fixed bottom-[10px] drop-shadow-2xl">
				<ControlButton colorValue={"#010205"} buttonText={"Primary"} />

				<ControlButton
					colorValue={"#EBEBEB"}
					buttonText={"Secondary"}
				/>
				<ControlButton colorValue={"#656565"} buttonText={"Text"} />
				<ControlButton colorValue={"#669C30"} buttonText={"Accent"} />
				<ControlButton
					colorValue={"#F9F9F9"}
					buttonText={"Background"}
				/>
				<ControlButton
					colorValue={"#ffffff"}
					buttonText={"Background"}
				/>

				{/* <div
					// onClick={() => alert("hello")}
					className={`${classes} bg-primary text-white`}
				>
					Primary
					<div className="absolute bottom-[130%] left-0 right-0 w-[300px] h-auto p-5 bg-[#fff] rounded-lg flex justify-center items-center text-[10px] flex flex-col gap-[10px]">
						<HslaColorPicker />
						<HexColorInput
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
				</div> */}
				{/* <div className={`${classes} bg-secondary text-black`}>
					Secondary
				</div>
				<div className={`${classes} bg-text text-white`}>Text</div>
				<div className={`${classes} bg-accent text-white`}>Accent</div>
				<div className={`${classes} bg-mainbg text-black`}>
					Background
				</div>
				<div className={`${classes} bg-white text-black`}>Font</div> */}
			</div>
		</div>
	);
};

export default ControlBar;
