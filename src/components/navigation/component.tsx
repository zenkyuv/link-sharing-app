import styles from './style.module.css'

function Navigation() {

	return (
		<nav className={styles.navigation}>
			<ol>
				<li><img src="/assets/images/logo-devlinks-large.svg" /></li>
				<div className={styles.flexRow}>
					<li>
						<a href="#">
							<img src="/assets/images/icon-links-header.svg" />
							Links
						</a>
					</li>
					<li>
						<a href="#">
							<img src="/assets/images/icon-profile-details-header.svg" />
							Profile Details
						</a>
					</li>
				</div>
				<li><a className={styles.previewLink} href="#">Preview</a></li>
			</ol>
		</nav>
	)
}

export default Navigation
