import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Header from '../../templates/Header'
import Card from './components/Card'

function Filter() {
    const dispatch = useDispatch()
    const translate = useSelector(state => state.translateReducer.translate.chatBlock)


    function back() { window.history.back() }

    function startChat() {
        dispatch({ type: 'selectPage', payload: 2 })
    }

    return (
        <div>
            <Header />

            <div className="wrapper">
                <div className="widget col-lg-3" onClick={()=>{
                    ym(88607807,'reachGoal','pay')
                    console.log('click');
                }}>
                    <div className="widget-text">Anonim-chat.com — <b>некоммерческий проект</b>, это означает, что команда разработчиков работает на голом энтузиазме. Ваша финансовая поддержка очень важна для успешного развития проекта.</div>
                    <p className="text-center" >
                        <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=oUb3MwPB37A.230416&"
                                width="330"
                                height="50"
                                frameBorder="0"
                                //onClick="yaCounter88607807.reachGoal('pay');"
                                scrolling="no">
                        </iframe>
                    </p>
                </div>

                <div className="filterContainer col-5 ">
                    <Card text={translate.userGender} genderType='user' />
                    <Card text={translate.penPalGender} genderType='penpal' />

                    <div className="controllers">
                        <div className="findButton back" onClick={() => back()}>
                            <p>{translate.back}</p>
                        </div>

                        <div className="findButton" onClick={() => startChat()}>
                            <p>{translate.search}</p>
                        </div>
                    </div>
                </div>

                <div className="col-3 d-none d-sm-block"></div>

            </div>

        </div>
    )
}

export default Filter
