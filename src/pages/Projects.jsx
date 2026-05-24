import { projects } from '../data/siteData.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { useApp } from '../context/AppContext.jsx'
import React from 'react'

export default function Projects() {
  const { isAr } = useApp()

  return (
    <section className="section page">
      <div className="page-hero">
        <span>{isAr ? 'المشاريع' : 'Projects'}</span>

        <h1>
          {isAr
            ? 'مشاريع اشتغلت عليها من أول الفكرة لحد التنفيذ'
            : 'Projects I worked on from idea to delivery'}
        </h1>

        <p>
          {isAr
            ? 'هنا بعرض شغل حقيقي مبني على مشاكل واحتياجات فعلية، مش مجرد شكل واجهة أو تصميم ثابت.'
            : 'A look at real projects built around actual business needs, not just nice-looking screens.'}
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}