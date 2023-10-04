import {useEffect, useState} from 'react'

import styles from './style.module.css'
import {Link, platforms, Platform} from '../../../../types'
import {get_icon_by_platform} from '../../../../utils/get_icon_by_platform'

interface LinkBoxProps {
	link: Link
	links: Link[]
	setLinks: React.Dispatch<React.SetStateAction<Link[]>>
	index: number
}

export default function LinkBox({link, index, links, setLinks}: LinkBoxProps) {
	const [selectedPlatform, setSelectedPlatform] = useState<Platform>(link.platform)
	const [isSelectPopupOpen, setSelectPopupOpen] = useState(false)

	const handle_platform_change = (platform: Platform) => {
		setSelectedPlatform(platform)
		setSelectPopupOpen(false)
		const linksCopy = [...links]
		linksCopy[index] = {
			...linksCopy[index],
			platform
		}
		setLinks(linksCopy)
	}

	useEffect(() => {
		setSelectedPlatform(link.platform)
	}, [links])

	return (
		<div
			className={styles.link}>
			<div className={styles.flexRow}><img src="./assets/images/icon-drag-and-drop.svg"/><span>Link #{index + 1}</span></div>
			<label>Platform</label>
			<div tabIndex={0} className={styles.selectedPlatform} onPointerDown={() => setSelectPopupOpen(!isSelectPopupOpen)}>
				<img src={get_icon_by_platform(selectedPlatform)} />
				<input name="selected-platform" onChange={() => {}} value={selectedPlatform} />
			</div>
			<div data-opened={isSelectPopupOpen} className={styles.selectPopup}>
			{platforms.map((p, i) =>
				<div
					key={i}
					data-selected={selectedPlatform === p}
					onPointerDown={() => handle_platform_change(p)}
					className={styles.platform}>
					<img src={get_icon_by_platform(p)} />
					<span>{p}</span>
				</div>
			)}
			</div>
			<label htmlFor="url">Link</label>
			<input
				type='url'
				required
				tabIndex={0}
				className={styles.url}
				placeholder="e.g. https://www.github.com/johnappleseed"
				name="url"
			/>
		</div>
	)
}

