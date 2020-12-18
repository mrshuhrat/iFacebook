import { useContext } from 'react'
import { useState, useEffect } from 'react'
import './Login.css'

import { ThemeContext } from '../../ThemeContext'
import { languages } from '../../Options'


function Login () {

	const { theme, lang } = useContext(ThemeContext)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [disabled, setDisabled] = useState(true)

	const onSubmit = event => {

		event.preventDefault()

		console.log('Submitted', username)
	}

	useEffect(() => {

		setDisabled(!(username.length > 2 && password.length >= 6))
		// setDisabled(username.length > 2 ? false : true)
	
	}, [
		username,
		password,
	])

	return (
		<>
			<div id="login" className={theme}>

				<form className="login-form" onSubmit={onSubmit}>
					<div className="input">
						<label htmlFor="username">
							{
								(languages.find(data => {
									if(data.prop === lang) {
										return data;
									}
								})).username
							}
						</label>
						<input
							id="username"
							type="text"
							placeholder="Username"
							autoComplete="off"
							spellCheck={false}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<label htmlFor="password">
						{
								(languages.find(data => {
									if(data.prop === lang) {
										return data;
									}
								})).password
							}
						</label>
						<input
							id="password"
							type="password"
							placeholder="Password"
							autoComplete="current-password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<button className="login-btn" disabled={disabled}>
							<span>
								{
									(languages.find(data => {
										if(data.prop === lang) {
											return data;
										}
									})).login
								}
							</span>
						</button>
					</div>
				</form>

			</div>
		</>
	)
}

export default Login
