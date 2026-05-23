import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icon from '../components/Icon.jsx'
import React from 'react'
const workflowSteps = [
  'Lead Trigger',
  'AI Agent',
  'CRM Update',
  'Email + WhatsApp',
  'Dashboard Report'
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero section">
      <motion.div
        className="hero-copy"
        initial={{
          opacity: 0,
          y: 24
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.7
        }}
      >
        <div className="badge">
          <span></span>
          {t('badge')}
        </div>

        <h1>{t('heroTitle')}</h1>

        <p>{t('heroText')}</p>

        <div className="hero-actions">
          <Link
            className="btn primary"
            to="/projects"
          >
            {t('viewProjects')}
            <Icon name="arrowRight" />
          </Link>

          <Link
            className="btn ghost"
            to="/contact"
          >
            {t('contactMe')}
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="hero-panel logo-showcase"
        initial={{
          opacity: 0,
          scale: 0.94
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          delay: 0.15
        }}
      >
        <div className="hero-logo-wrap">
          <img
            src="/mf-logo.png"
            alt="Mohamed Fareed Logo"
            className="hero-logo"
          />
        </div>

        <div className="panel-header">
          <div>
            <small>Live System Map</small>
            <b>n8n + SaaS Workflow</b>
          </div>

          <Icon
            name="workflow"
            size={36}
          />
        </div>

        {workflowSteps.map((step, index) => (
          <div
            className="flow-row"
            key={step}
          >
            <strong>0{index + 1}</strong>
            <span>{step}</span>
            <em>Active</em>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
