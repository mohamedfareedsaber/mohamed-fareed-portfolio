import { useTranslation } from 'react-i18next'
import React from 'react'
export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {t('brand')} — {t('footer')}
      </p>
    </footer>
  )
}
