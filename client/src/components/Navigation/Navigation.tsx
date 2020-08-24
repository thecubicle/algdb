import React, { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default function Navigation(): ReactElement {
	return (
		<Switch>
			<Route exact path='/'></Route>
			<Route exact path='/puzzle/:puzzleId'></Route>
			<Route exact path='/users'></Route>
			<Route exact path='/user'></Route>
		</Switch>
	)
}
