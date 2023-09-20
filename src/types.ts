export const platforms = ["Github", "Frontend Mentor", "Twitter", "LinkedIn", "YouTube",
	"Facebook", "Twitch", "Dev.to", "Codewars", "Codepen", "freeCodeCamp",
	"GitLab", "Hashnode", "Stack Overflow"] as const

export type Platform = typeof platforms[number]

export interface Link {
	platform: Platform
	icon_src: string
	url: string
}


