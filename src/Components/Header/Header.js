import { useContext } from 'react'
import './Header.css'

import { ThemeContext } from '../../ThemeContext'
import { languages } from '../../Options'

function Header () {

	const { theme, setTheme, lang } = useContext(ThemeContext)

	return (
		<>
			<header className={theme}>
				<h1>
					{
						(languages.find(data => {
							if(data.prop === lang) {
								return data;
							}
						})).heding
					}
				</h1>
				<select
					defaultValue={theme}
					onChange={e => setTheme(e.target.value)}
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</header>
		</>
	)
}

export default Header
