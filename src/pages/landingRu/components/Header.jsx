import React from 'react'
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <Helmet>
                <title>Бесплатный анонимный чат без регистрации | AnonimChat</title>
                <meta name="description" content="Бесплатный анонимный чат без регистрации" />
                <meta name="keywords" content="anonim chat, анонимный чат, анонимный чат без регистрации" />
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <div className="logo">
                                <Link to="/"><h4>Anonim<span>Chat</span></h4></Link>
                            </div>
                            <ul className="nav">
                                <li><p><Link to="/rules">Правила</Link></p></li>
                                <li><p><Link to="/contact">Контакты</Link></p></li>
                                <li><div className="main-red-button"><Link to="/chat">Чат</Link></div></li>
                            </ul>
                            <a className='menu-trigger'><span>Меню</span></a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
