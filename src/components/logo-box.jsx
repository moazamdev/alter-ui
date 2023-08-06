import { useColorContext } from "../color-context";

const LogoBox = () => {
	const { primary, accent } = useColorContext();
	return (
		<div className="logo-box self-center">
			<div
				style={{ color: primary }}
				className={`logo text-[30px] font-bold`}
			>
				Alter
				<span style={{ color: accent }} className="text-accent">
					UI
				</span>
			</div>
		</div>
	);
};

export default LogoBox;
