import {useState} from "react"

import {Link} from "../../types"
import styles from './style.module.css'
import Navigation from "../../components/navigation/component"
import SaveButton from "../../components/save-button/component"
import PreviewSection from "../../components/preview-section/component"

function ProfileDetails() {

const [links, setLinks] = useState<Link[]>([])

const handle_button_save = () => {}

	return (
		<>
			<Navigation/>
			<form className={styles.container}>
				<PreviewSection links={links} />
				<div className={styles.profileDetails}>
					
					<div className={styles.headerText}>
						<h1>Profile Details</h1>
						<p>Add your details to create a personal touch to your profile.</p>
					</div>

					<div className={styles.profilePicture}>
						<p>Profile Picture</p>
						<label htmlFor="upload-image">
							<img src="/assets/images/icon-upload-image.svg" />
							<p>+ Upload Image</p>
							<input name="upload-image" id="upload-image" type="file"/>
						</label>
						<div>
							<p className={styles.smallText}>Image must be below 1024x1024px.</p>
							<p className={styles.smallText}>Use PNG or JPG format.</p>
						</div>
					</div>

					<div className={styles.profileInfo}>
						<label>
							<p>First name*</p>
							<input placeholder="e.g. John"/>
						</label>
						<label>
							<p>Last name*</p>
							<input placeholder="e.g. Appleseed"/>
						</label>
						<label>
							<p>Email</p>
							<input placeholder="e.g. email@example.com"/>
						</label>
					</div>

					<SaveButton handle_button_save={handle_button_save} />
				</div>
			</form>
		</>
	)
}

export default ProfileDetails
