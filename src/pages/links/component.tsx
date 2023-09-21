import {useState, FormEvent} from 'react'

import styles from './style.module.css'
import {ContextProp, Link, Platform} from '../../types'
import Navigation from '../../components/navigation/component'
import PreviewSection from '../../components/preview-section/component'
import CustomizeSection from './components/customize-section/component'

export default function Links({context}: ContextProp) {
	const [links, setLinks] = useState<Link[]>(context.profile.links)
	
	const handle_form_submit = (e: FormEvent) => {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement
		const formData = new FormData(form)
		const selected_platforms = formData.getAll("selected-platform") as Platform[]
		const urls = formData.getAll("url") as string[]
		const new_links = selected_platforms.map((platform, i) => ({
			platform,
			icon_src: "",
			url: urls[i]
		}))
		context.profile_links = new_links
	}

	return (
		<>
			<Navigation/>
			<form onSubmit={handle_form_submit} className={styles.container}>
				<PreviewSection links={links} />
				<CustomizeSection links={links} setLinks={setLinks} />
			</form>
		</>
	)
}

