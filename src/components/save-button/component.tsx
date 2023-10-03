import styles from './style.module.css'

import { useRef } from 'react'

export default function SaveButton() {

const dialogRef = useRef<HTMLDialogElement | null>(null)

	const show_timed_modal = () => {
		if(dialogRef && !dialogRef.current?.open) {
			dialogRef.current?.show()
			setTimeout(() => dialogRef.current!.close(), 4000)
		}
	}

return (
	<>
		<div className={styles.buttonBox}>
			<div className={styles.buttonBorder}></div>
			<button onClick={show_timed_modal}>Save</button>
		</div>
		<dialog ref={dialogRef}><p><img src="./assets/images/icon-changes-saved.svg" />Your changes have been successfully saved!</p></dialog>
	</>
	)
}
