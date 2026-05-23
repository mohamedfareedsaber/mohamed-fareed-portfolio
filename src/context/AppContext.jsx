import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AppContext = createContext(null)
export const useApp = () => useContext(AppContext)

export function AppProvider({ children }){
  const { i18n } = useTranslation()
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  useEffect(()=>{
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  },[theme])

  useEffect(()=>{
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  },[lang, i18n])

  const value = useMemo(()=>({ theme, setTheme, lang, setLang, isAr: lang === 'ar' }),[theme, lang])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
