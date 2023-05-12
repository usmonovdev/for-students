import React from 'react'
import { useContext } from 'react';
import { UserLoggedIn } from '../context';

const Nabira = () => {
    const userLoggedIn = useContext(UserLoggedIn)
    console.log(userLoggedIn, "in nabira component");
    return (
        <div>Nabira</div>
    )
}

export default Nabira