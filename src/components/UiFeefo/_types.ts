export interface IUiFeefoReview {
	author: string
	timeAgo: string
	title: string
	content: string
	rating: number
}

export interface IUiFeefo {
	overallRating: number
	totalReviews: number
	reviews: [IUiFeefoReview, IUiFeefoReview] // Tuple type for exactly two reviews
}