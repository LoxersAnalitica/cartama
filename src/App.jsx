import { useState } from 'react'
import Wizard from './Wizard'
import { MapPin, ArrowRight, MessageCircle, Phone, Ruler, Home, Users, Hammer, CheckCircle2, Car, Building2, Plane } from 'lucide-react'

function App() {
  const scrollToForm = () => {
    document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/34648847599" target="_blank" rel="noopener noreferrer" className="floating-wa" aria-label="Contactar por WhatsApp">
        <MessageCircle size={32} />
      </a>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Tu solar en Cártama por <span style={{ color: '#F4E3B1', fontWeight: 700, textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}>114.000 €</span></h1>
          <p>A 15 minutos de Málaga capital. Edificabilidad hasta 197 m². Urbanización ya en marcha.</p>
          <button onClick={scrollToForm} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
            Quiero más información <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </section>

      {/* SECTION 1 - CONTEXTO / PROBLEMA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2>El precio de la vivienda en Málaga no para de subir. Aquí, todavía puedes adelantarte.</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Mientras en la costa y en la capital los precios se han disparado, Estación de Cártama ofrece una alternativa real: suelo urbanizable a precio de hoy, a 15 minutos de Málaga, 5 del PTA y 10 del aeropuerto.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Una zona en plena consolidación, con rentabilidades de alquiler y revalorización por encima de la media del mercado.
          </p>
        </div>
      </section>

      {/* SECTION 2 - LA OFERTA */}
      <section className="section section-bg">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="grid-2-col">
            <div>
              <h2>Lo que estás comprando</h2>
              <img src="/section-image.jpg" alt="Chalet adosado de diseño moderno" style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', objectFit: 'cover', maxHeight: '350px' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '12px', fontSize: '1.1rem', alignItems: 'flex-start' }}>
                  <Ruler color="var(--accent-color)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Solar de 146,22 m² con edificabilidad máxima de 197 m²</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '1.1rem', alignItems: 'flex-start' }}>
                  <Home color="var(--accent-color)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Tipología: casa adosada, planta baja + 1 (posibilidad de sótano)</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '1.1rem', alignItems: 'flex-start' }}>
                  <Users color="var(--accent-color)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Posibilidad de construir 2 viviendas en la misma parcela</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '1.1rem', alignItems: 'flex-start' }}>
                  <Hammer color="var(--accent-color)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Se permiten casas prefabricadas</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', fontSize: '1.1rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="var(--accent-color)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>El propietario se adhiere a la Junta de Compensación — sin gestiones complejas</span>
                </li>
              </ul>
            </div>
            <div id="lead-form">
              <Wizard />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - NÚMEROS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center' }}>La inversión, clara desde el principio</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th style={{ textAlign: 'right' }}>Importe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Señal</td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>6.000 €</td>
                </tr>
                <tr>
                  <td>Escritura del solar</td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>53.900 €</td>
                </tr>
                <tr>
                  <td>IVA solar (21%)</td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>12.579 €</td>
                </tr>
                <tr>
                  <td>1ª cuota de urbanización <br/><span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>(a los 7 días de escriturar)</span></td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>20.000 € + IVA</td>
                </tr>
                <tr>
                  <td>Cuota restante estimada</td>
                  <td style={{ textAlign: 'right', fontWeight: 500 }}>14.300 € + IVA</td>
                </tr>
                <tr className="total-row">
                  <td>Total estimado</td>
                  <td style={{ textAlign: 'right', fontSize: '1.1rem' }}>113.982 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="highlight-box">
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>El precio de mercado para una parcela equivalente en Cártama está en torno a 130.000 €.</p>
            <p style={{ margin: 0, marginTop: '0.5rem', fontSize: '1.2rem', color: 'var(--accent-dark)', fontWeight: 600 }}>Comprando ahora, te ahorras aproximadamente un 12%.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PLAZOS */}
      <section className="section section-bg">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>¿Cuándo puedes construir?</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>3 de febrero de 2026 <CheckCircle2 size={18} /></div>
              <div>Inicio de obras de urbanización (ya en marcha)</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Septiembre 2026</div>
              <div>Puedes empezar a edificar simultáneamente a la urbanización</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Junio 2027</div>
              <div>Recepción de la urbanización por el Ayuntamiento</div>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem', fontWeight: 500, color: 'var(--accent-dark)' }}>
            No tienes que esperar a que termine la urbanización para construir tu casa.
          </p>
        </div>
      </section>

      {/* SECTION 5 - LOCALIZACIÓN */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <MapPin size={48} color="var(--accent-color)" style={{ margin: '0 auto 1.5rem' }} />
          <h2>En el corazón del Valle del Guadalhorce</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Estación de Cártama combina la tranquilidad de un entorno natural con una conectividad excepcional:
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div className="glass-box" style={{ flex: '1 1 200px', padding: '1.5rem 1rem' }}>
              <span style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Car size={36} color="var(--accent-color)" /></span>
              <strong>15 min</strong><br/><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hasta Málaga capital</span>
            </div>
            <div className="glass-box" style={{ flex: '1 1 200px', padding: '1.5rem 1rem' }}>
              <span style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Building2 size={36} color="var(--accent-color)" /></span>
              <strong>5 min</strong><br/><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hasta el PTA</span>
            </div>
            <div className="glass-box" style={{ flex: '1 1 200px', padding: '1.5rem 1rem' }}>
              <span style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Plane size={36} color="var(--accent-color)" /></span>
              <strong>10 min</strong><br/><span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hasta el aeropuerto</span>
            </div>
          </div>
          
          <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)', border: '1px solid var(--border-color)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=36.743489,-4.607881&hl=es&z=15&output=embed" 
              width="100%" 
              height="400" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>
            Una ubicación que atrae cada vez más a profesionales bien remunerados del sector tecnológico, lo que sostiene y empuja la demanda de alquiler en la zona.
          </p>
        </div>
      </section>

      {/* SECTION 6 - FAQs */}
      <section className="section section-bg">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center' }}>Preguntas Frecuentes</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Qué significa adherirse a la Junta de Compensación?</h3>
            <p className="faq-answer">Es el mecanismo legal por el que los propietarios de suelo urbanizable gestionan colectivamente la urbanización. Al comprar el solar, pasas a formar parte de ella automáticamente. Las cuotas de urbanización son tu aportación a las obras comunes (viales, servicios, zonas verdes).</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Estoy obligado a construir?</h3>
            <p className="faq-answer">No. Puedes comprar el solar, pagar las cuotas de urbanización y decidir más adelante si construyes o vendes. No hay ninguna obligación de edificar.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Cuándo podría empezar a construir mi casa?</h3>
            <p className="faq-answer">Desde septiembre de 2026. La edificación puede simultanearse con las obras de urbanización, por lo que no tienes que esperar a que estas finalicen.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Puedo construir una casa prefabricada?</h3>
            <p className="faq-answer">Sí. La normativa lo permite. Eso reduce considerablemente los costes y plazos de construcción.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Puedo hacer dos viviendas en la misma parcela?</h3>
            <p className="faq-answer">Sí, la tipología lo permite. Puedes construir dos unidades, lo que abre opciones interesantes tanto para uso propio como para inversión.</p>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">¿Quedan más solares disponibles?</h3>
            <p className="faq-answer">Quedan muy pocas unidades. Esta promoción está prácticamente agotada — la mayoría ya están vendidos o reservados.</p>
          </div>
          
          <div className="faq-item" style={{ borderBottom: 'none' }}>
            <h3 className="faq-question">¿Con quién hablo si quiero más información?</h3>
            <p className="faq-answer">Directamente con Pedro Pablo Castro, propietario y presidente de la Junta de Compensación.<br/><br/>
            <strong>Teléfono:</strong> 648 847 599<br/>
            <strong>Correo:</strong> castroescuderop@gmail.com</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section" style={{ backgroundColor: 'var(--accent-color)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ color: 'white' }}>¿Te interesa? Quedan muy pocas unidades.</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Contacta directamente con el propietario. Sin intermediarios, sin comisiones.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="tel:+34648847599" className="btn" style={{ backgroundColor: 'white', color: 'var(--accent-color)', width: '100%', maxWidth: '300px', fontWeight: 600 }}>
              <Phone size={20} style={{ marginRight: '10px' }} /> Llamar ahora
            </a>
            <a href="mailto:castroescuderop@gmail.com" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', width: '100%', maxWidth: '300px' }}>
              Enviar mensaje
            </a>
          </div>
        </div>
      </section>
      
      <footer style={{ padding: '2rem 0', textAlign: 'center', backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>© 2026 Solares Cártama. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
