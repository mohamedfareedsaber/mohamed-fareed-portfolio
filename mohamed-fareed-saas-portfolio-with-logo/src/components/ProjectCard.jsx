import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import Icon from './Icon.jsx'
export default function ProjectCard({ project }){
  const { isAr } = useApp()
  return <article className="project-card">
    <div className="project-top"><span>{project.tag}</span><Icon name="external"/></div>
    <h3>{isAr ? project.titleAr : project.titleEn}</h3>
    <p>{isAr ? project.descAr : project.descEn}</p>
    <div className="chips">{project.stack.map(x=><small key={x}>{x}</small>)}</div>
    <ul>{(isAr?project.featuresAr:project.featuresEn).map(f=><li key={f}><Icon name="check" size={16}/>{f}</li>)}</ul>
    <Link to={`/projects/${project.slug}`} className="card-link">{isAr?'تفاصيل المشروع':'View case study'} <Icon name="arrow" size={17}/></Link>
  </article>
}
