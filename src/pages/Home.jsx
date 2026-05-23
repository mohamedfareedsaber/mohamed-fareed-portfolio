import { useTranslation } from 'react-i18next'
import Hero from '../sections/Hero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import React from 'react'
import Icon from '../components/Icon.jsx'
import {
  process,
  projects,
  services,
  skills
} from '../data/siteData.js'
import { useApp } from '../context/AppContext.jsx'

export default function Home() {
  const { t } = useTranslation()
  const { isAr } = useApp()

  return (
    <>
      <Hero />

      <section className="stats section compact">
        <div className="stat">
          <b>15+</b>
          <span>{t('stats1')}</span>
        </div>

        <div className="stat">
          <b>30+</b>
          <span>{t('stats2')}</span>
        </div>

        <div className="stat">
          <b>60+</b>
          <span>{t('stats3')}</span>
        </div>

        <div className="stat">
          <b>2</b>
          <span>{t('stats4')}</span>
        </div>
      </section>

      <section
        className="section two-col"
        id="about"
      >
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutText')}</p>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t('servicesTitle')}</span>

          <h2>
            {isAr
              ? 'خدمات تبني بيزنس أقوى'
              : 'Services that build stronger businesses'}
          </h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div
              className="service-card"
              key={service.en}
            >
              <div className="service-icon">
                <Icon
                  name={service.icon}
                  size={30}
                />
              </div>

              <h3>
                {isAr ? service.ar : service.en}
              </h3>

              <p>
                {isAr ? service.descAr : service.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t('projectsTitle')}</span>

          <h2>
            {isAr
              ? 'مشاريع تعرض قوة التفكير والتنفيذ'
              : 'Projects that show thinking and execution'}
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.slug}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t('skillsTitle')}</span>

          <h2>
            {isAr
              ? 'التقنيات التي أستخدمها'
              : 'Technology I use'}
          </h2>
        </div>

        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>{t('processTitle')}</span>

          <h2>
            {isAr
              ? 'من الفكرة إلى نظام حقيقي'
              : 'From idea to real system'}
          </h2>
        </div>

        <div className="process-grid">
          {process.map((item, index) => (
            <div
              className="process-card"
              key={item.en}
            >
              <b>0{index + 1}</b>

              <h3>
                {isAr ? item.ar : item.en}
              </h3>

              <p>
                {isAr ? item.textAr : item.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
