import React from 'react'
import Nabira from './Nabira'
import { useContext } from 'react';
import { UserLoggedIn } from '../context';

const Bola = () => {
    const userLoggedIn = useContext(UserLoggedIn)
    console.log(userLoggedIn, "bola component");
    return (
        <>
        <UserLoggedIn.Provider value={true} >
            <Nabira/>
        </UserLoggedIn.Provider>
        </>
    )
}

export default Bola