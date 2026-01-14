import React from "react";
import { EButtonSizes, EButtonTypes, EButtonWeight } from "./_types.ts";
import cx from "classnames";
import css from "./UiButton.module.css";

type PolymorphicProps<T extends React.ElementType> = {
	tag?: T;
	kind?: EButtonTypes;
	size?: EButtonSizes;
	fullWidth?: boolean;
	weight?: EButtonWeight;
	className?: string;
} & React.ComponentPropsWithoutRef<T>;

const typeClasses = {
	[EButtonTypes.PRIMARY_BRAND]: `
		bg-primary-600
		border
		border-primary-600
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_ACCENT]: `
		bg-primary-800
		border
		border-primary-800
		shadow-md
		text-white

		hover:bg-primary-700
		hover:border-primary-700
		active:bg-primary-800
		active:border-primary-800
		active:text-primary-100
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_NEUTRAL]: `
		bg-secondary-500
		border
		border-secondary-500
		shadow-md
		text-white

		hover:bg-secondary-400
		hover:border-secondary-400
		active:bg-secondary-500
		active:border-secondary-500
		active:text-secondary-alt-300
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_DESTRUCTIVE]: `
		bg-error-500
		border
		border-error-500
		shadow-md
		text-white

		hover:bg-error-600
		hover:border-error-600
		active:bg-error-700
		active:border-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.PRIMARY_INVERSE]: `
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		disabled:bg-secondary-alt-700
		disabled:border-secondary-alt-700
	`,
	[EButtonTypes.SECONDARY_BRAND]: `
		bg-white
		border
		border-primary-600
		shadow-md
		text-primary-600

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-700
		active:text-primary-700
		disabled:bg-white
		disabled:border-secondary-alt-300
		disabled:shadow-none
		disabled:text-secondary-alt-300
	`,
	[EButtonTypes.SECONDARY_ACCENT]: `
		bg-white
		border
		border-primary-800
		shadow-md
		text-primary-800

		hover:bg-primary-50
		hover:border-primary-700
		hover:text-primary-700
		active:bg-primary-100
		active:border-primary-800
		active:text-primary-800
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_NEUTRAL]: `
		bg-white
		border
		border-secondary-500
		shadow-md
		text-secondary-500

		hover:bg-secondary-alt-200
		hover:border-secondary-400
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:border-secondary-500
		active:text-secondary-500
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_DESTRUCTIVE]: `
		bg-white
		border
		border-error-500
		shadow-md
		text-error-500

		hover:bg-error-100
		hover:border-error-600
		hover:text-error-600
		active:bg-error-200
		active:border-error-700
		active:text-error-700
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.SECONDARY_INVERSE]: `
		bg-transparent
		border
		border-white
		shadow-md
		text-white

		hover:bg-secondary-500
		hover:border-secondary-alt-300
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active:border-white
		active:text-white
		disabled:bg-secondary-alt-300
		disabled:border-transparent
	`,
	[EButtonTypes.TERTIARY_BRAND]: `
		bg-transparent
		border
		border-transparent
		text-primary-600
		underline

		hover:bg-primary-50
		hover:no-underline
		active:bg-primary-100
		active:text-primary-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_ACCENT]: `
		bg-transparent
		border
		border-transparent
		text-primary-800
		underline

		hover:bg-primary-50
		hover:no-underline
		hover:text-primary-700
		active:bg-primary-100
		active:text-primary-800
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_NEUTRAL]: `
		bg-transparent
		border
		border-transparent
		text-secondary-500
		underline

		hover:bg-secondary-alt-200
		hover:no-underline
		hover:text-secondary-400
		active:bg-secondary-alt-300
		active:text-secondary-500
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_DESTRUCTIVE]: `
		bg-transparent
		border
		border-transparent
		text-error-500
		underline

		hover:bg-error-100
		hover:no-underline
		hover:text-error-600
		active:bg-error-200
		active:text-error-700
		disabled:bg-transparent
		disabled:text-secondary-alt-300
		disabled:underline
	`,
	[EButtonTypes.TERTIARY_INVERSE]: `
		bg-transparent
		border
		border-transparent
		text-white
		underline

		hover:bg-secondary-500
		hover:no-underline
		hover:text-secondary-alt-300
		active:bg-secondary-400
		active-text-white
		disabled:bg-transparent
		disabled:text-secondary-alt-700
		disabled:underline
	`,
};

const isInverseType = (type: EButtonTypes): boolean => {
	return (
		type === EButtonTypes.PRIMARY_INVERSE
		|| type === EButtonTypes.SECONDARY_INVERSE
		|| type === EButtonTypes.TERTIARY_INVERSE
	);
};

const focusColorClasses = {
	background: (type: EButtonTypes) =>
		isInverseType(type)
			? "focus-visible:before:bg-secondary-500"
			: "focus-visible:before:bg-white",
	border: (type: EButtonTypes) =>
		isInverseType(type)
			? "focus-visible:before:border-secondary-alt-400"
			: "focus-visible:before:border-primary-600"
};

const sizeClasses = {
	[EButtonSizes.XSMALL]: "px-xs py-xxs rounded-lg focus-visible:before:rounded-xl",
	[EButtonSizes.SMALL]: "px-sm py-xs rounded-xl focus-visible:before:rounded-2xl",
	[EButtonSizes.MEDIUM]: "py-sm px-smd rounded-xl focus-visible:before:rounded-2xl",
	[EButtonSizes.LARGE]: "px-md py-smd rounded-xl focus-visible:before:rounded-2xl",
};

const weightClasses = {
	[EButtonWeight.DEFAULT]: "font-medium",
	[EButtonWeight.BOLD]: "font-bold",
};

export function UiButton<T extends React.ElementType = "button">(
	{
		kind = EButtonTypes.PRIMARY_BRAND,
		size = EButtonSizes.MEDIUM,
		fullWidth = false,
		disabled = false,
		weight = EButtonWeight.BOLD,
		className,
		onClick,
		tag,
		...rest
	}: PolymorphicProps<T>
) {
	const Component = tag || "button";
	return <Component
		disabled={ disabled }
		onClick={ onClick }
		className={ cx(
			css.UiButton,
			"cursor-pointer",
			"touch-manipulation",
			"whitespace-nowrap",
			"leading-none",
			"flex",
			"gap-xs",
			"justify-center",
			"items-center",
			"relative",
			"transition-all",
			"focus-visible:before:border-2",
			"focus-visible:before:absolute",
			"focus-visible:before:-translate-x-1/2",
			"focus-visible:before:-translate-y-1/2",
			"focus-visible:before:left-1/2",
			"focus-visible:before:top-1/2",
			"focus-visible:before:inset-0",
			"focus-visible:before:z-[-1]",
			"focus-visible:before:w-[calc(100%+12px)]",
			"focus-visible:before:h-[calc(100%+10px)]",
			focusColorClasses.background(kind),
			focusColorClasses.border(kind),
			typeClasses[kind],
			sizeClasses[size],
			weightClasses[weight],
			{
				"w-full": fullWidth,
				"w-fit": !fullWidth,
				"pointer-events-none": disabled,
			},
			className
		) }
		{ ...rest }
	/>;

};
