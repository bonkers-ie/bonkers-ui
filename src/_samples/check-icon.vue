<template>
	<svg
		:width="size"
		:height="size"
		:class="classes"
		viewBox="0 0 16 11"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			stroke="currentColor"
			d="M15 2.03125L6.5 10.5312C6.375 10.6875 6.1875 10.75 6 10.75C5.78125 10.75 5.59375 10.6875 5.46875 10.5312L0.96875 6.03125C0.65625 5.75 0.65625 5.28125 0.96875 5C1.25 4.6875 1.71875 4.6875 2 5L6 8.96875L13.9688 1C14.25 0.6875 14.7188 0.6875 15 1C15.3125 1.28125 15.3125 1.75 15 2.03125Z"
		/>
	</svg>
</template>

<script lang="ts" setup>
	defineProps<{
		size?: number;
		classes?: string;
	}>();
</script>
