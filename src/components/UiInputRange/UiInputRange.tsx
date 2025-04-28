import React from "react";
import cx from "classnames";
import styles from "./UiInputRange.module.css";

export type TUiInputRangeProps = {
	value: number;
	min: string | number;
	max: string | number;
	step: string | number;
	onChangeHandler: (value: number) => void;
	className?: string;
} & React.HTMLProps<HTMLInputElement>;

export const UiInputRange: React.FC<TUiInputRangeProps> = ({
	value,
	min,
	max,
	step,
	onChangeHandler,
	className,
	...rest
}) => {
	const track = React.useRef<HTMLInputElement>(null);
	const thumb = React.useRef<HTMLDivElement>(null);
	const [position, setPosition] = React.useState(0);

	const updatePositions = React.useCallback(() => {
		if (!track.current || !thumb.current) return;

		const numValue = parseFloat(String(value));
		const numMin = parseFloat(String(min));
		const numMax = parseFloat(String(max));

		const thumbWidth = thumb.current?.getBoundingClientRect().width ?? 0;
		const trackWidth = track.current?.getBoundingClientRect().width ?? 0;

		if (trackWidth === 0) return;

		const percentage = ((numValue - numMin) / (numMax - numMin)) * 100;
		const thumbWidthPercentage = (thumbWidth / trackWidth) * 100;

		const adjustedPercentage = Math.max(0, Math.min(100, percentage * (1 - thumbWidthPercentage / 100)));

		setPosition(adjustedPercentage);
	}, [min, max, value]);

	React.useEffect(() => {
		updatePositions();

		const resizeObserver = new ResizeObserver(() => {
			updatePositions();
		});

		if (track.current) {
			resizeObserver.observe(track.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, [updatePositions]);

	const handleOnChange = (newValue: number) => {
		if (newValue === value) return;
		const preciseValue = parseFloat(newValue.toFixed(10));
		onChangeHandler(preciseValue);
	};

	return (
		<div
			className={ cx(
				"relative box-content h-xl py-xxs",
				rest.disabled && "opacity-60 cursor-default pointer-events-none",
				className
			) }
		>
			<input
				{ ...rest }
				ref={ track }
				className="absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent"
				style={ {
					touchAction: "none",
				} }
				type="range"
				min={ min }
				max={ max }
				step={ step }
				value={ value }
				onChange={ (e) => handleOnChange(+e.target.value) }
				onTouchStart={ (e) => e.stopPropagation() }
				onTouchMove={ (e) => e.stopPropagation() }
			/>

			<div className="pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded-sm bg-secondary-alt" />

			<div
				className="pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded-sm bg-primary"
				style={ {
					width: `${position}%`,
				} }
			/>

			<div
				className={ cx(
					styles.thumb,
					"pointer-events-none",
					"absolute",
					"box-content",
					"size-md",
					"-translate-y-1/2",
					"rounded-full",
					"bg-white",
					"border-primary",
				) }
				ref={ thumb }
				style={ {
					left: `${position}%`,
				} }
			>
				<div className="absolute left-1/2 top-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
			</div>
		</div>
	);
};
