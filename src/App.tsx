import './App.css'
import {useEffect, useState} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'

import {Context} from './context'
import Links from './pages/links/component'
import Preview from './pages/preview/component'
import ProfileDetails from './pages/profile-details/component'

function App() {

	const [context] = useState(new Context())
	const location = useLocation()
	const [displayLocation, setDisplayLocation] = useState(location)
	const [transitionStage, setTransistionStage] = useState("fadeIn")

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut")
	}, [location, displayLocation])

	const handleAnimationEnd = () => {
		if (transitionStage === "fadeOut") {
			setTransistionStage("fadeIn")
			setDisplayLocation(location)
		}
	}

	return (
		<div
			className={`${transitionStage} flexColumn`}
			onAnimationEnd={handleAnimationEnd}
		>
			<Routes location={displayLocation}>
				<Route path="/" element={<Links context={context} />} />
				<Route path="/profile-details" element={<ProfileDetails context={context} />} />
				<Route path="/preview" element={<Preview context={context} />} />
			</Routes>
		</div>
	)
}

export default App
