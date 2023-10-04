import styles from './style.module.css'

interface PopupProps {
	popupRef: React.MutableRefObject<HTMLDialogElement | null>
	popupText: string
	iconPath: string
}

export default function Popup({popupRef, popupText, iconPath}: PopupProps) {
	return (
		<dialog className={styles.dialog} ref={popupRef}>
			<p>
				<img src={iconPath} />
				{popupText}
			</p>
		</dialog>
	)
}
