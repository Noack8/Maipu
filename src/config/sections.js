export const SECTIONS = [
  { id: 'inicio', label: 'Home' },
  { 
    id: 'productos', 
    label: 'Product',
    // Aquí definimos las columnas del mega-menú
    submenu: [
      { title: 'Router', items: ['Core Router', 'Aggregation Router', 'Access Router', '4G/5G Router'] },
      { title: 'Switch', items: ['DataCenter Switch', 'Campus Switch', 'SMB Switch', 'Industrial Switch'] },
      { title: 'WLAN', items: ['Cloud WiFi', 'Campus WiFi'] },
      { title: 'Security', items: ['IFW Firewall', 'MSG Firewall', 'NSFW Firewall'] },
      { title: 'Cloud&AI', items: ['HCI', 'MDC'] }
    ]
  },
  { id: 'soluciones', label: 'Solution' },
  { id: 'soporte', label: 'Support' },
  { id: 'socio', label: 'Partner' },
  { id: 'casos-exito', label: 'News&Case' },
  { id: 'acerca-de', label: 'About Maipu' },
]