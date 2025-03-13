export interface IUiFeefoReview {
	author: string
	timeAgo: string
	title: string
	content: string
	rating: number
}

export interface IUiFeefo {
	/**
     * The overall rating out of 5
     */
	overallRating: number
	/**
     * Total number of reviews
     */
	totalReviews: number
	/**
     * Array of review objects
     */
	reviews: IUiFeefoReview[]
}