import { Mail, AlignRight } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Top Nav */}
          <div className={styles.topNav}>
            <ul className={styles.navList}>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Clínicas</a></li>
              <li><a href="#">Tratamentos</a></li>
            </ul>
            <div className={styles.langSelector}>
              PT ▾ <span className={styles.menuIcon}><AlignRight size={20} /></span>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <h3 className={styles.statNumber}>+1000<span className={styles.statUnit}></span></h3>
              <div className={`${styles.statUnderline} ${styles.cyan}`}></div>
              <p className={styles.statLabel}>Pessoas atendidas no programa</p>
            </div>
            <div className={styles.statBox}>
              <h3 className={styles.statNumber}>96<span className={styles.statUnit}>%</span></h3>
              <div className={`${styles.statUnderline} ${styles.purple}`}></div>
              <p className={styles.statLabel}>Taxa de evolução e benefício</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.brandBox}>
            <div className={styles.logo}>
              <img src="/logo (3).png" alt="Cubo Mágico Logo" className={styles.logoImg} />
              Cubo Mágico Hub
            </div>
            <div className={styles.badge}>
              SAÚDE MENTAL EM PRIMEIRO LUGAR
            </div>
            <div className={styles.decorativeWave}>
              <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C5 0 10 0 15 5C20 10 25 10 30 5C35 0 40 0 45 5C50 10 55 10 60 5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.newsTitle}>Assine nossa newsletter!</h4>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Endereço de e-mail" className={styles.input} />
              <button className={styles.btnSubscribe}><Mail size={18} color="var(--bg-dark)" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBarWrapper}>
        <div className={styles.bottomBar}>
          <div className={styles.socials}>
            {/*<a href="#" target="_blank" rel="noopener noreferrer"><span style={{ fontWeight: 'bold' }}>twitter</span></a>*/}
            <a href="https://www.instagram.com/cubomagicohub?igsh=MTJmZXAyaTg5NTl3" target="_blank" rel="noopener noreferrer"><span style={{ fontWeight: 'bold' }}>instagram</span></a>
            {/*<a href="#" target="_blank" rel="noopener noreferrer"><span style={{ fontWeight: 'bold' }}>tiktok</span></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><span style={{ fontWeight: 'bold' }}>linkedin</span></a>*/}
          </div>
          <div className={styles.copyright}>
            © 2026 Cubo Mágico Hub | Todos os direitos reservados
          </div>
          <div className={styles.links}>
            <a href="#">Privacidade</a>
            <a href="https://share.google/sfYtuwFJPbDrb2x6i" target="_blank" rel="noopener noreferrer">Endereço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
