import {useRef} from "react"

import Popup from "../component"

export function prepare_popup(popup_text: string, icon_path: string) {
	const popupRef = useRef<null | HTMLDialogElement>(null)
	return {
		handle_popup() {
			if(popupRef && !popupRef.current?.open) {
				popupRef.current?.show()
				setTimeout(() => popupRef.current!.close(), 4000)
			}
		},
		popup: () => <Popup iconPath={icon_path} popupText={popup_text} popupRef={popupRef}  />
	}
}
