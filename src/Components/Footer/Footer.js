import { useContext } from 'react'
import './Footer.css'

import { ThemeContext } from '../../ThemeContext'

function Footer ({ children }) {

	const { theme } = useContext(ThemeContext)

	return (
		<>
			<footer className={theme}>
				{children}
			</footer>
		</>
	)
}

export default Footer
