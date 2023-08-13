import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import EndCall from './../svg/EndCall'

import Status from './Status'
import Popup from './Popup'

function Header() {
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)

    function closeChat() {
        dispatch({ type: 'selectPage', payload: 1 })
    }

    return (
        <div className="chatHeader">
            <div className="closeChat" onClick={() => closeChat()}>
                <EndCall color={"#c65757"}/>
            </div>

            <div className="status">
                <p className='name'>ANONYM</p>
                <Status />
            </div>

            <div className="menu clickable"
                style={isOpen ? { background: '#241e2a' } : {}}
                onClick={() => setIsOpen(!isOpen)}>

                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>

            {
                isOpen ? <Popup /> : <></>
            }
        </div>
    )
}

export default Header
