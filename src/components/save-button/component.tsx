import styles from './style.module.css'
import {prepare_popup} from '../popup/utils/prepare_popup'

interface SaveButtonProps {
	formRef: React.MutableRefObject<HTMLFormElement | null>
}

export default function SaveButton({formRef}: SaveButtonProps) {

	const {handle_popup, popup} = prepare_popup(
		"Your changes have been successfully saved!",
		"./assets/images/icon-changes-saved.svg"
	)

	const handle_button_submit = (e: React.MouseEvent) => {
		const button = e.target as HTMLButtonElement
		const form = formRef.current
		if(form) {
			const isValid = form.checkValidity()
			if(isValid) {
				handle_popup()
				button.removeAttribute("error")
			} else button.setAttribute("error", "")
		}
	}

return (
	<>
		<div className={styles.buttonBox}>
			<div className={styles.buttonBorder}></div>
			<button onClick={handle_button_submit}>Save</button>
		</div>
		{popup()}
	</>
	)
}
