export function debounce(func:(args: unknown[])=>void, delay?: number) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (...args: unknown[]) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(args);
		}, delay);
	};
}
