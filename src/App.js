import { useContext } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Login from './Components/Login/Login'
import { ThemeContext } from './ThemeContext'

import { languages } from './Options'

function App () {

	const { lang, setLang } = useContext(ThemeContext)

	return (
		<>
			<Header />

			<Login />

			<Footer>
				<p>
					{
						(languages.find(data => {
							if(data.prop === lang) {
								return data;
							}
						})).copyright
					}
				</p>

				<select onChange={e => setLang(e.target.value)}>
					{languages.map((lang, key) => <option key={key} value={lang.prop}>{lang.name}</option>)}
				</select>
			</Footer>
		</>
	)
}

export default App
