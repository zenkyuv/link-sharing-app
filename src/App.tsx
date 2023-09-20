import './App.css'
import {Route, Routes} from 'react-router-dom'

import Links from './pages/links/component'
import Preview from './pages/preview/component'
import ProfileDetails from './pages/profile-details/component'

function App() {
	return (
		<>
			<Routes>
				<Route path="/links" element={<Links />} />
				<Route path="/profile-details" element={<ProfileDetails />} />
				<Route path="/preview" element={<Preview />} />
			</Routes>
		</>
	)
}

export default App
