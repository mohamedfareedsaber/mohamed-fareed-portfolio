import { useTranslation } from 'react-i18next'
import Icon from '../components/Icon.jsx'
import React from 'react'
export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="section page">
      <div className="contact-box">
        <div>
          <span>{t('navContact')}</span>
          <h1>{t('contactTitle')}</h1>
          <p>{t('contactText')}</p>
        </div>

        <div className="contact-links">
          <a href="mailto:yeniseycloud@gmail.com">
            <Icon name="mail" />
            {t('email')}: yeniseycloud@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/eng-mohamedfareed/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            {t('linkedin')}
          </a>

          <a
            href="https://github.com/mohamedfareedsaber"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            {t('github')}
          </a>
        </div>
      </div>
    </section>
  )
}
