import { ArrowUpRight, Quote } from 'lucide-react';
import styles from './Professionals.module.css';

const professionals = [
  {
    name: 'Kenia Maia',
    role: 'Psicóloga e Cofundadora',
    quote: 'Acredito que o momento de angústia pode ser o ponto de partida para a sua maior transformação.',
    imgClass: styles.bgYellow
  },
  {
    name: 'Isaac Martins',
    role: 'Psicólogo e Fundador',
    quote: 'Meu objetivo é proporcionar uma experiência positiva e descontraída, sem deixar a seriedade de lado.',
    imgClass: styles.bgBlue
  },
  {
    name: 'Tatiane Soares',
    role: 'Psicóloga e Supervisora',
    quote: 'Foco no desenvolvimento da empatia, diálogo e na disposição para mudanças profundas.',
    imgClass: styles.bgGreen
  }
];

export function Professionals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.featured}>
          <div className={styles.featuredVisual}>
            <div className={styles.doctorImgMock}></div>
            <div className={styles.doctorInfo}>
              <div className={styles.doctorDetails}>
                <h4>Kenia Maia</h4>
                <p>Psicóloga e Cofundadora</p>
              </div>
              <button className={styles.arrowBtn}><ArrowUpRight size={20}/></button>
            </div>
          </div>
        </div>

        <div className={styles.testimonials}>
          <h2 className={styles.quoteTitle}>
            <Quote className={styles.quoteIcon} size={40} /> Experiência de <br/> <span className={styles.highlight}>Transformação</span>
          </h2>
          
          <div className={styles.list}>
            {professionals.map((p, i) => (
              <div key={i} className={styles.proCard}>
                <div className={`${styles.avatar} ${p.imgClass}`}></div>
                <div className={styles.proContent}>
                  <p className={styles.quoteText}>"{p.quote}"</p>
                  <p className={styles.proName}>{p.name}, <span className={styles.proRole}>{p.role}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
