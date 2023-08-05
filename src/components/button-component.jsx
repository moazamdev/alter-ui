const ButtonComponent = ({ text, onClick, theme = "primary" }) => {
	return (
		<button
			onClick={onClick}
			className={`btn border hover:border-primary ${
				theme == "primary"
					? "bg-accent text-white hover:bg-primary border-accent"
					: "bg-secondary text-primary hover:bg-primary hover:text-secondary border-secondary "
			} text-[15px] px-[32px] py-[12px] rounded-full font-regular transition`}
		>
			{text}
		</button>
	);
};

export default ButtonComponent;
