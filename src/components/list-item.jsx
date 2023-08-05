const ListItem = ({ item }) => {
	return (
		<li>
			<a
				className="text-text font-semibold text-[15px] hover:text-accent"
				href="#"
			>
				{item}
			</a>
		</li>
	);
};

export default ListItem;
