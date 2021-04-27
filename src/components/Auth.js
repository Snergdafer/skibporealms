import React, {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [gameId, setGameId] = useState(0)

    const userValue = useContext(UserContext)

    const login = () => {
        userValue.setUser({...userValue.user, username: username})
        userValue.setUser({...userValue.user, gameId: gameId})
        history.push('/game')
    }

    return (
        <div className='Auth'>
            <h1>Auth</h1>
            <form onSubmit={() => login()}>
                <input value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                <input value={gameId} placeholder='Game Id' onChange={(e) => setGameId(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Auth