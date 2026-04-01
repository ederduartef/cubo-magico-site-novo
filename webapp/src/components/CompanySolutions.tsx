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
              <a
                href="https://wa.me/5531982725880?text=Ol%C3%A1%2C%20sou%20representante%20de%20uma%20empresa%20e%20gostaria%20de%20solicitar%20uma%20proposta%20de%20atendimento%20corporativo%20com%20o%20Cubo%20M%C3%A1gico%20Hub.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionIconBtn}
              >
                <ArrowUpRight size={20} color="var(--text-main)" />
              </a>
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
