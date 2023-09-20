
import styles from './style.module.css'

interface ButtonProps {
	handle_button_save: () => void
}

export default function SaveButton({handle_button_save}: ButtonProps) {

  return (
		<div className={styles.buttonBox}>
			<div className={styles.buttonBorder}></div>
			<button onPointerDown={handle_button_save}>Save</button>
		</div>
  )
}
