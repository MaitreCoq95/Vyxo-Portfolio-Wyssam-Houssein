// Translation system for bilingual FR/EN portfolio
export type Language = 'fr' | 'en'

export interface Translations {
  header: {
    nav: {
      services: string
      premiumServices: string
      experience: string
      method: string
      skills: string
      contact: string
    }
    cta: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    subtitle: string
    bio: string
    badges: {
      experience: string
      countries: string
      tools: string
    }
    cta: {
      primary: string
      secondary: string
    }
    stats: {
      experience: string
      countries: string
      projects: string
    }
  }
  services: {
    title: string
    subtitle: string
    intro: {
      title: string
      description: string
    }
    list: Array<{
      title: string
      description: string
      deliverables: string
      metrics: string
    }>
  }
  premiumServices: {
    badge: string
    title: string
    subtitle: string
    services: Array<{
      title: string
      description: string
      keyPoints?: string[]
      techStack?: string[]
      deliverables?: string[]
      diagnosticContent?: string[]
      badge: string
    }>
    differentiation: {
      text: string
      tagline: string
    }
  }
  timeline: {
    title: string
    subtitle: string
    jobs: Array<{
      title: string
      company: string
      location: string
      description: string
      achievements: string[]
    }>
  }
  beforeAfter: {
    title: string
    subtitle: string
    before: string
    after: string
    comparisons: Array<{
      before: string
      after: string
    }>
  }
  roi: {
    title: string
    subtitle: string
    metrics: Array<{
      value: string
      label: string
      description: string
    }>
  }
  whyMe: {
    title: string
    subtitle: string
    reasons: Array<{
      title: string
      description: string
    }>
  }
  method: {
    badge: string
    title: string
    subtitle: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  skills: {
    title: string
    subtitle: string
    categories: Array<{
      title: string
      skills: string[]
    }>
  }
  diplomas: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      institution: string
      year: string
      description: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    items: Array<{
      name: string
      role: string
      company: string
      text: string
    }>
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    tagline: string
    navigation: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    services: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    contact: {
      title: string
      email: string
      phone: string
      linkedin: string
    }
    legal: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    copyright: string
  }
  floatingCta: {
    text: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Offres Premium',
        experience: 'Expérience',
        method: 'Méthode',
        skills: 'Compétences',
        contact: 'Contact',
      },
      cta: 'Me Contacter',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Wyssam Houssein',
      title: 'Senior Operations Consultant',
      subtitle: 'Expert Cold Chain Pharma • Agroalimentaire • Excellence Logistique',
      bio: '10+ ans d\'expérience en management d\'opérations logistiques complexes, chaîne du froid pharmaceutique et environnements à haute exigence. Spécialiste GDP, HACCP, ISO 22000, excellence opérationnelle et optimisation des flux sensibles. Je transforme vos opérations en leviers de performance mesurable.',
      badges: {
        experience: '10+ ans d\'expérience',
        countries: 'France & Afrique',
        tools: 'GDP • HACCP • ISO 22000',
      },
      cta: {
        primary: 'Discutons de votre projet',
        secondary: 'Voir mon parcours',
      },
      stats: {
        experience: 'Années d\'expérience',
        countries: 'Collaborateurs managés',
        projects: 'Tonnes/jour gérées',
      },
    },
    services: {
      title: 'Domaines d\'Expertise',
      subtitle: 'Cold Chain • Agroalimentaire • Excellence Opérationnelle',
      intro: {
        title: 'Un accompagnement terrain pour transformer vos opérations',
        description: 'Je combine maîtrise opérationnelle, conformité réglementaire et excellence logistique pour créer de la performance mesurable.',
      },
      list: [
        {
          title: 'Cold Chain Pharma — Transport & Stockage',
          description: 'Gestion bâtiment sous température dirigée, distribution hospitalière/pharmacie, contrôle froid, traçabilité, respect GDP, distribution vaccins',
          deliverables: 'Conformité GDP, Procédures qualité, Traçabilité complète',
          metrics: 'Anomalies froid -80%, Conformité 100%',
        },
        {
          title: 'Logistique Agroalimentaire & Tempérés',
          description: 'Flux alimentaires sensibles, respect HACCP et ISO 22000, contrôle chaîne du froid agro, organisation distribution courte et longue distance',
          deliverables: 'Conformité HACCP/ISO 22000, Process optimisés, Audits',
          metrics: 'Conformité certifiée, Productivité +25%',
        },
        {
          title: 'Excellence Opérationnelle & Management',
          description: 'Direction d\'agence, management jusqu\'à 120 collaborateurs, optimisation productivité, amélioration continue, KPI opérationnels, performance terrain',
          deliverables: 'KPIs opérationnels, Amélioration continue, Climat social',
          metrics: 'Productivité +30%, Turnover -40%',
        },
        {
          title: 'Transport Sensible & Planification',
          description: 'Gestion 500 tonnes/jour, planification ramasses grand compte, gestion flotte + sous-traitance, déploiement TMS',
          deliverables: 'Planning optimisé, Gestion flotte, Reporting KPIs',
          metrics: 'Coûts transport -15%, Fiabilité +95%',
        },
        {
          title: 'Conformité, Qualité & Audits',
          description: 'GDP Transport, HACCP, ISO 22000, ISO 9001, audit interne, process mapping, CAPA terrain, mise en conformité réglementaire',
          deliverables: 'Audits conformité, Process documentés, Plans CAPA',
          metrics: 'Conformité certifiée, Non-conformités -90%',
        },
        {
          title: 'Structuration d\'Agences & Sites',
          description: 'Démarrage sites, supervision quai+camionnage, garant conformité, analyse KPIs rentabilité/productivité/qualité, opérations spéciales',
          deliverables: 'Site opérationnel, Procédures, Formation équipes',
          metrics: 'Site rentable, Équipes autonomes',
        },
      ],
    },
    premiumServices: {
      badge: 'Offres Vyxo by Wyssam',
      title: 'Excellence Opérationnelle & Conformité',
      subtitle: 'Des solutions terrain combinant expertise cold chain, conformité réglementaire et performance opérationnelle pour transformer vos flux sensibles',
      services: [
        {
          title: 'Audit Opérationnel Cold Chain Complet',
          description: 'Diagnostic terrain complet de la chaîne du froid : conformité GDP/HACCP, process, traçabilité, anomalies, non-conformités et plan d\'action correctif avec ROI mesuré.',
          keyPoints: [
            'Audit terrain complet conformité GDP/HACCP/ISO 22000',
            'Diagnostic process & flux de température',
            'Cartographie des non-conformités & risques',
            'Plan CAPA avec priorités et ROI',
            'Accompagnement mise en conformité certifiable',
          ],
          badge: 'Offre exclusive Vyxo — expertise terrain unique sur le marché.',
        },
        {
          title: 'Structuration & Optimisation d\'Agences',
          description: 'Démarrage ou restructuration complète d\'une agence logistique pharma/agro : process, conformité, KPIs, productivité, formation équipes, rentabilité.',
          techStack: ['Management opérationnel', 'KPIs opérationnels', 'Formation terrain', 'Process mapping', 'Amélioration continue'],
          deliverables: [
            'Site opérationnel conforme et rentable',
            'Process documentés et certifiables',
            'Équipes formées et autonomes',
          ],
          badge: 'Solution clé-en-main recherchée par les directions opérationnelles.',
        },
        {
          title: 'Vyxo Operations Excellence Scan™',
          description: 'Audit haut-niveau de la performance opérationnelle : productivité, climat social, conformité, anomalies, gaspillages, opportunités d\'amélioration et plan de transformation.',
          diagnosticContent: [
            'Audit terrain productivité & qualité',
            'Analyse climat social & management',
            'Diagnostic conformité réglementaire',
            'Cartographie des gaspillages & coûts cachés',
            'Plan d\'optimisation & gains mesurables',
          ],
          badge: 'Un service unique combinant opérations, qualité et excellence logistique.',
        },
      ],
      differentiation: {
        text: 'Wyssam combine expertise terrain, conformité pharma/agro et excellence opérationnelle pour transformer les organisations.',
        tagline: 'Un profil terrain rare et puissant.',
      },
    },
    timeline: {
      title: 'Expérience Professionnelle',
      subtitle: '10+ ans d\'expertise en finance et performance',
      jobs: [
        {
          title: 'Consultant Finance & Performance',
          company: 'Vyxo Consulting',
          location: 'France',
          description: 'Conseil en pilotage financier, data et excellence opérationnelle pour PME et ETI',
          achievements: [
            'Accompagnement de 15+ clients en transformation finance',
            'Automatisation de reporting financier (gain 90% de temps)',
            'Mise en place de systèmes de pilotage multi-pays',
          ],
        },
        {
          title: 'Contrôleur de Gestion Groupe',
          company: 'Groupe International',
          location: 'France / Belgique / Allemagne',
          description: 'Pilotage financier multi-pays, budgeting, forecasting et cost control',
          achievements: [
            'Gestion budget annuel 50M€',
            'Forecast rolling mensuel 3 pays',
            'Réduction coûts opérationnels -15%',
          ],
        },
        {
          title: 'Analyste Financier Senior',
          company: 'Cabinet de Conseil',
          location: 'Paris',
          description: 'Analyse financière, modélisation, due diligence et business plans',
          achievements: [
            'Modélisation financière 20+ projets',
            'Due diligence acquisitions',
            'Business plans stratégiques',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Avant / Après mon intervention',
      subtitle: 'Transformation concrète de votre performance opérationnelle et logistique',
      before: 'Avant',
      after: 'Après',
      comparisons: [
        {
          before: 'Désorganisation, process inexistants',
          after: 'Organisation structurée, process documentés',
        },
        {
          before: 'Anomalies froid fréquentes, non-conformités',
          after: 'Conformité GDP/HACCP certifiée, anomalies -80%',
        },
        {
          before: 'Productivité faible, gaspillages',
          after: 'Productivité améliorée +30%, coûts optimisés',
        },
        {
          before: 'Procédures absentes, audits en échec',
          after: 'Procédures certifiables, audits réussis',
        },
        {
          before: 'Équipes désengagées, turnover élevé',
          after: 'Climat social stable, équipes autonomes',
        },
      ],
    },
    roi: {
      title: 'Impact Mesurable',
      subtitle: 'Des résultats concrets et quantifiables',
      metrics: [
        {
          value: '-80%',
          label: 'Anomalies cold chain',
          description: 'Contrôle et conformité GDP/HACCP',
        },
        {
          value: '+30%',
          label: 'Productivité',
          description: 'Optimisation process et amélioration continue',
        },
        {
          value: '-40%',
          label: 'Turnover équipes',
          description: 'Management terrain et climat social',
        },
        {
          value: '100%',
          label: 'Conformité certifiée',
          description: 'GDP, HACCP, ISO 22000',
        },
      ],
    },
    whyMe: {
      title: 'Valeur Ajoutée Vyxo',
      subtitle: 'Ce que j\'apporte au cabinet et à vos projets',
      reasons: [
        {
          title: 'Expertise Terrain Unique',
          description: '10+ ans d\'expérience opérationnelle en cold chain pharma, agro et logistique sensible',
        },
        {
          title: 'Conformité Pharma & Agro',
          description: 'Maîtrise GDP Transport, HACCP, ISO 22000, ISO 9001, audits et certifications',
        },
        {
          title: 'Excellence Opérationnelle',
          description: 'Transformation des process théoriques en performance réelle mesurable',
        },
        {
          title: 'Synergie Vyxo Complète',
          description: 'Complémentarité parfaite avec Nicolas (Finance) et Vivien (Qualité Process)',
        },
      ],
    },
    method: {
      badge: 'Ma Méthode',
      title: 'Méthode Vyxo — 5 étapes',
      subtitle: 'Une approche terrain structurée pour transformer vos opérations, votre conformité et votre performance logistique',
      steps: [
        {
          title: 'Diagnostic opérationnel & conformité terrain',
          description: 'Analyse précise de la conformité GDP/HACCP, process, productivité, climat social et maturité opérationnelle.',
        },
        {
          title: 'Cartographie des flux, risques & non-conformités',
          description: 'Identification des ruptures cold chain, anomalies, risques réglementaires, gaspillages et opportunités d\'amélioration.',
        },
        {
          title: 'Standardisation & Process Excellence',
          description: 'Création de processus certifiables, procédures terrain et règles opérationnelles homogènes pour une performance stable.',
        },
        {
          title: 'KPI Opérationnels & Pilotage Performance',
          description: 'Mise en place de KPIs terrain, tableaux de bord, suivi productivité/qualité/conformité et amélioration continue.',
        },
        {
          title: 'Management, Excellence & Résultats',
          description: 'Accompagnement équipes, formation terrain, optimisation coûts et réduction anomalies avec gains mesurables.',
        },
      ],
    },
    skills: {
      title: 'Compétences & Expertises',
      subtitle: 'Maîtrise opérationnelle et conformité',
      categories: [
        {
          title: 'Cold Chain & Pharma',
          skills: ['GDP Transport', 'Distribution Pharma', 'Température Dirigée', 'Traçabilité', 'Distribution Vaccins'],
        },
        {
          title: 'Agroalimentaire & Conformité',
          skills: ['HACCP', 'ISO 22000', 'ISO 9001', 'Audits Terrain', 'Process Mapping'],
        },
        {
          title: 'Management & Excellence',
          skills: ['Direction d\'Agence', 'Management 120+ pers', 'KPIs Opérationnels', 'Amélioration Continue', 'Climat Social'],
        },
        {
          title: 'Logistique & Transport',
          skills: ['Planification Flux', 'Gestion Flotte', 'TMS (TEOS)', 'Optimisation Tournées', 'Sous-traitance'],
        },
      ],
    },
    diplomas: {
      title: 'Certifications & Compétences',
      subtitle: 'Expertise réglementaire et opérationnelle',
      items: [
        {
          title: 'GDP Transport (Good Distribution Practice)',
          institution: 'Pharma & Cold Chain',
          year: '2020-2025',
          description: 'Maîtrise complète des Bonnes Pratiques de Distribution pharmaceutique, conformité réglementaire',
        },
        {
          title: 'HACCP & ISO 22000',
          institution: 'Agroalimentaire & Sécurité',
          year: '2013-2025',
          description: 'Hygiène alimentaire, sécurité chaîne du froid agro, management qualité alimentaire',
        },
        {
          title: 'ISO 9001 — Process & Management',
          institution: 'Excellence Opérationnelle',
          year: '2014-2025',
          description: 'Système de management qualité, amélioration continue, process mapping, audits',
        },
        {
          title: 'Management Opérationnel & Direction d\'Agence',
          institution: 'Terrain',
          year: '2013-2025',
          description: 'Direction sites sensibles, management 120+ personnes, KPIs, climat social, rentabilité',
        },
      ],
    },
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Ce que disent mes collaborateurs et partenaires',
      items: [
        {
          name: 'Direction Opérationnelle',
          role: 'Directeur des Opérations',
          company: 'Eurotranspharma',
          text: 'Wyssam a transformé notre agence Lyon. Conformité GDP atteinte, productivité +30%, et climat social stabilisé.',
        },
        {
          name: 'Équipe Terrain',
          role: 'Superviseur Qualité',
          company: 'Logistique Pharma',
          text: 'Un manager terrain exceptionnel. Il comprend les enjeux cold chain et sait mettre les équipes en mouvement.',
        },
        {
          name: 'Partenaire Vyxo',
          role: 'Consultant Qualité',
          company: 'Vyxo Consulting',
          text: 'Wyssam apporte l\'expertise opérationnelle qui manquait. Sa complémentarité avec l\'équipe Vyxo est parfaite.',
        },
      ],
    },
    cta: {
      title: 'Prêt à transformer votre performance opérationnelle ?',
      subtitle: 'Discutons de vos enjeux cold chain, conformité et excellence logistique',
      button: 'Prendre rendez-vous',
    },
    footer: {
      tagline: 'Expert Cold Chain • Agroalimentaire • Excellence Logistique',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Offres Premium', href: '#premium-services' },
          { label: 'Expérience', href: '#experience' },
          { label: 'Méthode', href: '#method' },
          { label: 'Compétences', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Expertises',
        links: [
          { label: 'Cold Chain Pharma', href: '#services' },
          { label: 'Agroalimentaire', href: '#services' },
          { label: 'Excellence Opérationnelle', href: '#services' },
          { label: 'Conformité & Audits', href: '#services' },
          { label: 'Management Terrain', href: '#services' },
          { label: 'Structuration Agences', href: '#services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'wyssam.houssein@vyxoconsult.com',
        phone: '06.00.00.00.00',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Légal',
        links: [
          { label: 'Mentions Légales', href: '/legal' },
          { label: 'Politique de Confidentialité', href: '/privacy' },
          { label: 'CGV', href: '/terms' },
        ],
      },
      copyright: '© 2024 Wyssam Houssein - Vyxo Consulting. Tous droits réservés.',
    },
    floatingCta: {
      text: 'Discutons de votre projet',
    },
  },
  en: {
    header: {
      nav: {
        services: 'Services',
        premiumServices: 'Premium Offers',
        experience: 'Experience',
        method: 'Method',
        skills: 'Skills',
        contact: 'Contact',
      },
      cta: 'Contact Me',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Wyssam Houssein',
      title: 'Senior Operations Consultant',
      subtitle: 'Pharma Cold Chain Expert • Agrifood • Logistics Excellence',
      bio: '10+ years of experience in complex logistics operations management, pharmaceutical cold chain and high-demand environments. Specialist in GDP, HACCP, ISO 22000, operational excellence and sensitive flow optimization. I transform your operations into measurable performance drivers.',
      badges: {
        experience: '10+ years of experience',
        countries: 'France & Africa',
        tools: 'GDP • HACCP • ISO 22000',
      },
      cta: {
        primary: 'Let\'s discuss your project',
        secondary: 'View my background',
      },
      stats: {
        experience: 'Years of experience',
        countries: 'Team members managed',
        projects: 'Tons/day managed',
      },
    },
    services: {
      title: 'Services',
      subtitle: 'Finance, Data & Operations Expertise',
      intro: {
        title: 'Tailored support to transform your performance',
        description: 'I combine finance, data, AI and operational excellence to create measurable value in your organization.',
      },
      list: [
        {
          title: 'Financial Performance Management',
          description: 'Implementation of management systems, KPIs, strategic dashboards, multi-country performance tracking',
          deliverables: 'Power BI Dashboards, Monthly Reporting, Custom KPIs',
          metrics: 'Measurable ROI, Reporting Time -50%',
        },
        {
          title: 'Budgeting & Forecasting',
          description: 'Building structured budgets, rolling forecasts, predictive models, scenario simulations',
          deliverables: 'Annual Budget, 12-month Rolling Forecast, Excel/Power BI Models',
          metrics: 'Forecast Accuracy +30%, Decision Reactivity',
        },
        {
          title: 'Cost Control & Optimization',
          description: 'Cost analysis, waste identification, cost of non-quality reduction, ROI action plans',
          deliverables: 'Cost Mapping, Savings Plans, ROI Tracking',
          metrics: 'Identified Savings, Tracked ROI',
        },
        {
          title: 'Finance Automation & AI',
          description: 'Reporting automation, internal AI chatbots, anomaly detection, analysis generation',
          deliverables: 'Automated Reporting, AI Assistants, Smart Alerts',
          metrics: 'Manual Time -90%, Reliability +100%',
        },
        {
          title: 'Data Quality & Governance',
          description: 'Data quality audit, standardization, inconsistency correction, KPI certification',
          deliverables: 'Quality Diagnostic, Correction Plan, Documentation',
          metrics: 'Errors -80%, Data Trust +100%',
        },
        {
          title: 'Finance Operational Excellence',
          description: 'Finance process optimization, standardization, team training, continuous improvement',
          deliverables: 'Optimized Processes, Training, Documentation',
          metrics: 'Efficiency +40%, Team Satisfaction',
        },
      ],
    },
    premiumServices: {
      badge: 'Premium Offers',
      title: 'AI-Powered Finance',
      subtitle: 'Innovative solutions combining finance, data, AI and operational excellence to transform your organization',
      services: [
        {
          title: 'Automated Financial Reporting & AI',
          description: 'Building internal AI assistants, complete automation of monthly reporting, autonomous variance detection and automatic generation of actionable financial analyses.',
          keyPoints: [
            'Internal AI chatbot trained on client data',
            'Monthly reporting produced automatically',
            'Automatic anomaly & variance detection',
            'Manual work reduction (20h → 20 min)',
            'Financial data security & reliability',
          ],
          badge: 'Exclusive Vyxo offer — no equivalent competition in the market.',
        },
        {
          title: 'Predictive Financial Modeling',
          description: 'Creating predictive models to anticipate margin, cash burn, risks, product profitability or the impact of a strategic decision.',
          techStack: ['R Studio', 'Python', 'Advanced Excel (Power Pivot)', 'Power BI', 'Predictive AI Models'],
          deliverables: [
            'Intelligent 3/6/12-month forecast',
            'Decision impact simulation',
            'Dynamic financial models',
          ],
          badge: 'Premium product highly sought after by finance departments.',
        },
        {
          title: 'Vyxo Data Quality Scan™',
          description: 'High-level audit of financial data quality: identification of errors, duplicates, Excel inconsistencies, flow breaks, variance anomalies and poor quality KPIs.',
          diagnosticContent: [
            'Audit of Excel files / systems / reporting',
            'Error source analysis',
            'Data inconsistency mapping',
            'Data quality scoring',
            'Correction & standardization plan',
          ],
          badge: 'A unique service in the market, combining finance, data and operational excellence.',
        },
      ],
      differentiation: {
        text: 'Nicolas combines finance, data, AI and operational excellence to transform organizations.',
        tagline: 'A rare and powerful profile.',
      },
    },
    timeline: {
      title: 'Professional Experience',
      subtitle: '10+ years of finance and performance expertise',
      jobs: [
        {
          title: 'Finance & Performance Consultant',
          company: 'Vyxo Consulting',
          location: 'France',
          description: 'Financial management, data and operational excellence consulting for SMEs and mid-caps',
          achievements: [
            'Supported 15+ clients in finance transformation',
            'Financial reporting automation (90% time savings)',
            'Implementation of multi-country management systems',
          ],
        },
        {
          title: 'Group Management Controller',
          company: 'International Group',
          location: 'France / Belgium / Germany',
          description: 'Multi-country financial management, budgeting, forecasting and cost control',
          achievements: [
            'Annual budget management €50M',
            'Monthly rolling forecast 3 countries',
            'Operating cost reduction -15%',
          ],
        },
        {
          title: 'Senior Financial Analyst',
          company: 'Consulting Firm',
          location: 'Paris',
          description: 'Financial analysis, modeling, due diligence and business plans',
          achievements: [
            'Financial modeling 20+ projects',
            'Acquisition due diligence',
            'Strategic business plans',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Before / After my intervention',
      subtitle: 'Concrete transformation of your financial and operational performance',
      before: 'Before',
      after: 'After',
      comparisons: [
        {
          before: 'Unclear margins, uncontrolled costs',
          after: 'Margin drivers identified and managed',
        },
        {
          before: 'Monthly reporting in 20h, frequent errors',
          after: 'Automated reporting in 20 min, reliable',
        },
        {
          before: 'No forecast, flying blind',
          after: 'Structured budget + reliable rolling forecast',
        },
        {
          before: 'Inconsistent Excel data, duplicates',
          after: 'Data quality under control, certified KPIs',
        },
        {
          before: 'Hidden costs, invisible waste',
          after: 'Cost of non-quality measured + tracked ROI',
        },
      ],
    },
    roi: {
      title: 'Measurable Impact',
      subtitle: 'Concrete and quantifiable results',
      metrics: [
        {
          value: '-90%',
          label: 'Reporting time',
          description: 'Complete automation of monthly reporting',
        },
        {
          value: '+30%',
          label: 'Forecast accuracy',
          description: 'Predictive models and simulations',
        },
        {
          value: '-15%',
          label: 'Operating costs',
          description: 'Optimization and waste elimination',
        },
        {
          value: '100%',
          label: 'Data reliability',
          description: 'Data quality and governance',
        },
      ],
    },
    whyMe: {
      title: 'Why choose me?',
      subtitle: 'A unique profile combining finance, data and operational excellence',
      reasons: [
        {
          title: 'Multi-Country Finance Expertise',
          description: '10+ years of experience in financial management France, Belgium, Germany',
        },
        {
          title: 'Data & AI Mastery',
          description: 'Power BI, Python, R, Advanced Excel, automation and AI',
        },
        {
          title: 'Operational Excellence',
          description: 'Process optimization, quality, continuous improvement',
        },
        {
          title: 'Measurable Results',
          description: 'Tracked ROI, certified KPIs, quantifiable impact',
        },
      ],
    },
    method: {
      badge: 'My Method',
      title: 'Vyxo Method — 5 steps',
      subtitle: 'A structured and proven approach to transform your financial performance, quality and operations',
      steps: [
        {
          title: 'Financial & operational quality diagnostic',
          description: 'Precise analysis of margins, costs, variances, data reliability and process maturity.',
        },
        {
          title: 'Flow, data & risk mapping',
          description: 'Identification of process breaks, data inconsistencies, operational risks and variability sources.',
        },
        {
          title: 'Standardization & Operational Excellence',
          description: 'Creation of processes, financial models and homogeneous management rules for stable performance.',
        },
        {
          title: 'KPI, Automation & Management Systems',
          description: 'Building Power BI / Advanced Excel dashboards and automation of quality + finance reporting.',
        },
        {
          title: 'Management, Excellence & ROI',
          description: 'CEO/Executive support, cost optimization and cost of non-quality reduction with measurable gains.',
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Technical stack and expertise',
      categories: [
        {
          title: 'Finance & Management',
          skills: ['Management Control', 'Budgeting & Forecasting', 'Cost Control', 'Financial Analysis', 'Business Planning'],
        },
        {
          title: 'Data & BI',
          skills: ['Power BI', 'Advanced Excel', 'Power Query', 'DAX', 'SQL'],
        },
        {
          title: 'AI & Automation',
          skills: ['Python', 'R Studio', 'Predictive Models', 'AI Chatbots', 'Automation'],
        },
        {
          title: 'ERP & Systems',
          skills: ['SAP', 'Oracle', 'NetSuite', 'Sage', 'Cegid'],
        },
      ],
    },
    diplomas: {
      title: 'Education & Certifications',
      subtitle: 'Academic and professional background',
      items: [
        {
          title: 'Master II Corporate Finance',
          institution: 'Business School',
          year: '2013',
          description: 'Specialization in Finance, Management Control, Audit',
        },
        {
          title: 'Data & BI Certifications',
          institution: 'Self-taught',
          year: '2018-2024',
          description: 'Power BI, Python, R, Advanced Excel, AI',
        },
        {
          title: 'Management Control Certification',
          institution: 'DFCG',
          year: '2015',
          description: 'Diploma from the Federation of Management Controllers',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What my clients say',
      items: [
        {
          name: 'Marie Dubois',
          role: 'Chief Financial Officer',
          company: 'Industrial Group',
          text: 'Nicolas transformed our financial reporting. We saved 90% of time and reliability is perfect.',
        },
        {
          name: 'Jean Martin',
          role: 'CEO',
          company: 'Tech Startup',
          text: 'A true expert who combines finance and data. His predictive models allowed us to anticipate our cash needs.',
        },
        {
          name: 'Sophie Laurent',
          role: 'Management Controller',
          company: 'Export SME',
          text: 'Quality support, measurable results. Nicolas structured our multi-country management.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your financial performance?',
      subtitle: 'Let\'s discuss your project and objectives',
      button: 'Schedule a meeting',
    },
    footer: {
      tagline: 'Finance Expert • Data • AI • Operational Excellence',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Premium Offers', href: '#premium-services' },
          { label: 'Experience', href: '#experience' },
          { label: 'Method', href: '#method' },
          { label: 'Skills', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Financial Management', href: '#services' },
          { label: 'Budgeting & Forecasting', href: '#services' },
          { label: 'Cost Control', href: '#services' },
          { label: 'Automation & AI', href: '#services' },
          { label: 'Data Quality', href: '#services' },
          { label: 'Operational Excellence', href: '#services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'wyssam.houssein@vyxoconsult.com',
        phone: '06.00.00.00.00',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Legal Notice', href: '/legal' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms & Conditions', href: '/terms' },
        ],
      },
      copyright: '© 2024 Wyssam Houssein - Vyxo Consulting. All rights reserved.',
    },
    floatingCta: {
      text: 'Let\'s discuss your project',
    },
  },
}
