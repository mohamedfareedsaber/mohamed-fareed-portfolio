import { projects } from '../data/siteData.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { useApp } from '../context/AppContext.jsx'
export default function Projects(){ const {isAr}=useApp(); return <section className="section page"><div className="page-hero"><span>{isAr?'المشاريع':'Projects'}</span><h1>{isAr?'Case Studies تعرض شغلي الحقيقي':'Case studies that show real work'}</h1><p>{isAr?'كل مشروع معروض كحل لمشكلة حقيقية وليس مجرد صورة واجهة.':'Each project is presented as a solution to a real problem, not just a UI screenshot.'}</p></div><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section> }
