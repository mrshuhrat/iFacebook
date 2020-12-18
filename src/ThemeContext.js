import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
	// temaga oid
	const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')
	useEffect(() => {
		window.localStorage.setItem('theme', theme)
	}, [
		theme,
	])

	//tilga oid
	const [lang, setLang] = useState('uz')

	return (
		<ThemeContext.Provider value={{ theme, setTheme, lang, setLang }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext,
}
