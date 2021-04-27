import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import GameBoard from './components/GameBoard'

export default (
    <Switch>
        <Route exact path ='/' component={Auth}/>
        <Route path ='/game' component={GameBoard}/>
    </Switch>
)