import { useApp } from '../context/AppContext.jsx'
import { services } from '../data/siteData.js'
import Icon from '../components/Icon.jsx'
import React from 'react'
export default function Services() {
  const { isAr } = useApp()

  return (
    <section className="section page">
      <div className="page-hero">
        <span>
          {isAr ? 'الخدمات' : 'Services'}
        </span>

        <h1>
          {isAr
            ? 'حلول رقمية بنَفَس SaaS احترافي'
            : 'Premium SaaS-style digital solutions'}
        </h1>

        <p>
          {isAr
            ? 'من الفكرة إلى واجهة، باك اند، صلاحيات، تقارير، وربط AI Automation.'
            : 'From idea to interface, backend, permissions, reports, and AI automation integrations.'}
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
  )
}
