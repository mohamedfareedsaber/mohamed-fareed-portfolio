export const services = [
  {
    icon: 'workflow',
    en: 'AI Automation & Workflows',
    ar: 'الأتمتة والـ Workflows',
    descEn:
      'Automation flows with n8n, AI agents, webhooks, CRM updates, reports, and daily operation tasks.',
    descAr:
      'بناء Workflows باستخدام n8n و AI Agents و Webhooks وربط CRM وتقارير لتسهيل العمليات اليومية.'
  },
  {
    icon: 'dashboard',
    en: 'SaaS Platforms & Dashboards',
    ar: 'منصات SaaS ولوحات التحكم',
    descEn:
      'Custom dashboards, roles, analytics, subscriptions, reports, and scalable system structure.',
    descAr:
      'لوحات تحكم مخصصة، صلاحيات، تحليلات، اشتراكات، تقارير، وهيكلة قابلة للتوسع.'
  },
  {
    icon: 'database',
    en: 'MERN Web Systems',
    ar: 'أنظمة ويب MERN',
    descEn:
      'Full-stack systems using React, Node.js, Express, MongoDB, APIs, admin panels, and reports.',
    descAr:
      'أنظمة Full Stack باستخدام React و Node.js و Express و MongoDB مع APIs ولوحات إدارة وتقارير.'
  },
  {
    icon: 'layers',
    en: 'Modern UI/UX Design',
    ar: 'تصميم UI/UX حديث',
    descEn:
      'Clean, modern interfaces focused on usability, clarity, responsive layouts, and smooth user experience.',
    descAr:
      'واجهات حديثة وواضحة تركز على سهولة الاستخدام، التناسق، الاستجابة لكل الشاشات، وتجربة مريحة.'
  }
]

export const projects = [
  {
    slug: 'ai-automation-n8n',
    titleEn: 'AI Automation Workflow',
    titleAr: 'Workflow أتمتة بالذكاء الاصطناعي',
    tag: 'AI Automation',
    descEn:
      'A workflow setup that connects leads, follow-ups, CRM updates, emails, WhatsApp actions, and simple reports.',
    descAr:
      'إعداد Workflow يربط بين العملاء المحتملين، المتابعة، تحديثات CRM، الإيميلات، واتساب، والتقارير البسيطة.',
    stack: [
      'n8n',
      'OpenAI',
      'Webhooks',
      'APIs',
      'CRM'
    ],
    featuresEn: [
      'Lead automation',
      'AI follow-up',
      'CRM updates',
      'Reports'
    ],
    featuresAr: [
      'أتمتة العملاء المحتملين',
      'متابعة بالذكاء الاصطناعي',
      'تحديث CRM',
      'تقارير'
    ]
  },
  {
    slug: 'patient-survey-system',
    titleEn: 'Patient Survey System',
    titleAr: 'نظام استبيان رضا المرضى',
    tag: 'Healthcare System',
    descEn:
      'A hospital survey system with roles, rating analytics, Excel export, print reports, and service-level results.',
    descAr:
      'نظام استبيانات للمستشفيات يشمل صلاحيات، تحليلات تقييم، تصدير Excel، تقارير طباعة، ونتائج لكل خدمة.',
    stack: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Charts'
    ],
    featuresEn: [
      'Admin dashboard',
      'Survey forms',
      'Rating analytics',
      'Excel export'
    ],
    featuresAr: [
      'لوحة تحكم',
      'نماذج استبيان',
      'تحليلات تقييم',
      'تصدير Excel'
    ]
  },
  {
    slug: 'erp-procurement',
    titleEn: 'Procurement & Inventory ERP',
    titleAr: 'نظام مشتريات ومخازن ERP',
    tag: 'ERP System',
    descEn:
      'An ERP concept for procurement, approvals, inventory, finance, import/export templates, and user permissions.',
    descAr:
      'تصور نظام ERP للمشتريات، الاعتمادات، المخازن، المالية، قوالب الاستيراد والتصدير، وصلاحيات المستخدمين.',
    stack: [
      'MERN',
      'RBAC',
      'Excel',
      'i18n',
      'Security'
    ],
    featuresEn: [
      'Arabic / English',
      'Approval flow',
      'Inventory modules',
      'Finance modules'
    ],
    featuresAr: [
      'عربي / إنجليزي',
      'دورة اعتماد',
      'موديولات مخازن',
      'موديولات مالية'
    ]
  },
  {
    slug: 'ecommerce-dashboard',
    titleEn: 'E-Commerce Dashboard',
    titleAr: 'لوحة تحكم متجر إلكتروني',
    tag: 'Full Stack',
    descEn:
      'A dashboard experience for admin, seller, and customer users with orders, payments, banners, and analytics.',
    descAr:
      'تجربة لوحة تحكم للمدير والبائع والعميل تشمل الطلبات، المدفوعات، البانرات، والتحليلات.',
    stack: [
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Tailwind'
    ],
    featuresEn: [
      'Order management',
      'Seller panel',
      'Payment flow',
      'Analytics'
    ],
    featuresAr: [
      'إدارة الطلبات',
      'لوحة البائع',
      'مسار المدفوعات',
      'تحليلات'
    ]
  }
]

export const skills = [
  'React',
  'Vite',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'Redux Toolkit',
  'n8n',
  'OpenAI',
  'REST APIs',
  'JWT',
  'RBAC',
  'Tailwind',
  'Framer Motion',
  'Excel Export'
]

export const process = [
  {
    en: 'Understand',
    ar: 'فهم المطلوب',
    textEn:
      'I start by understanding the idea, the users, and what the business really needs.',
    textAr:
      'أبدأ بفهم الفكرة، المستخدمين، واحتياج البيزنس الحقيقي.'
  },
  {
    en: 'Plan',
    ar: 'التخطيط',
    textEn:
      'I organize the screens, database, APIs, permissions, and main system flow before development.',
    textAr:
      'أرتب الشاشات، قاعدة البيانات، APIs، الصلاحيات، ومسار النظام قبل التنفيذ.'
  },
  {
    en: 'Build',
    ar: 'التنفيذ',
    textEn:
      'I build the interface, backend, dashboard, reports, and automation flows step by step.',
    textAr:
      'أنفذ الواجهة، الباك اند، لوحة التحكم، التقارير، والـ workflows خطوة بخطوة.'
  },
  {
    en: 'Improve',
    ar: 'التحسين',
    textEn:
      'After the first version, I improve performance, security, user experience, and prepare the system to grow.',
    textAr:
      'بعد أول نسخة، أشتغل على تحسين الأداء، الأمان، تجربة الاستخدام، وتجهيز النظام للتوسع.'
  }
]