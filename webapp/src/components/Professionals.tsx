import { useState, useEffect, useRef } from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';
import styles from './Professionals.module.css';

const professionals = [
  {
    name: 'Kenia Maia',
    role: 'Psicóloga e Cofundadora',
    crp: '',
    quote: 'Acredito que o momento de angústia pode ser o ponto de partida para a sua maior transformação.',
    initials: 'KM',
    gradient: 'linear-gradient(135deg, #E9B44C 0%, #c4892a 100%)',
    ctaLabel: 'Agendar com Kenia',
    ctaMsg: 'Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20com%20a%20Kenia%20Maia%20no%20Cubo%20Mágico%20Hub.%20Pode%20me%20ajudar%3F'
  },
  {
    name: 'Isaac Martins',
    role: 'Psicólogo, Presidente e Fundador',
    crp: '',
    quote: 'Meu objetivo é proporcionar uma experiência positiva e descontraída, sem deixar a seriedade de lado. Cada ser é único.',
    initials: 'IM',
    gradient: 'linear-gradient(135deg, #4D7C8A 0%, #2f5f6b 100%)',
    ctaLabel: 'Agendar com Isaac',
    ctaMsg: 'Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20com%20o%20Isaac%20Martins%20no%20Cubo%20Mágico%20Hub.%20Pode%20me%20ajudar%3F'
  },
  {
    name: 'Tatiane Soares',
    role: 'Psicóloga e Supervisora Clínica',
    crp: 'CRP: 04/61014',
    quote: 'Foco no desenvolvimento da empatia, diálogo e na disposição para mudanças profundas.',
    initials: 'TS',
    gradient: 'linear-gradient(135deg, #7abb7a 0%, #4a8f4a 100%)',
    ctaLabel: 'Agendar com Tatiane',
    ctaMsg: 'Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20com%20a%20Tatiane%20Soares%20no%20Cubo%20Mágico%20Hub.%20Pode%20me%20ajudar%3F'
  }
];

const WA_BASE = 'https://wa.me/5531982725880?text=';

export function Professionals() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + professionals.length) % professionals.length);
  const next = () => goTo((current + 1) % professionals.length);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % professionals.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      resetTimer();
    }
    touchStartX.current = null;
  };

  const p = professionals[current];

  return (

    <section className={styles.section} id="profissionais">
      <div className={styles.container}>
      <div className={styles.badge}>PROFISSIONAIS</div>
        {/* Lado esquerdo — Card carrossel */}

        
        <div className={styles.carouselWrapper}>
          <div
            className={`${styles.featuredCard} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Avatar */}
            <div className={styles.avatarArea} style={{ background: p.gradient }}>
              <span className={styles.initials}>{p.initials}</span>
            </div>

            {/* Info do profissional */}
            <div className={styles.cardFooter}>
              <div className={styles.doctorDetails}>
                <h4>{p.name}</h4>
                <p>{p.role}{p.crp ? ` · ${p.crp}` : ''}</p>
              </div>
            </div>

            {/* CTA personalizado */}
            <a
              href={`${WA_BASE}${p.ctaMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              {p.ctaLabel}
              <ArrowUpRight size={18} className={styles.ctaIcon} />
            </a>
          </div>

          {/* Indicadores de ponto */}
          <div className={styles.dots}>
            {professionals.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => { goTo(i); resetTimer(); }}
                aria-label={`Profissional ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lado direito — Citações */}
        <div className={styles.testimonials}>
          <h2 className={styles.quoteTitle}>
            <Quote className={styles.quoteIcon} size={40} />
            Experiência de <br />
            <span className={styles.highlight}>Transformação</span>
          </h2>

          <div className={styles.list}>
            {professionals.map((prof, i) => (
              <div
                key={i}
                className={`${styles.proCard} ${i === current ? styles.proCardActive : ''}`}
                onClick={() => { goTo(i); resetTimer(); }}
              >
                <div className={styles.avatarSmall} style={{ background: prof.gradient }}>
                  <span className={styles.initialsSmall}>{prof.initials}</span>
                </div>
                <div className={styles.proContent}>
                  <p className={styles.quoteText}>"{prof.quote}"</p>
                  <p className={styles.proName}>
                    {prof.name}, <span className={styles.proRole}>{prof.role}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
