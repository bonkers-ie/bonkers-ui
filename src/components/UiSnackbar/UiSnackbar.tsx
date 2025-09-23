import React, { useEffect, useRef, useState }  from "react";
import cx from "classnames";
import { ESnackbarDuration, ESnackbarTypes } from "./_types";

type UiSnackbarProps = {
	id: string;
	kind?: ESnackbarTypes;
	preIcon?: React.ReactNode;
	postIcon?: React.ReactNode;
	title: React.ReactNode;
	children?: React.ReactNode;
	className?: string
	duration?: ESnackbarDuration;
	pauseOnHover?: boolean;
	isDismissed?: boolean;
	onClickAction?: () => void;
	onDismissAction?: (id: string) => void;
}

const kindClasses = {
	[ESnackbarTypes.DEFAULT]: `
		bg-white
		text-secondary-700

	`,
	[ESnackbarTypes.PRIMARY]: `
		bg-primary-alt-700
		text-white
	`,
	[ESnackbarTypes.WARNING]: `
		bg-warning-600
		text-white
	`,
	[ESnackbarTypes.ERROR]: `
		bg-error
		text-white
	`,
	[ESnackbarTypes.SECONDARY]: `
		bg-secondary
		text-white
	`,

};

export const UiSnackbar: React.FC<UiSnackbarProps> = ({
	id,
	kind = ESnackbarTypes.SECONDARY,
	preIcon,
	postIcon,
	title,
	children,
	className,
	duration = ESnackbarDuration.INFINITE,
	pauseOnHover = true,
	onClickAction,
	onDismissAction,
	isDismissed
}) => {
	const [remainingTime, setRemainingTime] = useState(duration);
	const [isPaused, setIsPaused] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const pauseTimeRef = useRef<number>(0);
	const startTimeRef = useRef<number>(Date.now());
	const notificationRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number>(0);

	useEffect(() => {
		if (!isDismissed || !notificationRef.current) return;

		const handleAnimationEnd = () => {
			onDismissAction?.(id);
			if (timerRef.current) clearInterval(timerRef.current);
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};

		notificationRef.current.addEventListener("animationend", handleAnimationEnd);
		return () => {
			notificationRef.current?.removeEventListener("animationend", handleAnimationEnd);
		};
	}, [isDismissed]);

	useEffect(() => {
		if (duration === ESnackbarDuration.INFINITE) return;

		const updateTimer = () => {
			const elapsed = Date.now() - startTimeRef.current;
			const newRemaining = Math.max(0, duration - elapsed);
			setRemainingTime(newRemaining);

			if (newRemaining <= 0) {
				onClickAction?.();
				if (timerRef.current) clearInterval(timerRef.current);
			}
		};

		if (!isPaused) {
			if (pauseTimeRef.current) {
				const pausedDuration = Date.now() - pauseTimeRef.current;
				startTimeRef.current += pausedDuration;
				pauseTimeRef.current = 0;
			}

			updateTimer();
			timerRef.current = setInterval(updateTimer, 100);
		} else {
			if (timerRef.current) clearInterval(timerRef.current);
			pauseTimeRef.current = Date.now();
		}

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isPaused, duration]);

	const handleMouseEnter = () => {
		if (pauseOnHover) {
			setIsPaused(true);
		}
	};

	const handleMouseLeave = () => {
		if (pauseOnHover) {
			setIsPaused(false);
		}
	};
	return (

		<div
			className={ cx(
				"ui-snackbar",
				"relative",
				"overflow-clip",
				"flex",
				"w-full",
				"rounded-lg",
				"items-center",
				"justify-between",
				"shadow-md",
				"items-center",
				"px-sm",
				"py-xs",
				"flex-col",
				{
					"gap-y-xxxs": children,
				},
				"text-sm",
				kindClasses[kind],
				className
			) }
			ref={ notificationRef }
			onMouseEnter={ handleMouseEnter }
			onMouseLeave={ handleMouseLeave }
		>
			<div className="flex w-full justify-between">
				<div className="flex flex-row items-center gap-xxs">
					{ preIcon }
					{ title }
				</div>
				{ postIcon }
			</div>
			<div
				style={ {
					color: kind === ESnackbarTypes.DEFAULT
						? "black"
						: "white",
					fontWeight: "normal",
				} }
				className="w-full"
			>
				{ children }
			</div>
			<div
				className='absolute bottom-0 left-0 h-xxs bg-black opacity-30 bg-blend-color-burn'
				style={ {
					width: duration === ESnackbarDuration.INFINITE
						? "0%"
						: `${(remainingTime / duration) * 100}%`,
					transition: "width 0.1s linear",
				} }
			/>
		</div>
	);
};
