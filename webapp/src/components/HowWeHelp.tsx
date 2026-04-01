import { useState, useEffect } from 'react';
import { AlertTriangle, Sparkles } from 'lucide-react';
import styles from './HowWeHelp.module.css';

const services = [
  {
    title: "Psicoterapia",
    description: "Atendimentos com profissionais preparados, focados em autoconhecimento, saúde emocional e qualidade de vida."
  },
  {
    title: "Avaliação neuropsicológica",
    description: "Investigação das funções cognitivas, auxiliando na identificação de condições como autismo, TDAH e dificuldades de aprendizagem."
  },
  {
    title: "Psicopedagogia",
    description: "Acompanhamento pedagógico para desenvolvimento escolar e superação de dificuldades de aprendizagem."
  },
  {
    title: "Psiquiatria",
    description: "Atendimento médico em saúde mental com abordagem humanizada e cuidado individualizado."
  },
  {
    title: "Avaliação psicológica",
    description: "Processo estruturado com testes e entrevistas, indicado para bariátrica, processos judiciais, concursos e RH."
  },
  {
    title: "Psicoterapia para casais",
    description: "Espaço de escuta e mediação para fortalecer vínculos e melhorar a comunicação."
  },
  {
    title: "Massagem terapêutica",
    description: "Técnicas corporais que aliviam tensões, dores e promovem relaxamento físico e mental."
  },
  {
    title: "Podologia",
    description: "Cuidados especializados com os pés, tratando calosidades, rachaduras e manutenção preventiva."
  },
  {
    title: "Bronzeamento natural",
    description: "Experiência de autocuidado com horário personalizado, em um ambiente relaxante com acesso a piscina."
  },
  {
    title: "Barbearia",
    description: "Corte e barba com atendimento personalizado, com possibilidade de incluir visagismo de forma opcional."
  }
];

export function HowWeHelp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4500); // Troca a cada 4.5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.howWeHelp}>
      <div className={styles.illustration}>
        <div className={styles.carouselContainer}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceCard} ${index === currentIndex ? styles.active : ''}`}
            >
              <div className={styles.iconContainer}>
                <Sparkles size={28} className={styles.sparkleIcon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
              <div className={styles.badge}>SERVIÇOS EM DESTAQUE</div>
            </div>
          ))}
          <div className={styles.indicators}>
            {services.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => setCurrentIndex(index)}
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
          Falar com a nossa equipe &gt;
        </a>
      </div>
    </section>
  );
}
