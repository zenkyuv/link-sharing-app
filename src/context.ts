import {Link, Profile, ProfileDetails} from "./types"

export class Context {

	profile: Profile = {
		first_name: "",
		last_name: "",
		image_url: "",
		email: "",
		links: []
	}

	constructor() {}

	set image_url(url: string) {
		this.profile.image_url = url
	}

	set profile_links(links: Link[]) {
		this.profile.links = links
	}

	set profile_details({first_name, last_name, email, image_url}: ProfileDetails) {
		this.profile = {
			...this.profile,
			first_name,
			last_name,
			email,
			image_url
		}
	}

}
