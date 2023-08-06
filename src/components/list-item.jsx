import React from "react";
import { useColorContext } from "../color-context";

const ListItem = ({ item }) => {
	const { text, accent } = useColorContext();

	return (
		<li>
			<a
				style={{ color: text }}
				onMouseEnter={(e) => {
					e.target.style.color = accent;
				}}
				onMouseLeave={(e) => {
					e.target.style.color = text;
				}}
				className="font-semibold text-[15px]"
				href="#"
			>
				{item}
			</a>
		</li>
	);
};

export default ListItem;
