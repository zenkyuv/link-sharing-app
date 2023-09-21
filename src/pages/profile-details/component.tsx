import {FormEvent, ChangeEvent, useState} from "react"

import {ContextProp} from "../../types"
import styles from './style.module.css'
import Navigation from "../../components/navigation/component"
import SaveButton from "../../components/save-button/component"
import PreviewSection from "../../components/preview-section/component"

function ProfileDetails({context}: ContextProp) {

	const [image, setImage] = useState<string | undefined>(context.profile.image_url)

	const handle_form_submit = (e: FormEvent) => {
		e.preventDefault()
		const form = e.currentTarget as HTMLFormElement
		const formData = new FormData(form)
		const first_name = formData.get("first-name") as string
		const last_name = formData.get("last-name") as string
		const email = formData.get("email") as string
		if(first_name && last_name && email)
			context.profile_details = {
				first_name,
				last_name,
				email,
				image_url: image
			}
	}

	const handle_image_upload = (e: ChangeEvent<HTMLInputElement>) => {
		if(e.target?.files?.[0]) {
			const file = URL.createObjectURL(e.target.files[0])
				setImage(file)
		}
	}

console.log("rerender")

	return (
		<>
			<Navigation/>
			<form onSubmit={handle_form_submit} className={styles.container}>
				<PreviewSection links={context.profile.links} />
				<div className={styles.profileDetails}>
					
					<div className={styles.headerText}>
						<h1>Profile Details</h1>
						<p>Add your details to create a personal touch to your profile.</p>
					</div>

					<div className={styles.profilePicture}>
						<p>Profile Picture</p>
						<label htmlFor="upload-image">
							{image
								? <img src={image} />
								: <>
										<img src="/assets/images/icon-upload-image.svg" />
										<p>+ Upload Image</p>
									</>
							}
							<input onChange={handle_image_upload} accept="image/png, image/jpeg" name="upload-image" id="upload-image" type="file"/>
						</label>
						<div>
							<p className={styles.smallText}>Image must be below 1024x1024px.</p>
							<p className={styles.smallText}>Use PNG or JPG format.</p>
						</div>
					</div>

					<div className={styles.profileInfo}>
						<label>
							<p>First name*</p>
							<input defaultValue={context.profile.first_name} required name="first-name" placeholder="e.g. John"/>
						</label>
						<label>
							<p>Last name*</p>
							<input defaultValue={context.profile.last_name} required name="last-name" placeholder="e.g. Appleseed"/>
						</label>
						<label>
							<p>Email</p>
							<input defaultValue={context.profile.email} required type="email" name="email" placeholder="e.g. email@example.com"/>
						</label>
					</div>

					<SaveButton />
				</div>
			</form>
		</>
	)
}

export default ProfileDetails
