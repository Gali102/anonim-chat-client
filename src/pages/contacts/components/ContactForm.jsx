import React from 'react'
import { useSelector } from 'react-redux'

import img from "../../../assets/images/contact-decoration.png"
import Input from './Input'

function ContactForm() {
    const translate = useSelector(state => state.translateReducer.translate.contactsBlock)

    return (
        <div className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center wow fadeInLeft animated animation6" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>{translate.contact}</h2>
                            <p>{translate.text}</p>
                            <div className="phone-info">
                                <h4>{translate.email} <span> <a href="malito:info@anonim-chat.com">info@anonim-chat.com</a></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
