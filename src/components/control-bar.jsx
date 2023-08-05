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
				<ControlButton colorValue={"#ffffff"} buttonText={"Font"} />
			</div>
		</div>
	);
};

export default ControlBar;
