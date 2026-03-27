import { ArrowUpRight } from 'lucide-react';
import styles from './CompanySolutions.module.css';

export function CompanySolutions() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>ATENDIMENTO CORPORATIVO</div>
          <h2 className={styles.title}>
            Cuide das pessoas que fazem sua empresa <span className={styles.underline}>acontecer</span>
          </h2>
          <p className={styles.subtitle}>
            Criamos experiências personalizadas de bem-estar, saúde mental e autocuidado para equipes. 
            Realizamos atendimentos e eventos no nosso espaço ou na sua empresa.
          </p>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.cardVisual}>
            <img 
              src="/Flat_design_vector_202603271744.png" 
              alt="Atendimento Corporativo" 
              className={styles.companyImage} 
            />
            <div className={styles.cardAction}>
              <span className={styles.cardActionText}>Solicitar a proposta</span>
              <button className={styles.actionIconBtn}>
                <ArrowUpRight size={20} color="var(--text-main)" />
              </button>
            </div>
          </div>
          <p className={styles.cardFooterText}>
            Alcance resultados com qualidade de vida de colaboradores a CEOs.
          </p>
        </div>
      </div>
    </section>
  );
}
