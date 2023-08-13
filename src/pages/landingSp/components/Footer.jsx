import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom"

function Footer() {
    const translate = useSelector(state => state.translateReducer.translate.header)

    return (
        <div className='customFooter'>
            <p>© Copyright 2023 <em>Anonim</em><span>Chat</span></p>
            
            <div className="footerNavigation">
                <p><Link to="/chat">Chat</Link></p>
                <p><Link to="/rules">Reglas</Link></p>
                <p><Link to="/contact">Contacte con</Link></p>
            </div>
        </div>
    )
}

export default Footer
