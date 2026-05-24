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
      <Link className="back" to="/projects">
        ← {isAr ? 'رجوع للمشاريع' : 'Back to projects'}
      </Link>

      <div className="case-study">
        <span>{project.tag}</span>

        <h1>{isAr ? project.titleAr : project.titleEn}</h1>

        <p>{isAr ? project.descAr : project.descEn}</p>

        <div className="chips big">
          {project.stack.map((stackItem) => (
            <small key={stackItem}>{stackItem}</small>
          ))}
        </div>

        <div className="case-grid">
          <div>
            <h3>{isAr ? 'التحدي' : 'The challenge'}</h3>

            <p>
              {isAr
                ? 'كان المطلوب تنظيم العمليات اليومية بشكل أوضح، مع صلاحيات مناسبة لكل مستخدم، وتقارير تساعد صاحب القرار يشوف الصورة كاملة بدون تعقيد.'
                : 'The goal was to make daily operations easier to manage, with the right permissions for each user and reports that give decision-makers a clear view without unnecessary complexity.'}
            </p>
          </div>

          <div>
            <h3>{isAr ? 'ما تم تنفيذه' : 'What I built'}</h3>

            <p>
              {isAr
                ? 'تم بناء نظام منظم وقابل للتوسع، بواجهة استخدام مريحة، وموديولات واضحة، وتجربة مناسبة للاستخدام اليومي سواء للعميل أو فريق الإدارة.'
                : 'I built a structured and scalable system with a clean interface, clear modules, and a smooth experience for both users and management teams.'}
            </p>
          </div>

          <div>
            <h3>{isAr ? 'أهم المميزات' : 'Key features'}</h3>

            <ul>
              {features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{isAr ? 'النتيجة' : 'The result'}</h3>

            <p>
              {isAr
                ? 'النتيجة كانت نظام أسهل في الإدارة، أسرع في الاستخدام، ومجهز للتطوير وإضافة مميزات جديدة بدون الحاجة لإعادة البناء من البداية.'
                : 'The result was a system that is easier to manage, faster to use, and ready for future improvements without starting again from scratch.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}