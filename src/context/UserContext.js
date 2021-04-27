import React, {createContext, useState} from 'react'


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        username: null,
        class: null,
        cards: [],
        gameId: 0
    })

    return(
        <UserContext.Provider value={user, setUser}>
            {children}
        </UserContext.Provider>
    )
}