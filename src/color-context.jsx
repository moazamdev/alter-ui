import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const useColorContext = () => {
	return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
	const [primary, setPrimary] = useState("#010205");
	const [secondary, setSecondary] = useState("#EBEBEB");
	const [text, setText] = useState("#656565");
	const [accent, setAccent] = useState("#4b9600");
	const [background, setBackground] = useState("#F9F9F9");

	const colorValues = {
		primary,
		setPrimary,
		secondary,
		setSecondary,
		text,
		setText,
		accent,
		setAccent,
		background,
		setBackground,
	};

	return (
		<ColorContext.Provider value={colorValues}>
			{children}
		</ColorContext.Provider>
	);
};
