import {Link} from 'react-router-dom'

import styles from './style.module.css'

function Navigation() {

	return (
		<nav className={styles.navigation}>
			<ol>
				<li><img src="/assets/images/logo-devlinks-large.svg" /></li>
				<div className={styles.flexRow}>
					<li>
						<Link to="/links">
							<img src="/assets/images/icon-links-header.svg" />
							Links
						</Link>
					</li>
					<li>
						<Link to="/profile-details">
							<img src="/assets/images/icon-profile-details-header.svg" />
							Profile Details
						</Link>
					</li>
				</div>
				<li><Link className={styles.previewLink} to="/preview">Preview</Link></li>
			</ol>
		</nav>
	)
}

export default Navigation
