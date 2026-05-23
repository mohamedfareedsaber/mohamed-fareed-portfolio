import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppContext.jsx'
import Icon from './Icon.jsx'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const { t } = useTranslation()
  const { theme,setTheme,lang,setLang } = useApp()
  const nav = [
    ['/',t('navHome')],['/about',t('navAbout')],['/projects',t('navProjects')],['/services',t('navServices')],['/contact',t('navContact')]
  ]
  return <header className="navbar">
    <div className="nav-inner">
      <NavLink to="/" className="brand" onClick={()=>setOpen(false)}>
        <img src="/mf-logo.png" alt="Mohamed Fareed logo"/><span><b>{t('brand')}</b><small>{t('role')}</small></span>
      </NavLink>
      <nav className="desktop-nav">{nav.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}</nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={()=>setLang(lang==='en'?'ar':'en')}><Icon name="globe"/> {lang==='en'?'AR':'EN'}</button>
        <button className="icon-btn" onClick={()=>setTheme(theme==='dark'?'light':'dark')}><Icon name={theme==='dark'?'sun':'moon'}/></button>
        <button className="menu-btn" onClick={()=>setOpen(!open)}><Icon name={open?'x':'menu'}/></button>
      </div>
    </div>
    {open && <nav className="mobile-nav">{nav.map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>}
  </header>
}
