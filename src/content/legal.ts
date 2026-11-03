// Aviso legal, privacidad y cookies (HTML por idioma). Los datos del titular vienen de `company`.
import { company } from '../i18n/ui';

const titular = `${company.legalName}<br />${company.address}, ${company.city}<br />Tel. ${company.phone} · <a href="mailto:${company.email}">${company.email}</a>`;

export const legal = {
  es: `
<h2>Aviso legal</h2>
<p>Esta web es propiedad de:</p>
<p>${titular}</p>
<h2>Privacidad</h2>
<p>Esta web no tiene formularios ni recoge datos personales. Si nos llamas o nos escribes, usaremos tus datos solo para atender tu consulta o el servicio solicitado, y no los cederemos a terceros salvo obligación legal.</p>
<p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:${company.email}">${company.email}</a>. También puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
<h2>Cookies</h2>
<p>Esta web no usa cookies propias ni de análisis.</p>
<p>El mapa de la sección de contacto es de Google Maps y solo se carga si pulsas «Ver el mapa». En ese momento Google puede instalar sus propias cookies, según su <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">política de cookies</a>.</p>`,
  de: `
<h2>Impressum</h2>
<p>Diese Website gehört:</p>
<p>${titular}</p>
<h2>Datenschutz</h2>
<p>Diese Website hat keine Formulare und erhebt keine personenbezogenen Daten. Wenn Sie uns anrufen oder schreiben, verwenden wir Ihre Daten nur zur Bearbeitung Ihrer Anfrage oder des gewünschten Service und geben sie nicht an Dritte weiter, außer bei gesetzlicher Verpflichtung.</p>
<p>Ihre Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit können Sie per E-Mail an <a href="mailto:${company.email}">${company.email}</a> ausüben. Sie können sich auch bei der spanischen Datenschutzbehörde beschweren (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
<h2>Cookies</h2>
<p>Diese Website verwendet keine eigenen Cookies und keine Analyse-Cookies.</p>
<p>Die Karte im Kontaktbereich stammt von Google Maps und wird nur geladen, wenn Sie auf „Karte anzeigen“ klicken. Dann kann Google eigene Cookies setzen, gemäß seiner <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">Cookie-Richtlinie</a>.</p>`,
  en: `
<h2>Legal notice</h2>
<p>This website is owned by:</p>
<p>${titular}</p>
<h2>Privacy</h2>
<p>This website has no forms and does not collect personal data. If you call or email us, we will use your details only to deal with your enquiry or the service requested, and we will not share them with third parties unless required by law.</p>
<p>You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to <a href="mailto:${company.email}">${company.email}</a>. You may also complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).</p>
<h2>Cookies</h2>
<p>This website does not use its own cookies or analytics cookies.</p>
<p>The map in the contact section is provided by Google Maps and only loads if you click “Show map”. Google may then set its own cookies, under its <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">cookie policy</a>.</p>`,
};
