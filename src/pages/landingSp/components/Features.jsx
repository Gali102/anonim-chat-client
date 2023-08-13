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
                            <h2>Características del chat</h2>
                            <p>¿Qué diferencia a esta sala de chat anónima de otras redes sociales? El hecho es que los participantes en el chat no se identifican cuando utilizan el servicio; no hay seguidores ni amigos. La aplicación no pide fotos ni direcciones de correo electrónico, aunque puedes proporcionar estos datos si lo deseas. Los usuarios no pueden utilizar la función de búsqueda para encontrar a otros usuarios. Todo esto garantiza a los visitantes del chat un anonimato casi total y una seguridad absoluta, algo que no se consigue en otras redes sociales</p>
                            <p>Aunque es posible comunicarse en la sala de chat sin registrarse, es posible registrarse voluntariamente. En este caso, el usuario debe crear una contraseña de seis caracteres o más, incluyendo letras latinas y números.</p>
                            <p>Tanto para los usuarios registrados como para los no registrados, la sala de chat es gratuita.</p>
                            <p>La principal forma de comunicarse con alguien en esta red social es responder a sus mensajes mediante un chat de texto anónimo o un diálogo de voz. Esto puede hacerse a través de la función de chat en cualquier momento del día o de la noche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
