import React, { useState, useEffect, useCallback } from "react";
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
	const container = React.useRef<HTMLDivElement>(null);

	const initialPosition = calculateInitialPosition(value, min, max);
	const [thumbLeft, setThumbLeft] = useState(
		`calc(${initialPosition}% - ${(initialPosition * 32) / 100}px)`
	);

	const updatePositions = useCallback(() => {
		const numValue = parseFloat(String(value));
		const numMin = parseFloat(String(min));
		const numMax = parseFloat(String(max));

		const percentage = ((numValue - numMin) / (numMax - numMin)) * 100;
		setThumbLeft(`calc(${percentage}% - ${(percentage * 32) / 100}px)`);
	}, [min, max, value]);

	useEffect(() => {
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

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = +e.target.value;
		if (newValue === value) return;
		const preciseValue = parseFloat(newValue.toFixed(10));
		onChangeHandler(preciseValue);
	};

	const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!container.current || !track.current) return;

		const rect = container.current.getBoundingClientRect();
		const clickPosition = e.clientX - rect.left;
		const trackWidth = rect.width;
		const percentage = (clickPosition / trackWidth) * 100;

		const numMin = parseFloat(String(min));
		const numMax = parseFloat(String(max));
		const newValue = numMin + (percentage / 100) * (numMax - numMin);

		const steppedValue = Math.round(newValue / Number(step)) * Number(step);

		if (track.current) {
			track.current.value = String(steppedValue);
			const event = new Event("input", {
				bubbles: true
			});
			track.current.dispatchEvent(event);
		}
	};

	function calculateInitialPosition(value: number, min: string | number, max: string | number) {
		const numValue = parseFloat(String(value));
		const numMin = parseFloat(String(min));
		const numMax = parseFloat(String(max));

		return ((numValue - numMin) / (numMax - numMin)) * 100;
	}

	return (
		<div
			ref={ container }
			className={ cx(
				"relative box-content h-xl py-xxs",
				rest.disabled && "pointer-events-none cursor-default opacity-60",
				className
			) }
			onClick={ handleTrackClick }
		>
			<input
				{ ...rest }
				ref={ track }
				className="absolute top-0 left-0 size-full cursor-pointer appearance-none bg-transparent"
				style={ {
					touchAction: "none",
				} }
				type="range"
				min={ min }
				max={ max }
				step={ step }
				value={ value }
				onChange={ handleOnChange }
				onTouchStart={ (e) => e.stopPropagation() }
				onTouchMove={ (e) => e.stopPropagation() }
			/>

			<div className="pointer-events-none absolute top-1/2 left-0 h-xxs w-full -translate-y-1/2 overflow-clip rounded-sm bg-secondary-alt">
				<div
					className="pointer-events-none absolute top-1/2 left-0 h-xxs -translate-y-1/2 rounded-sm bg-primary-600"
					style={ {
						width: `calc(${thumbLeft} + 16px)`,
					} }
				/>
			</div>
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
					"border-primary-600",
				) }
				ref={ thumb }
				style={ {
					left: thumbLeft,
				} }
			>
				<div className="absolute top-1/2 left-1/2 size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600" />
			</div>
		</div>
	);
};
