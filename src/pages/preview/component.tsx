import {Link} from "react-router-dom"

import styles from './style.module.css'

function Preview() {
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
			<div className={styles.profile}></div>
		</div>
	)
}

export default Preview
