import React from 'react'

export default function Icon({
  name,
  size = 22,
  className = '',
  strokeWidth = 1.8
}) {
  const props = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true
  }

  const icons = {
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    x: (
      <>
        <path d="M18 6 6 18" />
        <path d="M6 6l12 12" />
      </>
    ),

    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="M6 6l12 12" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    arrowRight: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
      </>
    ),

    moon: (
      <>
        <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
      </>
    ),

    check: (
      <>
        <path d="M20 6 9 17l-5-5" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21c-3-3-4.5-6-4.5-9S9 6 12 3Z" />
      </>
    ),

    github: (
      <>
        <path d="M9 19c-4 1.5-4-2-6-2" />
        <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </>
    ),

    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),

    workflow: (
      <>
        <rect x="3" y="5" width="6" height="6" rx="2" />
        <rect x="15" y="5" width="6" height="6" rx="2" />
        <rect x="9" y="15" width="6" height="6" rx="2" />
        <path d="M9 8h6" />
        <path d="M12 11v4" />
      </>
    ),

    dashboard: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 10h18" />
        <path d="M9 10v10" />
        <path d="M13 14h4" />
        <path d="M13 17h3" />
      </>
    ),

    database: (
      <>
        <ellipse cx="12" cy="5" rx="6" ry="2.5" />
        <path d="M6 5v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" />
        <path d="M6 11v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6" />
      </>
    ),

    layers: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    )
  }

  return (
    <svg {...props}>
      {icons[name] || icons.workflow}
    </svg>
  )
}
