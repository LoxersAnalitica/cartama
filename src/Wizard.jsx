import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hasFunds: ''
  });

  const nextStep = () => {
    if (step === 1 && !formData.name) return;
    if (step === 2 && !formData.email) return;
    if (step === 3 && !formData.phone) return;
    setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFundsSelection = async (value) => {
    const newData = { ...formData, hasFunds: value };
    setFormData(newData);
    await submitForm(newData);
  };

  const submitForm = async (dataToSubmit) => {
    setStatus('submitting');
    try {
      const resp = await fetch('/api/kommo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit)
      });
      if (resp.ok) {
        setStatus('success');
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <CheckCircle size={48} color="var(--accent-color)" style={{ margin: '0 auto 1rem' }} />
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>¡Solicitud enviada!</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Hemos recibido tus datos correctamente. Pedro Pablo se pondrá en contacto contigo muy pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-box">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          Paso {step} de 4
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1,2,3,4].map(s => (
            <div key={s} style={{
              width: '20px', height: '4px', borderRadius: '2px',
              backgroundColor: s <= step ? 'var(--accent-color)' : 'var(--border-color)',
              transition: 'background-color 0.3s'
            }} />
          ))}
        </div>
      </div>

      <div style={{ minHeight: '180px' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <label className="form-label">¿Cuál es tu nombre?</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInput} 
              className="form-input" 
              placeholder="Introduce tu nombre y apellidos"
              onKeyDown={(e) => { if (e.key === 'Enter' && formData.name) nextStep(); }}
            />
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <label className="form-label">¿Cuál es tu correo electrónico?</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInput} 
              className="form-input" 
              placeholder="tu@email.com"
              onKeyDown={(e) => { if (e.key === 'Enter' && formData.email) nextStep(); }}
            />
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <label className="form-label">¿Cuál es tu número de teléfono?</label>
            <div className="phone-wrapper">
              <PhoneInput 
                international 
                defaultCountry="ES" 
                value={formData.phone} 
                onChange={(v) => setFormData({...formData, phone: v})} 
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in">
            <label className="form-label" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              ¿Cuentas actualmente con 110.000 euros?
            </label>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Los bancos no hipotecan suelo, por lo que es necesario disponer de fondos propios.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn btn-outline" 
                style={{ flex: 1, padding: '1rem' }}
                onClick={() => handleFundsSelection('Sí')}
                disabled={status === 'submitting'}
              >
                Sí
              </button>
              <button 
                className="btn btn-outline" 
                style={{ flex: 1, padding: '1rem' }}
                onClick={() => handleFundsSelection('No')}
                disabled={status === 'submitting'}
              >
                No
              </button>
            </div>
            {status === 'submitting' && (
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--accent-color)' }}>
                Enviando...
              </p>
            )}
            {status === 'error' && (
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#e74c3c' }}>
                Error al enviar la solicitud. Por favor, inténtalo de nuevo.
              </p>
            )}
          </div>
        )}
      </div>

      {step < 4 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
          {step > 1 ? (
            <button onClick={prevStep} className="btn btn-outline" style={{ padding: '0.75rem 1.25rem' }}>
              <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Atrás
            </button>
          ) : <div></div>}
          
          <button 
            onClick={nextStep} 
            className="btn btn-primary" 
            style={{ padding: '0.75rem 1.5rem' }}
            disabled={(step===1 && !formData.name) || (step===2 && !formData.email) || (step===3 && !formData.phone)}
          >
            Siguiente <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      )}
    </div>
  );
}
