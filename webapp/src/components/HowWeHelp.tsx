import { useState, useEffect, useRef } from 'react';
import {
  AlertTriangle, ArrowRight,
  Brain, Stethoscope, BookOpen, ClipboardList,
  HeartHandshake, Hand, Footprints,
  Sun, Scissors
} from 'lucide-react';
import styles from './HowWeHelp.module.css';

const services = [
  {
    title: "Psicoterapia",
    description: "Atendimentos com profissionais preparados, focados em autoconhecimento, saúde emocional e qualidade de vida.",
    icon: Brain,
    color: "#e8f4f8"
  },
  {
    title: "Avaliação neuropsicológica",
    description: "Investigação das funções cognitivas, auxiliando na identificação de condições como autismo, TDAH e dificuldades de aprendizagem.",
    icon: ClipboardList,
    color: "#f3eefe"
  },
  {
    title: "Psicopedagogia",
    description: "Acompanhamento pedagógico para desenvolvimento escolar e superação de dificuldades de aprendizagem.",
    icon: BookOpen,
    color: "#eefdf3"
  },
  {
    title: "Psiquiatria",
    description: "Atendimento médico em saúde mental com abordagem humanizada e cuidado individualizado.",
    icon: Stethoscope,
    color: "#fef4ec"
  },
  {
    title: "Avaliação psicológica",
    description: "Processo estruturado com testes e entrevistas, indicado para bariátrica, processos judiciais, concursos e RH.",
    icon: ClipboardList,
    color: "#fff8e7"
  },
  {
    title: "Psicoterapia para casais",
    description: "Espaço de escuta e mediação para fortalecer vínculos e melhorar a comunicação.",
    icon: HeartHandshake,
    color: "#feeef0"
  },
  {
    title: "Massagem terapêutica",
    description: "Técnicas corporais que aliviam tensões, dores e promovem relaxamento físico e mental.",
    icon: Hand,
    color: "#f0fdf4"
  },
  {
    title: "Podologia",
    description: "Cuidados especializados com os pés, tratando calosidades, rachaduras e manutenção preventiva.",
    icon: Footprints,
    color: "#fef9ec"
  },
  {
    title: "Bronzeamento natural",
    description: "Experiência de autocuidado com horário personalizado, em um ambiente relaxante com acesso a piscina.",
    icon: Sun,
    color: "#fffbea"
  },
  {
    title: "Barbearia",
    description: "Corte e barba com atendimento personalizado, com possibilidade de incluir visagismo de forma opcional.",
    icon: Scissors,
    color: "#f0f4ff"
  }
];

export function HowWeHelp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number, dir: 'left' | 'right' = 'left') => {
    setDirection(dir);
    setCurrentIndex(index);
  };

  const next = () => {
    goTo((currentIndex + 1) % services.length, 'left');
    resetTimer();
  };

  const prev = () => {
    goTo((currentIndex - 1 + services.length) % services.length, 'right');
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection('left');
      setCurrentIndex(prev => (prev + 1) % services.length);
    }, 4500);
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
    }
    touchStartX.current = null;
  };

  const service = services[currentIndex];
  const Icon = service.icon;

  return (
    <section className={styles.howWeHelp}>
      <div
        className={styles.illustration}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselContainer}>
          <div
            key={currentIndex}
            className={`${styles.serviceCard} ${styles[`slide_${direction}`]}`}
            style={{ backgroundColor: service.color }}
          >
            <div className={styles.iconContainer}>
              <Icon size={28} strokeWidth={2} />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
            <div className={styles.badge}>SERVIÇOS EM DESTAQUE</div>
          </div>

          <div className={styles.indicators}>
            {services.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => { goTo(index, index > currentIndex ? 'left' : 'right'); resetTimer(); }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Como podemos <br /> ajudar você? <AlertTriangle color="var(--accent-yellow)" size={48} className={styles.icon} />
        </h2>
        <p className={styles.text}>
          Trabalhamos com especialistas para criar processos centrados no ser humano que unem
          saúde emocional e crescimento sustentável.
        </p>
        <p className={styles.text}>
          Encontre o serviço ideal para suas necessidades: psicoterapia, avaliação, psicopedagogia e muito mais.
        </p>
        <a
          href="https://wa.me/5531982725880?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe%20do%20Cubo%20M%C3%A1gico%20Hub.%20Podem%20me%20ajudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          Falar com a nossa equipe <ArrowRight size={18} style={{ marginLeft: '0.4rem' }} />
        </a>
      </div>
    </section>
  );
}
