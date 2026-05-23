export default function Icon({ name, size = 20 }){
  const common = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }
  const paths = {
    menu:<><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    x:<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    arrow:<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>,
    moon:<><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    external:<><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    check:<><path d="M20 6 9 17l-5-5"/></>,
    globe:<><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></>,
    github:<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.3 10.3 0 0 0-5 0C9 2 8 2 8 2a6.5 6.5 0 0 0 0 3.5A5.4 5.4 0 0 0 7 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.3-.75 2.15-.68.31-2.4.85-3.45-.99 0 0-.63-1.14-1.83-1.22 0 0-1.16-.02-.08.72 0 0 .78.36 1.32 1.73 0 0 .7 2.14 4.01 1.42V22"/></>,
    linkedin:<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    workflow:<><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M9 6h6"/><path d="M12 9v6"/></>
  }
  return <svg {...common}>{paths[name] || paths.check}</svg>
}
