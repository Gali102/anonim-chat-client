import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'

import Contacts from './pages/contacts/Contacts'
import Landing from './pages/landing/Landing'
import LandingSp from './pages/landingSp/Landing'
import LandingDe from './pages/landingDe/Landing'
import LandingRu from './pages/landingRu/Landing'
import Rules from './pages/rules/Rules'
import Chat from './pages/chat/Chat'

import get from './api/get'

function Navigation() {
  const dispatch = useDispatch()
  const short = useSelector(state => state.translateReducer.short)

  useEffect(() => {
    (async () => {
      await get('/api/language/getlanguage')
        .then(data => {
          const defaultLanguage = data.languages.find(x => x.short === 'en-US')
          const userLanguage = data.languages.find(x => x.short === short)

          if (!userLanguage) dispatch({ type: 'setTranslate', payload: defaultLanguage })
          else dispatch({ type: 'setTranslate', payload: userLanguage })

          dispatch({ type: 'setLanguages', payload: data.languages })
        })
    })()
  }, [short])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/sp' element={<LandingSp />} />
        <Route path='/ru' element={<LandingRu />} />
        <Route path='/de' element={<LandingDe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
