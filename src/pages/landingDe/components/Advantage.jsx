import React from 'react'
import { useSelector } from 'react-redux'

function Advantage() {
    const translate = useSelector(state => state.translateReducer.translate.advantages)

    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center">
                        <div className="services">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <h2>Vorteile des Chats</h2>
                                            <p>Die anonyme Chatfunktion hat folgende Vorteile</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>Die Besucher tauschen persönliche Geheimnisse aus, ohne ein Risiko einzugehen oder Ängste zu schüren, so dass die Atmosphäre im Chatroom so frei und offen wie möglich ist.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation4" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="right-text">
                                            <p>Die Besucher tauschen persönliche Geheimnisse aus, ohne ein Risiko einzugehen oder Ängste zu schüren, so dass die Atmosphäre im Chatroom so frei und offen wie möglich ist.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation5" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="right-text">
                                            <p>Sicherheit der Kommunikation, garantiert durch die Anonymität des Nutzers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>Geben Sie einen anonymen Chat-Raum kostenlos und Chat ohne Angst vor etwas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage
