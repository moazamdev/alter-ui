import ButtonComponent from "./button-component";
import ListItem from "./list-item";
import LogoBox from "./logo-box";

const Header = () => {
	return (
		<header
			className="flex flex-col justify-center items-center mx-auto my-0 px-2.5 py-[30px]"
			style={{ borderBottom: "1px solid rgba(125, 125, 125, 0.4)" }}
		>
			<div className="container relative w-[min(100%_-_15px,1250px)] flex justify-between mx-auto my-0 px-1.5 sm:px-2.5">
				<LogoBox />

				<div className="nav-box w-[50%] self-center">
					<nav className="">
						<ul className="flex flex-row justify-between items-center self-center">
							<ListItem item={"Services"} />
							<ListItem item={"Agency"} />
							<ListItem item={"Case Study"} />
							<ListItem item={"Resources"} />
							<ListItem item={"Contact"} />
						</ul>
					</nav>
				</div>

				<div className="button-box">
					<ButtonComponent theme="primary" text={"Get Started"} />
				</div>
			</div>
		</header>
	);
};

export default Header;
