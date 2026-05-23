import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/siteData.js'
import { useApp } from '../context/AppContext.jsx'
import Icon from '../components/Icon.jsx'
import React from 'react'
export default function ProjectDetails() {
  const { slug } = useParams()
  const { isAr } = useApp()

  const project = projects.find((item) => item.slug === slug) || projects[0]
  const features = isAr ? project.featuresAr : project.featuresEn

  return (
    <section className="section page">
      <Link
        className="back"
        to="/projects"
      >
        ← {isAr ? 'رجوع للمشاريع' : 'Back to projects'}
      </Link>

      <div className="case-study">
        <span>{project.tag}</span>

        <h1>
          {isAr ? project.titleAr : project.titleEn}
        </h1>

        <p>
          {isAr ? project.descAr : project.descEn}
        </p>

        <div className="chips big">
          {project.stack.map((stackItem) => (
            <small key={stackItem}>
              {stackItem}
            </small>
          ))}
        </div>

        <div className="case-grid">
          <div>
            <h3>
              {isAr ? 'المشكلة' : 'Problem'}
            </h3>

            <p>
              {isAr
                ? 'وجود عمليات متكررة وتحتاج تنظيم، صلاحيات، تقارير، وربط بين الأنظمة بدون فوضى.'
                : 'Repetitive operations need structure, permissions, reporting, and system integrations without chaos.'}
            </p>
          </div>

          <div>
            <h3>
              {isAr ? 'الحل' : 'Solution'}
            </h3>

            <p>
              {isAr
                ? 'بناء نظام واضح قابل للتوسع مع تجربة استخدام حديثة ومعمارية قوية وموديولات منظمة.'
                : 'Build a clear scalable system with modern UX, strong architecture, and organized modules.'}
            </p>
          </div>

          <div>
            <h3>
              {isAr ? 'المميزات' : 'Features'}
            </h3>

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
          </div>

          <div>
            <h3>
              {isAr ? 'النتيجة' : 'Outcome'}
            </h3>

            <p>
              {isAr
                ? 'نظام أسهل في الإدارة، أسرع في التشغيل، وقابل للتطوير بدون إعادة بناء من الصفر.'
                : 'A system easier to manage, faster to operate, and ready to scale without rebuilding from scratch.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
