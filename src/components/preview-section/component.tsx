import {Link} from '../../types'
import styles from './style.module.css'
import {get_icon_by_platform} from '../../utils/get_icon_by_platform'

interface PreviewSectionProps {
	links: Link[]
}

export default function PreviewSection({links}: PreviewSectionProps) {
	return (
		<div className={styles.previewSection}>
			<div className={styles.previewImageBox}>
				<div className={styles.addedLinks}>
					{links.map(link => (
						<div
								data-platform={link.platform}
								className={styles.addedLink}>
							<img className={styles.platformIcon} src={get_icon_by_platform(link.platform)} />
							<p>{link.platform}</p>
						</div>
					))}
				</div>
				<img src='./assets/images/illustration-phone-mockup.svg'/>
			</div>
		</div>
	)
}

