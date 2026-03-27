import { ArrowDown, Heart, Smile, HouseWifi } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>CUBO MÁGICO HUB</div>
        <h1 className={styles.title}>
          Mais do que um <span className={styles.highlight}>espaço</span>,<br />
          uma comunidade profissional
        </h1>

        <div className={styles.subtitleWrapper}>
          <div className={styles.arrowIcon}>
            <ArrowDown size={20} />
          </div>
          <p className={styles.subtitle}>
            Um coworking de negócios que conecta profissionais qualificados em saúde, bem-estar, estética e eventos.
            Com uma proposta alternativa mais próxima, leve e personalizada, unimos conhecimento, arte e comunidade
            em um ambiente acolhedor, acessível e em constante movimento. Aqui, cada cuidado se transforma em uma experiência.
          </p>
        </div>
      </div>

      <div className={styles.visuals}>
        <div className={`${styles.floatingCard} ${styles.cardConectado}`}>
          <div className={styles.cardBadgeConectado}>Conectado</div>
          <div className={styles.iconWrapper}><HouseWifi size={48} color="#fff" /></div>
        </div>

        <div className={`${styles.floatingCard} ${styles.cardLeveza}`}>
          <div className={styles.iconWrapper}><Smile size={64} color="#fff" /></div>
          <div className={styles.cardBadgeLeveza}>Leveza</div>
        </div>

        <div className={`${styles.floatingCard} ${styles.cardSaude}`}>
          <div className={styles.cardBadgeSaude}>Saúde</div>
          <div className={styles.iconWrapper}><Heart size={48} color="#fff" /></div>
        </div>
      </div>
    </section>
  );
}
