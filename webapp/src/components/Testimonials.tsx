import { useState } from 'react';
import { ArrowRight, Quote, X } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    author: 'M.S.',
    text: 'A psicoterapia foi um divisor de águas. Aprendi a me conhecer melhor, a aceitar minhas imperfeições e a me perdoar.',
    colorBg: 'var(--accent-teal)',
    colorText: 'var(--text-main)'
  },
  {
    author: 'R.A.',
    text: 'Estou mais consciente de mim mesmo e das minhas necessidades. A terapia permitiu melhorar meus relacionamentos.',
    colorBg: 'var(--accent-green-light)',
    colorText: 'var(--text-main)'
  },
  {
    author: 'C.L.',
    text: 'Meu filho tinha dificuldades com ansiedade, e a terapia o ajudou a desenvolver ferramentas para controlar os medos.',
    colorBg: 'var(--accent-yellow)',
    colorText: 'var(--text-main)'
  }
];

export function Testimonials() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const closeModal = () => setActiveCard(null);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>O que dizem sobre nós</h2>
        <a href="#depoimentos" className={styles.linkAll}>
          Ver todos os relatos <ArrowRight size={20} />
        </a>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card} style={{ backgroundColor: t.colorBg, color: t.colorText }}>
            <Quote className={styles.quoteIcon} size={28} />
            <h3 className={styles.cardTitle}>{t.author}</h3>
            <p className={styles.cardText}>{t.text}</p>
            <div
              className={styles.readMore}
              onClick={() => setActiveCard(i)}
              role="button"
              tabIndex={0}
            >
              <span>Ler relato completo</span>
              <span className={styles.plus}>+</span>
            </div>
            {/* Visual illustration placeholder representing the person */}
            <div className={styles.illustration}></div>
          </div>
        ))}

      </div>

      {activeCard !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: testimonials[activeCard].colorBg,
              color: testimonials[activeCard].colorText
            }}
          >
            <button
              className={styles.closeBtn}
              onClick={closeModal}
              style={{ color: testimonials[activeCard].colorText }}
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            <Quote className={styles.modalQuoteIcon} size={48} />
            <h3 className={styles.modalTitle}>{testimonials[activeCard].author}</h3>
            <p className={styles.modalText}>{testimonials[activeCard].text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
