import {Link, useLocation} from 'react-router-dom'

import styles from './style.module.css'

function Navigation() {

	const location = useLocation()

	return (
		<nav className={styles.navigation}>
			<ol>
				<li className={styles.icon}></li>
				<div className={styles.flexRow}>
					<li>
						<Link className={location.pathname === "/links" ? styles.active : ""} to="/links">
							<img src="/assets/images/icon-links-header.svg" />
							<span>Links</span>
						</Link>
					</li>
					<li>
						<Link className={location.pathname === "/profile-details" ? styles.active : ""} to="/profile-details">
							<img src="/assets/images/icon-profile-details-header.svg" />
							<span>Profile Details</span>
						</Link>
					</li>
				</div>
				<li><Link className={styles.previewLink} to="/preview">Preview</Link></li>
			</ol>
		</nav>
	)
}

export default Navigation
