import { useState } from 'react';
import { Sparkles, Brain, Activity, Sparkle, Star, Layers, ArrowRight } from 'lucide-react';
import styles from './HighlightedServices.module.css';

const segmentedData = [
  {
    tabName: "Saúde Mental",
    icon: Brain,
    services: [
      { title: "Psicoterapia casais & família", desc: "Espaço de escuta e mediação para fortalecer vínculos e melhorar a comunicação." },
      { title: "Avaliação psicológica", desc: "Processo estruturado com testes e entrevistas, indicado para bariátrica, judiciais, concursos e RH." },
      { title: "Psicopedagogia", desc: "Acompanhamento pedagógico para desenvolvimento escolar e superação de dificuldades de aprendizagem." },
      { title: "Psiquiatria", desc: "Atendimento médico em saúde mental com abordagem humanizada e cuidado individualizado." }
    ]
  },
  {
    tabName: "Corpo",
    icon: Activity,
    services: [
      { title: "Quiropraxia", desc: "Alinhamento corporal, melhora da postura e alívio de dores intensas." },
      { title: "Ventosaterapia", desc: "Melhora a circulação sanguínea e promove profundo relaxamento muscular." },
      { title: "Massoterapia", desc: "Massagens voltadas puramente para o relaxamento e redução constante do estresse." }
    ]
  },
  {
    tabName: "Estética",
    icon: Sparkle,
    services: [
      { title: "Limpeza de pele", desc: "Tratamentos para saúde, renovação celular profunda e equilíbrio da pele." },
      { title: "Consultoria skincare", desc: "Rotina completamente personalizada para sua pele com orientação prática e diária." }
    ]
  },
  {
    tabName: "Integrativo",
    icon: Star,
    services: [
      { title: "Acupuntura sistêmica", desc: "Equilíbrio do corpo e da mente através dos saberes milenares da medicina chinesa." },
      { title: "Auriculoterapia", desc: "Estimulação de pontos na orelha para garantir equilíbrio físico e emocional." },
      { title: "Terapia Reiki", desc: "Promove relaxamento profundo, energização e equilíbrio dos chakras." },
      { title: "Terapia floral", desc: "Auxilia na administração e no equilíbrio emocional natural profundo." },
      { title: "Leitura de aura", desc: "Ferramenta profunda de autoconhecimento psíquico e cura interior." }
    ]
  },
  {
    tabName: "Outros",
    icon: Layers,
    services: [
      { title: "Atendimento jurídico", desc: "Orientação e suporte constante em demandas legais de nossos pacientes." },
      { title: "Palestras e eventos", desc: "Conteúdos elaborados para expansão de vida em grandes empresas e grupos." }
    ]
  }
];

export function HighlightedServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section} id="servicos">
      <div className={styles.header}>
        <div className={styles.badge}>CUIDADO SEGMENTADO</div>
        <h2 className={styles.title}>
          Encontre o serviço ideal para suas <span className={styles.highlight}>necessidades</span>
          <Sparkles className={styles.titleIcon} />
        </h2>
      </div>

      <div className={styles.tabsContainer}>
        {segmentedData.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={index}
              className={`${styles.tabBtn} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <Icon size={18} strokeWidth={2.5} />
              {category.tabName}
            </button>
          );
        })}
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {segmentedData[activeTab].services.map((s, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              
              <a href="#profissionais" className={styles.cardFooter}>
                <span className={styles.exploreLink}>Saiba mais</span>
                <ArrowRight size={16} className={styles.arrowIcon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
