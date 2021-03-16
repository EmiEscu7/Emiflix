import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrincipalPage from '../pages/PrincipalPage'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/emiflix" component={PrincipalPage}/>
        </Switch>
    </BrowserRouter>
)

export default App