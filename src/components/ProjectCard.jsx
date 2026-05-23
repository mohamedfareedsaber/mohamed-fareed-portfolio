import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import Icon from './Icon.jsx'
import React from 'react'
export default function ProjectCard({ project }) {
  const { isAr } = useApp()

  const title = isAr ? project.titleAr : project.titleEn
  const description = isAr ? project.descAr : project.descEn
  const features = isAr ? project.featuresAr : project.featuresEn

  return (
    <article className="project-card">
      <div className="project-top">
        <span>{project.tag}</span>
        <Icon name="external" />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="chips">
        {project.stack.map((item) => (
          <small key={item}>
            {item}
          </small>
        ))}
      </div>

      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <Icon
              name="check"
              size={16}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={`/projects/${project.slug}`}
        className="card-link"
      >
        {isAr ? 'تفاصيل المشروع' : 'View case study'}
        <Icon
          name="arrowRight"
          size={17}
        />
      </Link>
    </article>
  )
}
