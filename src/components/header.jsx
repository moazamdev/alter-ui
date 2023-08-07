import ButtonComponent from "./button-component";
import ListItem from "./list-item";
import LogoBox from "./logo-box";

const Header = () => {
	const navItemsArr = [
		{
			text: "Services",
		},
		{
			text: "Agency",
		},
		{
			text: "Case Study",
		},
		{
			text: "Resources",
		},
		{
			text: "Contact",
		},
	];
	return (
		<header
			className="flex flex-col justify-center items-center mx-auto my-0 px-2.5 py-[15px] md:py-[30px]"
			style={{ borderBottom: "1px solid rgba(125, 125, 125, 0.3)" }}
		>
			<div className="container relative w-[min(100%_-_15px,1250px)] flex justify-between mx-auto my-0 px-1.5 sm:px-2.5">
				<LogoBox />

				<div className="lg:show nav-box md:w-[50%] md:self-center">
					<nav className="">
						<ul className="flex flex-row justify-between items-center self-center">
							{/* {navItemsArr.map((navItem) => {
								<ListItem
									key={navItem.text}
									item={navItem.text}
								/>;
							})} */}
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
