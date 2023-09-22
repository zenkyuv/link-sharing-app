import styles from './style.module.css'

export default function SaveButton() {

return (
		<div className={styles.buttonBox}>
			<div className={styles.buttonBorder}></div>
			<button>Save</button>
		</div>
	)
}
