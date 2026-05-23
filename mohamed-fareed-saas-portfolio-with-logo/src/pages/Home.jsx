import { useTranslation } from 'react-i18next'
import Hero from '../sections/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, services, skills, process } from '../data/siteData.js'
import { useApp } from '../context/AppContext.jsx'

export default function Home(){
  const { t } = useTranslation(); const { isAr } = useApp()
  return <>
    <Hero />
    <section className="stats section compact"><div className="stat"><b>15+</b><span>{t('stats1')}</span></div><div className="stat"><b>30+</b><span>{t('stats2')}</span></div><div className="stat"><b>60+</b><span>{t('stats3')}</span></div><div className="stat"><b>2</b><span>{t('stats4')}</span></div></section>
    <section className="section two-col" id="about"><h2>{t('aboutTitle')}</h2><p>{t('aboutText')}</p></section>
    <section className="section"><div className="section-head"><span>{t('servicesTitle')}</span><h2>{isAr?'خدمات تبني بيزنس أقوى':'Services that build stronger businesses'}</h2></div><div className="service-grid">{services.map(s=><div className="service-card" key={s.en}><i>{s.icon}</i><h3>{isAr?s.ar:s.en}</h3><p>{isAr?s.descAr:s.descEn}</p></div>)}</div></section>
    <section className="section"><div className="section-head"><span>{t('projectsTitle')}</span><h2>{isAr?'مشاريع تعرض قوة التفكير والتنفيذ':'Projects that show thinking and execution'}</h2></div><div className="project-grid">{projects.map(p=><ProjectCard project={p} key={p.slug}/>)}</div></section>
    <section className="section"><div className="section-head"><span>{t('skillsTitle')}</span><h2>{isAr?'التقنيات التي أستخدمها':'Technology I use'}</h2></div><div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
    <section className="section"><div className="section-head"><span>{t('processTitle')}</span><h2>{isAr?'من الفكرة إلى نظام حقيقي':'From idea to real system'}</h2></div><div className="process-grid">{process.map((p,i)=><div className="process-card" key={p.en}><b>0{i+1}</b><h3>{isAr?p.ar:p.en}</h3><p>{isAr?p.textAr:p.textEn}</p></div>)}</div></section>
  </>
}
