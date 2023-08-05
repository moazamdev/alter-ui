const ControlBar = () => {
	let classes =
		"font-semibold text-center text-white uppercase tracking-[2px] text-[13px] bg-primary px-[30px] py-[20px] rounded-lg select-none";
	return (
		<div className="flex justify-center items-center w-full mx-auto my-0 px-2.5 py-[20px] md:py-[50px]">
			<div className="w-[min(100%_-_15px,1250px)] border border-[#bbb] p-[15px] rounded-lg grid grid-cols-6 gap-[10px] bg-[#ccc] fixed bottom-[10px] drop-shadow-2xl">
				<div className={classes}>Primary</div>
				<div className={classes}>Secondary</div>
				<div className={classes}>Text</div>
				<div className={classes}>Accent</div>
				<div className={classes}>Background</div>
				<div className={classes}>Font</div>
			</div>
		</div>
	);
};

export default ControlBar;
