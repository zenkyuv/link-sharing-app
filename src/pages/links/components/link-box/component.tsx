import {useState} from 'react'

import styles from './style.module.css'
import {Platform} from '../../../../types'
import {Link, platforms} from '../../../../types'
import {get_icon_by_platform} from '../../utils/get_icon_by_platform'

export interface LinkBoxProps {
link: Link
links: Link[]
setLinks: React.Dispatch<React.SetStateAction<Link[]>>
i: number
}

export default function LinkBox({link, i, links, setLinks}: LinkBoxProps) {

	const [selectedPlatform, setSelectedPlatform] = useState<Platform>("Github")
	const [isSelectPopupOpen, setSelectPopupOpen] = useState(false)

	const handle_platform_change = (platform: Platform) => {
		setSelectedPlatform(platform)
		setSelectPopupOpen(false)
		const linksCopy = [...links]
		linksCopy[i] = {
			...linksCopy[i],
			platform
		}
		setLinks(linksCopy)
	}

	return (
		<div className={styles.link}>
			<div><span>Link #{i + 1}</span></div>
			<label>Platform</label>
			<div className={styles.selectedPlatform} onPointerDown={() => setSelectPopupOpen(!isSelectPopupOpen)}>
				<img src={get_icon_by_platform(selectedPlatform)} />
				<span>{selectedPlatform}</span>
			</div>
			<div data-opened={isSelectPopupOpen} className={styles.selectPopup}>
			{platforms.map((p) =>
				<div
					onPointerDown={() => handle_platform_change(p)}
					className={styles.platform}>
					<img src={get_icon_by_platform(p)} />
					<span>{p}</span>
				</div>
			)}
			</div>
			<label htmlFor="link">Link</label>
			<input
				placeholder="e.g. https://www.github.com/johnappleseed"
				name="link"
				value={link.url} 
			/>
		</div>
	)
}

