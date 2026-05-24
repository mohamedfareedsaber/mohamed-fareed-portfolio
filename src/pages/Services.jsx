import { useApp } from '../context/AppContext.jsx'
import { services } from '../data/siteData.js'
import Icon from '../components/Icon.jsx'
import React from 'react'

export default function Services() {
  const { isAr } = useApp()

  return (
    <section className="section page">
      <div className="page-hero">
        <span>{isAr ? 'الخدمات' : 'Services'}</span>

        <h1>
          {isAr
            ? 'حلول رقمية تساعد مشروعك يشتغل بشكل أفضل'
            : 'Digital solutions that help your business work better'}
        </h1>

        <p>
          {isAr
            ? 'أقدر أساعدك في بناء موقع، لوحة تحكم، نظام كامل، أو أتمتة توفر وقت وتقلل الشغل اليدوي.'
            : 'I can help you build a website, dashboard, full system, or automation flow that saves time and reduces manual work.'}
        </p>
      </div>

      <div className="service-grid large">
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

            <h3>{isAr ? service.ar : service.en}</h3>

            <p>{isAr ? service.descAr : service.descEn}</p>
          </div>
        ))}
      </div>
    </section>
  )
}