import { AlignRight } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo (3).png" alt="Cubo Mágico Logo" className={styles.logoImg} />
          <span className={styles.logoText}>Cubo Mágico</span>
        </div>

        <div className={styles.rightSection}>
          <nav className={styles.nav}>
            <a href="#servicos" className={styles.navLink}>Serviços</a>
            <a href="#empresas" className={styles.navLink}>Corporativo</a>
            <a href="#profissionais" className={styles.navLink}>Profissionais</a>
          </nav>

          <div className={styles.divider}></div>

          <div className={styles.actions}>
            <span className={styles.lang}>PT ▾</span>
            <button className={styles.menuBtn}>
              <AlignRight size={24} color="var(--text-main)" />
            </button>
            <a
              href="https://wa.me/5531982725880?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20no%20Cubo%20M%C3%A1gico%20Hub!%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
