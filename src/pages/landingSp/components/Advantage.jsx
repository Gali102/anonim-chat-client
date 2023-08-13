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
                                            <h2>Ventajas del chat</h2>
                                            <p>La función de chat anónimo tiene las siguientes ventajas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>Los visitantes comparten sus secretos personales sin riesgo ni temor, haciendo que el ambiente de la sala de chat sea lo más libre y abierto posible
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation4" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="right-text">
                                            <p>Los visitantes comparten sus secretos personales sin riesgo ni temor, haciendo que el ambiente de la sala de chat sea lo más libre y abierto posible
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item wow fadeIn animated animation5" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="right-text">
                                            <p>Seguridad de la comunicación, garantizada por el anonimato del usuario
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="item wow fadeIn animated animation3" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="right-text">
                                            <p>Entra en una sala de chat anónima gratis y chatea sin miedo a nada.</p>
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
