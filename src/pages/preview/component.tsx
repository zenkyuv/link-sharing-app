import {Link} from "react-router-dom"

import styles from './style.module.css'
import {ContextProp} from "../../types"
import {get_icon_by_platform} from "../../utils/get_icon_by_platform"
import {prepare_popup} from "../../components/popup/utils/prepare_popup"

function Preview({context}: ContextProp) {

	const {handle_popup, popup} = prepare_popup(
		"The link has been copied to your clipboard!",
		"./assets/images/icon-link-copied-to-clipboard.svg"
	)

	const handle_copy_to_clipboard = (url: string) => {
		navigator.clipboard
			.writeText(url)
	}
	
	return (
		<div className={styles.preview}>
			<div className={styles.background}></div>
			<div className={styles.navigation}>
				<nav>
					<Link to="/">
						Back to Editor
					</Link>
				</nav>
				<button>Share Link</button>
			</div>
			<div className={styles.profile}>
				<div className={styles.avatar}>
					<img src={context.profile.image_url} />
					<h1>{context.profile.first_name} {context.profile.last_name}</h1>
					<p>{context.profile.email}</p>
				</div>
				{context.profile.links.map((link, i) => (
					<div onClick={() => {handle_popup(), handle_copy_to_clipboard(link.url)}} key={i} className={styles.platform} data-platform={link.platform}>
						<div className={styles.flexRow}>
							<img src={get_icon_by_platform(link.platform)} />
							<p>{link.platform}</p>
						</div>
						<img src="./assets/images/icon-arrow-right.svg" />
					</div>
				))}
			</div>
			{popup()}
		</div>
	)
}

export default Preview
