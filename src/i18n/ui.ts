// Datos del taller y textos de la web en castellano, alemán e inglés.

export const languages = { es: 'Español', de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;

export const company = {
  name: 'Automòbils Vidal Santanyí',
  legalName: 'Automobils Vidal Santanyi SL',
  cif: 'B-57788988',
  address: 'C/ Bernat Vidal i Tomàs, 62',
  city: '07650 Santanyí (Mallorca)',
  phone: '971 653 603',
  phoneHref: 'tel:+34971653603',
  email: 'Peugeot_santanyi@hotmail.com',
  lat: 39.352142,
  lng: 3.131508,
  // De lunes a viernes
  hours: { workshop: ['07:00', '15:00'], office: ['07:00', '18:00'] },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${company.lat},${company.lng}`;

const es = {
  'meta.title': 'Automòbils Vidal Santanyí · Taller especialista Peugeot-Citroën en Santanyí',
  'meta.description': 'Taller mecánico en Santanyí (Mallorca): especialistas Peugeot-Citroën y mecánica general de todas las marcas. Pre-ITV, revisiones, neumáticos, aire acondicionado y diagnosis.',
  'nav.services': 'Servicios',
  'nav.workshop': 'El taller',
  'nav.hours': 'Horario',
  'nav.contact': 'Contacto',
  'cta.call': 'Llamar',
  'cta.directions': 'Cómo llegar',
  'cta.email': 'Escríbenos',
  'hero.eyebrow': 'Especialistas Peugeot-Citroën en Santanyí',
  'hero.title': 'Tu taller de confianza en Santanyí',
  'hero.text': 'Mecánica general de todas las marcas, revisiones, pre-ITV y diagnosis. Cerca de ti y con el trato de siempre.',
  'info.workshop': 'Taller',
  'info.office': 'Oficina',
  'info.address': 'Dirección',
  'info.phone': 'Teléfono',
  'info.weekdays': 'De lunes a viernes',
  'services.eyebrow': 'Qué hacemos',
  'services.title': 'Nuestros servicios',
  'services.text': 'Especialistas en Peugeot y Citroën, y mecánica general para coches de todas las marcas.',
  'workshop.eyebrow': 'El taller',
  'workshop.title': 'Equipados para cuidar tu coche',
  'workshop.text': 'En Automòbils Vidal Santanyí trabajamos con elevadores, banco de alineación y equipos de diagnosis para reparar y mantener tu coche con garantía. Formamos parte de la red AD Autotaller.',
  'used.title': '¿Buscas un vehículo de ocasión?',
  'used.text': 'Pregúntanos por los coches de ocasión disponibles. Te asesoramos sin compromiso.',
  'contact.eyebrow': 'Contacto',
  'contact.title': 'Ven a vernos o llámanos',
  'contact.text': 'Pide cita por teléfono o por email. Estamos en el centro de Santanyí.',
  'hours.title': 'Horario',
  'map.button': 'Ver el mapa',
  'map.note': 'Al ver el mapa se carga Google Maps, que puede usar cookies.',
  'footer.legal': 'Aviso legal, privacidad y cookies',
  'footer.ad': 'Taller de la red AD Autotaller',
  'legal.title': 'Aviso legal, privacidad y cookies',
  'notfound.title': 'Página no encontrada',
  'notfound.back': 'Volver al inicio',
};

type Dict = typeof es;

const de: Dict = {
  'meta.title': 'Automòbils Vidal Santanyí · Peugeot-Citroën-Fachwerkstatt in Santanyí',
  'meta.description': 'Kfz-Werkstatt in Santanyí (Mallorca): Spezialisten für Peugeot und Citroën, allgemeine Mechanik für alle Marken. TÜV-Vorbereitung (ITV), Inspektionen, Reifen, Klimaanlage und Diagnose.',
  'nav.services': 'Leistungen',
  'nav.workshop': 'Die Werkstatt',
  'nav.hours': 'Öffnungszeiten',
  'nav.contact': 'Kontakt',
  'cta.call': 'Anrufen',
  'cta.directions': 'Anfahrt',
  'cta.email': 'E-Mail schreiben',
  'hero.eyebrow': 'Peugeot-Citroën-Spezialisten in Santanyí',
  'hero.title': 'Ihre Werkstatt des Vertrauens in Santanyí',
  'hero.text': 'Allgemeine Mechanik für alle Marken, Inspektionen, ITV-Vorbereitung und Diagnose. In Ihrer Nähe und mit persönlichem Service.',
  'info.workshop': 'Werkstatt',
  'info.office': 'Büro',
  'info.address': 'Adresse',
  'info.phone': 'Telefon',
  'info.weekdays': 'Montag bis Freitag',
  'services.eyebrow': 'Was wir machen',
  'services.title': 'Unsere Leistungen',
  'services.text': 'Spezialisiert auf Peugeot und Citroën – und allgemeine Mechanik für Fahrzeuge aller Marken.',
  'workshop.eyebrow': 'Die Werkstatt',
  'workshop.title': 'Bestens ausgestattet für Ihr Auto',
  'workshop.text': 'Bei Automòbils Vidal Santanyí arbeiten wir mit Hebebühnen, Achsvermessung und Diagnosegeräten, um Ihr Auto zuverlässig zu reparieren und zu warten. Wir sind Teil des Netzwerks AD Autotaller.',
  'used.title': 'Suchen Sie einen Gebrauchtwagen?',
  'used.text': 'Fragen Sie uns nach den verfügbaren Gebrauchtwagen. Wir beraten Sie unverbindlich.',
  'contact.eyebrow': 'Kontakt',
  'contact.title': 'Besuchen Sie uns oder rufen Sie an',
  'contact.text': 'Vereinbaren Sie einen Termin per Telefon oder E-Mail. Sie finden uns im Zentrum von Santanyí.',
  'hours.title': 'Öffnungszeiten',
  'map.button': 'Karte anzeigen',
  'map.note': 'Beim Anzeigen der Karte wird Google Maps geladen, das Cookies verwenden kann.',
  'footer.legal': 'Impressum, Datenschutz und Cookies',
  'footer.ad': 'Werkstatt im Netzwerk AD Autotaller',
  'legal.title': 'Impressum, Datenschutz und Cookies',
  'notfound.title': 'Seite nicht gefunden',
  'notfound.back': 'Zur Startseite',
};

const en: Dict = {
  'meta.title': 'Automòbils Vidal Santanyí · Peugeot-Citroën specialist garage in Santanyí',
  'meta.description': 'Car garage in Santanyí (Mallorca): Peugeot and Citroën specialists and general mechanics for all makes. Pre-MOT (ITV), servicing, tyres, air conditioning and diagnostics.',
  'nav.services': 'Services',
  'nav.workshop': 'The garage',
  'nav.hours': 'Opening hours',
  'nav.contact': 'Contact',
  'cta.call': 'Call us',
  'cta.directions': 'Directions',
  'cta.email': 'Email us',
  'hero.eyebrow': 'Peugeot-Citroën specialists in Santanyí',
  'hero.title': 'Your trusted garage in Santanyí',
  'hero.text': 'General mechanics for all makes, servicing, pre-MOT checks and diagnostics. Close to you, with a personal service.',
  'info.workshop': 'Workshop',
  'info.office': 'Office',
  'info.address': 'Address',
  'info.phone': 'Phone',
  'info.weekdays': 'Monday to Friday',
  'services.eyebrow': 'What we do',
  'services.title': 'Our services',
  'services.text': 'Peugeot and Citroën specialists, plus general mechanics for cars of all makes.',
  'workshop.eyebrow': 'The garage',
  'workshop.title': 'Fully equipped to look after your car',
  'workshop.text': 'At Automòbils Vidal Santanyí we work with car lifts, wheel alignment and diagnostic equipment to repair and service your car reliably. We are part of the AD Autotaller network.',
  'used.title': 'Looking for a used car?',
  'used.text': 'Ask us about the used cars we currently have available. No-obligation advice.',
  'contact.eyebrow': 'Contact',
  'contact.title': 'Visit us or give us a call',
  'contact.text': 'Book an appointment by phone or email. You will find us in the centre of Santanyí.',
  'hours.title': 'Opening hours',
  'map.button': 'Show map',
  'map.note': 'Showing the map loads Google Maps, which may use cookies.',
  'footer.legal': 'Legal notice, privacy and cookies',
  'footer.ad': 'Garage in the AD Autotaller network',
  'legal.title': 'Legal notice, privacy and cookies',
  'notfound.title': 'Page not found',
  'notfound.back': 'Back to home',
};

const ui: Record<Lang, Dict> = { es, de, en };

export const useTranslations = (lang: Lang) => (key: keyof Dict) => ui[lang][key];

// Servicios: [icono, es, de, en]
export const services: [string, string, string, string][] = [
  ['wrench', 'Mecánica general (todas las marcas)', 'Allgemeine Mechanik (alle Marken)', 'General mechanics (all makes)'],
  ['check', 'Servicio pre-ITV', 'ITV-Vorabprüfung', 'Pre-ITV (MOT) check'],
  ['truck', 'Gestión y traslado a la ITV', 'Organisation und Fahrt zur ITV', 'ITV booking and transport'],
  ['calendar', 'Revisiones periódicas', 'Regelmäßige Inspektionen', 'Scheduled servicing'],
  ['tyre', 'Reparación de neumáticos', 'Reifenreparatur', 'Tyre repair'],
  ['snow', 'Aire acondicionado', 'Klimaanlagen-Service', 'Air conditioning service'],
  ['bulb', 'Limpieza y pulido de faros', 'Scheinwerfer reinigen und polieren', 'Headlight cleaning and polishing'],
  ['align', 'Alineación de dirección', 'Achsvermessung', 'Wheel alignment'],
  ['bolt', 'Diagnosis de averías eléctricas', 'Diagnose elektrischer Störungen', 'Electrical fault diagnosis'],
];

// Fotos de la sección «El taller» (en /public/images/)
export const gallery = ['taller-2', 'elevador', 'alineacion', 'herramientas', 'taller-1', 'exposicion-1', 'taller-3', 'fachada-3']
  .map((f) => `/images/${f}.webp`);
