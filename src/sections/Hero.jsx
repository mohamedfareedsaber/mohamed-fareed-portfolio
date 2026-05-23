import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icon from '../components/Icon.jsx'

export default function Hero(){
  const { t } = useTranslation()
  return <section className="hero section">
    <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
      <div className="badge"><span></span>{t('badge')}</div>
      <h1>{t('heroTitle')}</h1>
      <p>{t('heroText')}</p>
      <div className="hero-actions"><Link className="btn primary" to="/projects">{t('viewProjects')} <Icon name="arrow"/></Link><Link className="btn ghost" to="/contact">{t('contactMe')}</Link></div>
    </motion.div>
    <motion.div className="hero-panel logo-showcase" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
      <div className="hero-logo-wrap">
        <img src="/mf-logo.png" alt="Mohamed Fareed Logo" className="hero-logo" />
      </div>
      <div className="panel-header"><div><small>Live System Map</small><b>n8n + SaaS Workflow</b></div><Icon name="workflow" size={36}/></div>
      {['Lead Trigger','AI Agent','CRM Update','Email + WhatsApp','Dashboard Report'].map((x,i)=><div className="flow-row" key={x}><strong>0{i+1}</strong><span>{x}</span><em>Active</em></div>)}
    </motion.div>
  </section>
}
