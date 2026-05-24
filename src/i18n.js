import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      brand: 'Mohamed Fareed',
      role: 'Full Stack Developer & AI Automation Specialist',

      navHome: 'Home',
      navAbout: 'About',
      navProjects: 'Projects',
      navServices: 'Services',
      navContact: 'Contact',

      badge: 'MERN • SaaS • Automation • Modern Systems',

      heroTitle:
        'I create modern web systems and scalable digital experiences.',

      heroText:
        'I help businesses build clean, reliable, and scalable platforms — from dashboards and SaaS products to workflow automation and custom business systems.',

      viewProjects: 'View Projects',
      contactMe: 'Let’s Talk',

      stats1: 'Projects Completed',
      stats2: 'Automation Workflows',
      stats3: 'System Modules',
      stats4: 'Technologies',

      aboutTitle:
        'Building products with purpose.',

      aboutText:
        'I focus on creating digital products that are fast, organized, and built to grow. From enterprise dashboards and SaaS platforms to workflow automation, my goal is always the same: building systems that solve real problems and create smooth user experiences.',

      servicesTitle: 'Services',
      projectsTitle: 'Selected Projects',
      skillsTitle: 'Tech Stack',
      processTitle: 'Work Process',

      contactTitle:
        'Have a project in mind?',

      contactText:
        'Whether it’s a dashboard, SaaS platform, automation workflow, or custom system — I’d be happy to help turn your idea into a real product.',

      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',

      footer:
        'Designed & developed by Mohamed Fareed.'
    }
  },

  ar: {
    translation: {
      brand: 'محمد فريد',
      role: 'مطور Full Stack ومتخصص أتمتة وأنظمة رقمية',

      navHome: 'الرئيسية',
      navAbout: 'من أنا',
      navProjects: 'المشاريع',
      navServices: 'الخدمات',
      navContact: 'تواصل',

      badge: 'MERN • SaaS • Automation • أنظمة حديثة',

      heroTitle:
        'أصمم وأطوّر أنظمة ويب حديثة وتجارب رقمية قابلة للتوسع.',

      heroText:
        'أساعد الشركات والأفراد في بناء منصات احترافية منظمة وسريعة — بداية من لوحات التحكم ومنصات SaaS وحتى أنظمة الأعمال والأتمتة الذكية.',

      viewProjects: 'استعرض المشاريع',
      contactMe: 'تواصل معي',

      stats1: 'مشروع',
      stats2: 'عمليات أتمتة',
      stats3: 'موديول نظام',
      stats4: 'تقنية',

      aboutTitle:
        'بناء منتجات تخدم الهدف الحقيقي.',

      aboutText:
        'أهتم ببناء منتجات رقمية تكون عملية وسهلة وقابلة للنمو مع الوقت. سواء كانت لوحة تحكم، منصة SaaS، أو نظام إدارة متكامل — هدفي دائمًا تقديم تجربة استخدام مريحة ونظام قوي يخدم البيزنس بشكل فعلي.',

      servicesTitle: 'الخدمات',
      projectsTitle: 'أبرز المشاريع',
      skillsTitle: 'التقنيات',
      processTitle: 'طريقة العمل',

      contactTitle:
        'عندك فكرة مشروع؟',

      contactText:
        'سواء كنت تحتاج Dashboard، منصة SaaS، Workflow Automation أو نظام مخصص — أقدر أساعدك نحول الفكرة إلى منتج حقيقي جاهز للتشغيل.',

      email: 'الإيميل',
      whatsapp: 'واتساب',
      linkedin: 'لينكدإن',
      github: 'جيت هاب',

      footer:
        'تصميم وتطوير محمد فريد.'
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n