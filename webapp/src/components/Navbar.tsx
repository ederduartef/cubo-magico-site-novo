import { AlignRight } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoCircle}>✦</div>
          <span className={styles.logoText}>Cubo Mágico</span>
        </div>
        
        <div className={styles.rightSection}>
          <nav className={styles.nav}>
            <a href="#servicos" className={styles.navLink}>Serviços</a>
            <a href="#clinicas" className={styles.navLink}>Clínicas</a>
            <a href="#tratamentos" className={styles.navLink}>Tratamentos</a>
          </nav>

          <div className={styles.divider}></div>

          <div className={styles.actions}>
            <span className={styles.lang}>PT ▾</span>
            <button className={styles.menuBtn}>
              <AlignRight size={24} color="var(--text-main)" />
            </button>
            <button className={styles.btnPrimary}>
              Agendar consulta
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
