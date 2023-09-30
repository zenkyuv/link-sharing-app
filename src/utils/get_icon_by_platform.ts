import {Platform} from "../types.js"

export function get_icon_by_platform(platform: Platform) {
	return `./assets/images/icon-${platform.split(" ").join("").toLowerCase()}.svg`
}
