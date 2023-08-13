import React from 'react'
import { useSelector } from 'react-redux'

function Features() {
    const translate = useSelector(state => state.translateReducer.translate.features)

    return (
        <div id="services" className="our-services section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInRight animated animation6" data-wow-duration="1s" data-wow-delay="0.2s">
                        <div className="section-heading">
                            <h2>Merkmale des Chats</h2>
                            <p>Wodurch unterscheidet sich dieser anonyme Chatroom von anderen sozialen Netzwerken? Die Chat-Teilnehmer werden bei der Nutzung des Dienstes nicht identifiziert; es gibt keine Follower oder Freunde. Die App fragt nicht nach Fotos oder E-Mail-Adressen, obwohl Sie diese Angaben machen können, wenn Sie möchten. Nutzer können die Suchfunktion nicht nutzen, um andere Nutzer zu finden. All dies garantiert den Chat-Besuchern fast völlige Anonymität und absolute Sicherheit, was bei anderen sozialen Netzwerken nicht der Fall ist.</p>
                            <p>Obwohl es möglich ist, im Chatroom zu kommunizieren, ohne sich zu registrieren, ist es möglich, sich freiwillig zu registrieren. In diesem Fall muss der Benutzer ein Passwort mit mindestens sechs Zeichen erstellen, einschließlich lateinischer Buchstaben und Zahlen.</p>
                            <p>Sowohl für registrierte als auch für nicht registrierte Benutzer ist der Chatroom kostenlos.</p>
                            <p>Die wichtigste Art, mit jemandem in diesem sozialen Netzwerk zu kommunizieren, ist die Beantwortung seiner Nachrichten über einen anonymen Text-Chat oder einen Sprachdialog. Dies kann über die Chatfunktion zu jeder Tages- und Nachtzeit geschehen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
