import type { Meta, StoryObj } from "@storybook/react";
import { UiFeefo } from "./UiFeefo";

const meta: Meta<typeof UiFeefo> = {
	title: "Components/UiFeefo",
	component: UiFeefo,
	tags: ["autodocs"],
	parameters: {
		layout: "centered"
	}
};

export default meta;
type Story = StoryObj<typeof UiFeefo>;

export const Default: Story = {
	args: {
		overallRating: 4.7,
		totalReviews: 6704,
		reviews: [
			{
				author: "Customer",
				timeAgo: "about 18 hours ago",
				title: "Lots of Choices - Easy to Switch",
				content: "Gives plenty of options and the transfer over to a new supplier seems easy",
				rating: 5
			},
			{
				author: "Customer",
				timeAgo: "2 days ago",
				title: "Excellent website",
				content: "Website was very easy to use and changeover to new provider was seamless",
				rating: 5
			}
		]
	}
};
