import React from "react";
import { ETextAlign, ETextTransform, ETextWeight, ETypographySizes } from "./_types.ts";
import { EColors, colorClasses } from "../../_types/colors.ts";
import cx from "classnames";

type TUiTypographyProps<T extends keyof React.JSX.IntrinsicElements> = {
	tag?: T;
	children?: React.ReactNode;
	underline?: boolean;
	lineHeight?: boolean;
	lineHeightLegacy?: boolean;
	size?: ETypographySizes;
	textTransform?: ETextTransform;
	align?: ETextAlign;
	weight?: ETextWeight;
	color?: EColors;
} & Omit<React.JSX.IntrinsicElements[T], "children" | "ref">;

const sizeClasses = {
	[ETypographySizes.XXS]: "text-xxs",
	[ETypographySizes.XS]: "text-xs",
	[ETypographySizes.SM]: "text-sm",
	[ETypographySizes.MD]: "text-md",
	[ETypographySizes.LG]: "text-lg",
	[ETypographySizes.XL]: "text-xl",
	[ETypographySizes.XXL]: "text-2xl",
	[ETypographySizes.XXXL]: "text-3xl",
	[ETypographySizes.XXXXL]: "text-4xl",
	[ETypographySizes.XXXXXL]: "text-5xl",
};

const lineHeightClasses = {
	[ETypographySizes.XXS]: "leading-normal",
	[ETypographySizes.XS]: "leading-[150%]",
	[ETypographySizes.SM]: "leading-[145%]",
	[ETypographySizes.MD]: "leading-[150%]",
	[ETypographySizes.LG]: "leading-[155%]",
	[ETypographySizes.XL]: "leading-[140%]",
	[ETypographySizes.XXL]: "leading-[135%]",
	[ETypographySizes.XXXL]: "leading-[142%]",
	[ETypographySizes.XXXXL]: "leading-[125%]",
	[ETypographySizes.XXXXXL]: "leading-[140%]",
};

const textTransformClasses = {
	[ETextTransform.UPPERCASE]: "uppercase",
	[ETextTransform.LOWERCASE]: "lowercase",
	[ETextTransform.NONE]: "normal-case",
	[ETextTransform.CAPITALIZE]: "capitalize",
};

const alignClasses = {
	[ETextAlign.LEFT]: "text-left",
	[ETextAlign.RIGHT]: "text-right",
	[ETextAlign.CENTER]: "text-center",
};

const weightClasses = {
	[ETextWeight.LIGHT]: "font-light",
	[ETextWeight.REGULAR]: "font-medium",
	[ETextWeight.SEMI_BOLD]: "font-bold",
	[ETextWeight.BOLD]: "font-black",
};

export const UiTypography = <T extends keyof React.JSX.IntrinsicElements> (
	{
		children,
		tag,
		underline = false,
		lineHeight = false,
		size,
		textTransform,
		align,
		weight,
		color,
		className,
		lineHeightLegacy,
		...rest
	}: TUiTypographyProps<T> ): React.JSX.Element => {

	const classes = cx(
		"ui-typography",
		{
			underline
		},
		lineHeight
			? lineHeightClasses[size || ETypographySizes.XXS]
			: lineHeightLegacy
				? "leading-normal"
				: "leading-none",
		size && sizeClasses[size],
		textTransform && textTransformClasses[textTransform],
		align && alignClasses[align],
		weight && weightClasses[weight],
		color && colorClasses[color],
		className
	);

	return React.createElement(tag || "p", {
		className: classes,
		...rest
	}, children);
};
