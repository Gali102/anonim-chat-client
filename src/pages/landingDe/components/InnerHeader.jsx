import React from 'react'
import {Helmet} from "react-helmet";
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
                                    <h1 style={{ whiteSpace: 'pre-wrap' }}>Kostenloser anonymer Chat ohne Anmeldung</h1>
                                    <p> <a rel="nofollow" href="/chat" target="_parent"></a></p>
                                    <p>Dieser kostenlose Online-Chatraum ist eine anonyme soziale Netzwerkfunktion. Die Nutzer können ihre Nachrichten durch Tippen veröffentlichen. Der einzigartige Vorteil dieses Chat-Raums ist, dass er völlig anonym ist und die Benutzer sich nicht registrieren müssen, wenn sie ihm beitreten. Der neue unregistrierte Chat-Raum verfügt über ein robustes System, das den Benutzer sowohl bei der Text- als auch bei der Sprachkommunikation völlig anonym hält.</p>
                                    <div id="search">
                                        <fieldset>
                                            <Link to="/chat">
                                                <div className="email">
                                                    <button type="submit" className="main-button">Zum Chat gehen</button>
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
