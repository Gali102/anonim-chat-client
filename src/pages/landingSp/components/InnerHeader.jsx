import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom"

import img from "../../../assets/images/right-image.png"

function InnerHeader() {
    const translate = useSelector(state => state.translateReducer.translate.innerHeader)

    return (
        <div className="main-banner wow fadeIn animated animation1" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-8 align-self-center">
                                <div className="left-content header-text wow fadeInLeft animated animation2" data-wow-duration="1s" data-wow-delay="1s">
                                    <h1 style={{ whiteSpace: 'pre-wrap' }}>Chat anónimo gratis sin registro</h1>
                                    <p> <a rel="nofollow" href="/chat" target="_parent"></a></p>
                                    <p>Esta sala de chat online gratuita es una red social anónima. Los usuarios pueden publicar sus mensajes escribiendo. La única ventaja de esta sala de chat es que es completamente anónima, y los usuarios no necesitan registrarse al entrar. La nueva sala de chat no registrada cuenta con un sistema robusto que mantiene al usuario completamente anónimo tanto en la comunicación de texto como de voz.</p>
                                    <div id="search">
                                        <fieldset>
                                            <Link to="/chat">
                                                <div className="email">
                                                    <button type="submit" className="main-button">Ir al chat</button>
                                                </div>
                                            </Link>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="right-image wow fadeInRight animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src={img} className="d-md-block d-none imageStyle" alt="Фоновая картинка" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerHeader
