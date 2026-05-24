import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppContext.jsx'
import React from 'react'

export default function About() {
  const { t } = useTranslation()
  const { isAr } = useApp()

  return (
    <section className="section page">
      <div className="page-hero">
        <span>{t('navAbout')}</span>

        <h1>{t('aboutTitle')}</h1>

        <p>{t('aboutText')}</p>
      </div>

      <div className="about-cards">
        <div>
          <h3>
            {isAr
              ? 'كيف أتعامل مع المشاريع؟'
              : 'How I approach projects'}
          </h3>

          <p>
            {isAr
              ? 'أحب أبني أنظمة تكون مرتبة وسهلة الاستخدام وقابلة للتطوير مع الوقت. بالنسبة لي أي مشروع ناجح لازم يجمع بين الأداء الجيد، التجربة المريحة، والتنظيم القوي من الداخل.'
              : 'I enjoy building systems that feel clean, smooth, and easy to grow over time. For me, a successful product is not only about design — it’s about performance, structure, and creating a great experience for real users.'}
          </p>
        </div>

        <div>
          <h3>
            {isAr
              ? 'ماذا أقدّم؟'
              : 'What I bring to the table'}
          </h3>

          <p>
            {isAr
              ? 'أجمع بين التطوير، التصميم، وفهم احتياجات البيزنس عشان أطلع منتج عملي يخدم العميل بشكل حقيقي. سواء كان Dashboard، منصة SaaS، أو نظام داخلي، هدفي دائمًا يكون بناء شيء واضح وفعّال وسهل التوسع.'
              : 'I combine development, design, and business understanding to create products that actually solve problems. Whether it’s a dashboard, SaaS platform, or internal system, my goal is always to build something practical, scalable, and reliable.'}
          </p>
        </div>
      </div>
    </section>
  )
}