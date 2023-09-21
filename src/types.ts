import {Context} from "./context"

export const platforms = ["Github", "Frontend Mentor", "Twitter", "LinkedIn", "YouTube",
	"Facebook", "Twitch", "Dev.to", "Codewars", "Codepen", "freeCodeCamp",
	"GitLab", "Hashnode", "Stack Overflow"] as const

export type Platform = typeof platforms[number]

export interface Link {
	platform: Platform
	icon_src: string
	url: string
}

export interface ProfileDetails extends Omit<Profile, "links"> {}

export interface Profile {
	first_name: string
	last_name: string
	email: string
	image_url: string | undefined
	links: Link[]
}

export interface ContextProp {
	context: Context
}
