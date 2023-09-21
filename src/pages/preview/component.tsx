import {Link} from "react-router-dom"

import styles from './style.module.css'
import {ContextProp} from "../../types"
import {get_icon_by_platform} from "../../utils/get_icon_by_platform"

function Preview({context}: ContextProp) {
	return (
		<div className={styles.preview}>
			<div className={styles.background}></div>
			<div className={styles.navigation}>
				<nav>
					<Link to="/links">
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
				{context.profile.links.map(link => (
					<div className={styles.platform} data-platform={link.platform}>
						<img src={get_icon_by_platform(link.platform)} />
						<p>{link.platform}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Preview
