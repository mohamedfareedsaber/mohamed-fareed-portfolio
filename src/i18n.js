import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      brand: 'Mohamed Fareed',
      role: 'Full Stack Engineer & AI Automation Architect',
      navHome: 'Home',
      navAbout: 'About',
      navProjects: 'Projects',
      navServices: 'Services',
      navContact: 'Contact',
      badge: 'SaaS • MERN • AI Automation • n8n',
      heroTitle:
        'I build scalable SaaS systems, AI workflows, and modern digital products.',
      heroText:
        'A premium portfolio for full-stack products, enterprise dashboards, workflow automation, and business systems designed to scale.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      stats1: 'Projects',
      stats2: 'Automation Flows',
      stats3: 'System Modules',
      stats4: 'Languages',
      aboutTitle:
        'Engineer mindset. Business impact.',
      aboutText:
        'I turn complex business ideas into secure, clean, and scalable web systems. My focus is not only making beautiful interfaces, but building real products with strong architecture, role management, dashboards, reports, and AI automation.',
      servicesTitle: 'Services',
      projectsTitle: 'Featured Case Studies',
      skillsTitle: 'Core Stack',
      processTitle: 'How I Work',
      contactTitle:
        'Let’s build something scalable.',
      contactText:
        'Send me your idea, workflow, dashboard, SaaS platform, or automation need — and I will help shape it into a real system.',
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      footer:
        'Designed and built as a premium SaaS portfolio.'
    }
  },
  ar: {
    translation: {
      brand: 'محمد فريد',
      role: 'مهندس Full Stack ومتخصص AI Automation',
      navHome: 'الرئيسية',
      navAbout: 'من أنا',
      navProjects: 'المشاريع',
      navServices: 'الخدمات',
      navContact: 'تواصل',
      badge: 'SaaS • MERN • AI Automation • n8n',
      heroTitle:
        'أبني أنظمة SaaS قابلة للتوسع، و Workflows ذكية، ومنتجات رقمية احترافية.',
      heroText:
        'بورتفوليو احترافي لعرض مشاريع Full Stack، لوحات تحكم، أتمتة بالذكاء الاصطناعي، وأنظمة أعمال قابلة للنمو.',
      viewProjects: 'شاهد المشاريع',
      contactMe: 'تواصل معي',
      stats1: 'مشروع',
      stats2: 'Workflow أتمتة',
      stats3: 'موديول نظام',
      stats4: 'لغات',
      aboutTitle:
        'تفكير هندسي. تأثير حقيقي على البيزنس.',
      aboutText:
        'أحوّل الأفكار المعقدة إلى أنظمة ويب آمنة ومنظمة وقابلة للتوسع. تركيزي ليس فقط على الشكل، بل على بناء منتجات حقيقية فيها Architecture قوية، صلاحيات، Dashboards، Reports، و AI Automation.',
      servicesTitle: 'الخدمات',
      projectsTitle: 'دراسات حالة مميزة',
      skillsTitle: 'التقنيات الأساسية',
      processTitle: 'طريقة العمل',
      contactTitle:
        'خلينا نبني نظام قوي وقابل للتوسع.',
      contactText:
        'ابعت فكرتك، workflow، dashboard، SaaS platform، أو احتياج automation — وأنا أساعدك نحولها لنظام حقيقي.',
      email: 'الإيميل',
      whatsapp: 'واتساب',
      linkedin: 'لينكدإن',
      github: 'جيت هاب',
      footer:
        'تم تصميمه وبناؤه كبورتفوليو SaaS احترافي.'
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
