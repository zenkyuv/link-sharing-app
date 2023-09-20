import {useState} from 'react'

import {Link} from '../../types'
import styles from './style.module.css'
import LinkBox from './components/link-box/component'
import Navigation from '../../components/navigation/component'
import SaveButton from '../../components/save-button/component'
import PreviewSection from '../../components/preview-section/component'

export default function Links() {
	const [links, setLinks] = useState<Link[]>([])

	const handle_button_save = () => {}

	const render_links = () => {
		return (
			<div className={styles.links}>
				{links.map((link, i) => (<LinkBox i={i} links={links} link={link} setLinks={setLinks} />))}
			</div>
		)
	}

	const render_empty_info = () => {
		return (
			<div className={styles.emptyBox}>
				<img className={styles.illustrationEmpty} src='./assets/images/illustration-empty.svg'/>
				<h1>Let's get you started</h1>
				<p>
					Use the “Add new link” button to get started. Once you have more than one link,
					you can reorder and edit them. We're here to help you share your profiles with everyone!
				</p>
			</div>
		)
	}

	return (
		<>
			<Navigation/>
			<form className={styles.container}>
				<PreviewSection links={links} />
				<div className={styles.customizeSection}>
					<h1>Customize your links</h1>
					<p>Add/edit/remove links below and then share all your profiles with the world!</p>
					<button
						type="button"
						disabled={links.length === 5}
						onPointerDown={() => setLinks((links) => [...links, {url: "", icon_src: "", platform: "Github"}])}
						className={styles.addLinkButton}>
						+ Add new link
					</button>
					{links.length > 0
						? render_links()
						: render_empty_info()
					}
					<SaveButton handle_button_save={handle_button_save} />
				</div>
			</form>
		</>
	)
}

