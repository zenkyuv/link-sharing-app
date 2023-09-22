import {ReactElement} from 'react'

import LinkBox from '../link-box/component'
import {Link, Destination} from '../../../../types'

interface LinkBoxProps {
	children: ReactElement<typeof LinkBox>
	setLinks: React.Dispatch<React.SetStateAction<Link[]>>
	link: Link
	index: number
	source: Destination
	setSource: React.Dispatch<React.SetStateAction<Destination>>
}

export default function DragDropWrapper({
	children,
	setLinks,
	link,
	index,
	source,
	setSource
}: LinkBoxProps) {

	const on_drag_start = (source: Destination) => {
		setSource(source)
	}

	const on_drag_drop = (target: Destination) => {
		setLinks((links) => {
			const links_copy = [...links]
			links_copy[source!.index!] = target.link!
			links_copy[target!.index!] = source.link!
			return links_copy
		})
	}

	return (
		<div
			draggable="true"
			onDragStart={() => on_drag_start({link, index})}
			onDrop={() => on_drag_drop({link, index})}
			onDragOver={(e) => e.preventDefault()}
		>
			{children}
		</div>
	)
}

