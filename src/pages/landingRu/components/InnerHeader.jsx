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
                                    <h1 style={{ whiteSpace: 'pre-wrap' }}>Бесплатный анонимный чат без регистрации</h1>
                                    <p> <a rel="nofollow" href="/chat" target="_parent"></a></p>
                                    <p>Этот бесплатный онлайн-чат – функция анонимной социальной сети. Пользователи могут публиковать свои сообщения, набирая текст. Уникальным преимуществом данного чата является то, что он полностью анонимен, и пользователям нет необходимости регистрироваться при присоединении. Новый чат без регистрации обладает надежной системой, сохраняющей полную анонимность пользователя как при текстовом, так и при голосовом общении.</p>
                                    <div id="search">
                                        <fieldset>
                                            <Link to="/chat">
                                                <div className="email">
                                                    <button type="submit" className="main-button">Перейти В Чат</button>
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
