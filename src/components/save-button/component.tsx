import styles from './style.module.css'
import {prepare_popup} from '../popup/utils/prepare_popup'

export default function SaveButton() {

	const {handle_popup, popup} = prepare_popup(
		"Your changes have been successfully saved!",
		"./assets/images/icon-changes-saved.svg"
	)

return (
	<>
		<div className={styles.buttonBox}>
			<div className={styles.buttonBorder}></div>
			<button onClick={handle_popup}>Save</button>
		</div>
		{popup()}
	</>
	)
}
