const WrapperSection = ({ children }) => {
	return (
		<section className="flex flex-col justify-center items-center mx-auto my-0 px-2.5 py-[20px] lg:py-[50px]">
			<div className="container relative w-[min(100%_-_15px,1250px)] flex justify-center flex-col lg:flex-row mx-auto my-0 p-1.5 sm:p-2.5">
				{children}
			</div>
		</section>
	);
};

export default WrapperSection;
