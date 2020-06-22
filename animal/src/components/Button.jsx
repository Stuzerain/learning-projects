import React from "react";
import "./button.css";

const STYLES = [
	"btn--primary--solid",
	"btn--danger--solid",
	"btn--primary--outline",
	"btn--danger--outline",
];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	id,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
			id={id}
		>
			{children}
		</button>
	);
};
