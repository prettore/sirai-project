const translations = {
    pt: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'Sobre',
        'nav-objectives': 'Objetivos',
        'nav-research': 'Pesquisa',
        'nav-team': 'Equipe',
        'nav-publications': 'Publicações',
        'nav-dissemination': 'Disseminação',
        
        // Hero
        'hero-subtitle': 'Sistemas Resilientes para Ambientes Inteligentes',
        'hero-description': 'Abordando a Qualidade dos Dados e a Consciência de Contexto',
        'hero-description-en': 'Resilient Systems for Intelligent Environments',
        
        // About
        'about-title': 'Sobre o Projeto',
        'about-p1': 'O projeto <strong>SiR.AI</strong> (Sistemas Resilientes para Ambientes Inteligentes) surge em resposta aos desafios emergentes na era da convergência tecnológica. O avanço das tecnologias de comunicação e processamento tem impulsionado o surgimento de novos paradigmas que transformam a sociedade, incluindo a Internet das Coisas (IoT), Big Data, Computação em Nuvem e Inteligência Artificial.',
        'about-p2': 'Esses avanços permitem o desenvolvimento de novos modelos de organização da sociedade e negócios, como <strong>Cidades Inteligentes</strong>, <strong>Sistemas de Transporte Inteligentes</strong>, <strong>Indústria 4.0</strong> e aplicações em <strong>Defesa e Segurança</strong>.',
        'central-question': 'Questão Central',
        'central-question-text': '"Como melhorar a qualidade dos dados e explorar o contexto para desenvolver sistemas resilientes em ambientes inteligentes?"',
        'funding-title': 'Apoio',
        'funding-description': 'CNPq/MCTI/FNDCT nº 21/2024 – Programa Conhecimento Brasil – Atração e Fixação de Talentos',
        
        // Challenges
        'challenges-title': 'Desafios Emergentes',
        'challenges-data-title': 'Perspectiva dos Dados',
        'challenges-data-1': 'Falta de padronização',
        'challenges-data-2': 'Problemas de qualidade e confiabilidade',
        'challenges-data-3': 'Cobertura espaço-temporal limitada',
        'challenges-systems-title': 'Perspectiva dos Sistemas',
        'challenges-systems-1': 'Falta de adaptabilidade das soluções a cenários dinâmicos',
        'challenges-systems-2': 'Rigidez frente a mudanças',
        'challenges-systems-3': 'Necessidade de consciência de contexto',
        
        // Objectives
        'objectives-title': 'Objetivos',
        'objective-general-title': 'Objetivo Geral',
        'objective-general-text': 'Apoiar ambientes inteligentes (cidades e sistemas de transportes inteligentes, indústria 5.0, agricultura, e campo de batalha), fornecendo mecanismos para:',
        'objective-general-1': 'Enriquecimento de dados',
        'objective-general-2': 'Consciência de contexto e adaptabilidade para aplicações, modelos e protocolos',
        'objectives-specific-title': 'Objetivos Específicos',
        'objective-1': 'Aprimorar a qualidade dos dados com técnicas de fusão, estatística e IA',
        'objective-2': 'Avançar no monitoramento e detecção de contexto em dispositivos conectados',
        'objective-3': 'Desenvolver soluções adaptáveis ao contexto para otimizar recursos e decisões',
        'objective-4': 'Utilizar IA generativa para projetar soluções e apoiar decisões rápidas',
        'objective-5': 'Criar interfaces intuitivas para visualização e interpretação dos dados',
        'objective-6': 'Avaliar a precisão, eficiência e uso de recursos das soluções propostas',
        
        // Research
        'research-title': 'Tópicos de Pesquisa',
        'research-area-1-title': 'Modelagem e Análise de Mobilidade',
        'research-area-1-1': 'Caracterização e Projeto de Modelos de Mobilidade Tática',
        'research-area-1-2': 'Comparação Sistemática de Modelos de Mobilidade Tática Sintéticos e Realistas',
        'research-area-1-3': 'Otimização de Topologia de Rede Consciente da Mobilidade para Cenários Táticos',
        'research-area-1-4': 'Previsão de Comportamento de Unidades em Cenários Táticos Usando Deep Learning',
        'research-area-1-5': 'Modelos de Mobilidade Coordenada para Unidades Táticas Mistas UAV-Terrestre',
        'research-area-1-6': 'Adição de novos modelos de mobilidade no emulador Mininet-WiFi',
        'research-area-1-7': 'Explorando Interações de Entidades Móveis para Construir Sistemas Resilientes',
        'research-area-1-8': 'Caracterizando Traços de IoT Social: De Análises Espaço-Temporais a Sociais',
        'research-area-1-9': 'Projetando Modelo de Mobilidade IoT Baseado em Relações Abstratas: Caracterização e Aplicação',

        'research-area-2-title': 'Segurança e Resiliência de Redes',
        'research-area-2-1': 'Detecção de Topologias de Rede para Impulsionar Ataques Cibernéticos',
        'research-area-2-2': 'Diferenciação de entidades de rede através de sua mobilidade usando IA',
        'research-area-2-3': 'Simulação de ataques cibernéticos e contramedidas usando Cyber Operations Research Gym (CybORG)',
        'research-area-2-4': 'Aprendizado Federado para melhorar a segurança e privacidade em redes táticas',
        'research-area-2-5': 'Controlador resiliente contra ameaças cibernéticas em redes IoT definidas por software',
        'research-area-2-6': 'Sistema de defesa cibernética em redes táticas definidas por software',
        'research-area-2-7': 'O Impacto da mobilidade em protocolos baseados em SDN: avaliação e soluções',
        'research-area-2-8': 'De Amizade a Confiança: Adaptando políticas de segurança baseadas em Interações Sociais',
        'research-area-2-9': 'Protocolo OpenFlow leve para redes táticas para reduzir overhead de controle e aumentar a segurança',

        'research-area-3-title': 'IA Generativa e Otimização',
        'research-area-3-1': 'Uso de ferramentas de IA generativa para criar ambientes de rede (NetGen)',
        'research-area-3-2': 'Análise Comparativa de Funções de Agendamento Tradicionais e Baseadas em IA para Redes 6TiSCH',
        'research-area-3-3': 'Resolução de Conflitos em Horários de Trens Usando Grafos Alternativos e Deep Q-Networks',

        'research-applications-title': 'Áreas de Aplicação',
        'tag-smart-cities': 'Cidades Inteligentes',
        'tag-transport': 'Sistemas de Transporte Inteligentes',
        'tag-industry': 'Indústria 4.0/5.0',
        'tag-agriculture': 'Agricultura Inteligente',
        'tag-tactical': 'Redes Táticas',
        'tag-military': 'Internet das Coisas Militar',
        
        // Team
        'team-title': 'Equipe',
        'team-coordinator': 'Coordenador',
        'team-national': 'Principais Colaboradores Nacionais',
        'team-international': 'Principais Colaboradores Internacionais',
        'team-students': 'Estudantes Associados',
        
        // Publications
        'publications-title': 'Publicações',
        'publications-description': 'Contribuições científicas do projeto até o momento',
        'status-approved': 'Aprovado',
        'status-submitted': 'Submetido',
        
        // Dissemination
        'dissemination-title': 'Disseminação',
        'dissemination-description': 'Apresentações, visitas técnicas e workshops do projeto',
        'dissemination-presentations': 'Apresentações',
        'dissemination-presentations-text': 'Apresentações do projeto em conferências, seminários e eventos científicos nacionais e internacionais.',
        'dissemination-visits': 'Visitas Técnicas',
        'dissemination-visits-text': 'Visitas técnicas realizadas a instituições parceiras e centros de pesquisa para troca de conhecimento e colaboração.',
        'dissemination-workshops': 'Workshops',
        'dissemination-workshops-text': 'Workshops organizados pelo projeto para disseminação de conhecimento, treinamento e capacitação de pesquisadores.',
        'coming-soon': 'Em breve: informações sobre apresentações realizadas e futuras.',
        'visit-1-title': 'Agosto de 2025 - H.IAAC UNICAMP',
        'visit-1-text': 'Durante este período, o coordenador participou de atividades no H.IAAC – Hub de Inteligência Artificial e Arquiteturas Cognitivas do IC UNICAMP, além de reuniões com o grupo de pesquisa de Aprendizado Distribuído. A visita teve como objetivo fomentar colaborações no escopo do projeto "Sistemas Resilientes para Ambientes Inteligentes: Abordando a Qualidade dos Dados e a Consciência de Contexto", vinculado ao edital CNPq/MCTI/FNDCT no 21/2024 – Programa Conhecimento Brasil – Atração e Fixação de Talentos.',
        'visit-2-title': 'Outubro de 2025 - Instituto Fraunhofer FKIE',
        'visit-2-text': 'O objetivo desta visita é fortalecer a colaboração entre Brasil e Alemanha no âmbito do projeto "ReSIE – Sistemas Resilientes para Ambientes Inteligentes: Abordando a Qualidade dos Dados e a Consciência de Contexto", apoiado pelo Edital CNPq/MCTI/FNDCT nº 21/2024 – Programa Conhecimento Brasil: Atração e Retenção de Talentos. Durante este período, participarão de reuniões de grupo com os estudantes atualmente supervisionados na Universidade de Bonn e contribuirão para discussões em andamento visando consolidar e desenvolver ainda mais as colaborações estabelecidas entre o Instituto FKIE, a Universidade de Bonn e as instituições brasileiras—a Universidade Federal de Minas Gerais e a Universidade Federal da Bahia.',
        'visit-3-title': 'Outubro de 2025 - Universidade de Osnabrück',
        'visit-3-text': 'O objetivo desta visita é fortalecer a colaboração no âmbito do projeto "ReSIE – Sistemas Resilientes para Ambientes Inteligentes: Abordando a Qualidade dos Dados e a Consciência de Contexto", que é apoiado pelo Edital CNPq/MCTI/FNDCT nº 21/2024 – Programa Conhecimento Brasil: Atração e Retenção de Talentos. Durante este período, participarão de atividades acadêmicas no Grupo de Sistemas Distribuídos e no Departamento de Ciência da Computação da Universidade de Osnabrück. Além disso, participarão de discussões sobre colaborações internacionais de longo prazo, incluindo a preparação de uma submissão ao Edital de Bolsa de Pesquisa do CNPq (Edital nº 16/2025) para uma bolsa de pós-doutorado para o Dr. Bruno, a ser realizada sob minha supervisão.',

// Presentations - WebMedia 2025
    'presentation-1-title': 'Novembro de 2025 - WebMedia 2025',
    'presentation-1-date': 'Novembro 2025',
    'presentation-1-text': 'Durante o WebMedia 2025 - 31º Simpósio Brasileiro de Sistemas Multimídia e Web, realizado na PUC-Rio no Rio de Janeiro, foi apresentado o trabalho intitulado "Análise do uso de Modelos de Linguagem de Grande Escala na Geração de Códigos para Automação Residencial". O trabalho foi desenvolvido por Antonio Cruz (Universidade Federal da Bahia), Paulo H. L. Rettore (Universidade Federal de Minas Gerais) e Bruno P. Santos (Universidade Federal da Bahia). A apresentação abordou a aplicação de modelos de linguagem de grande escala (LLMs) na geração automatizada de códigos para sistemas de automação residencial, explorando as potencialidades e desafios dessa abordagem inovadora no contexto de ambientes inteligentes.',
    
    // Presentations - SDS 2025
    'presentation-2-title': 'Dezembro de 2025 - SDS 2025',
    'presentation-2-date': 'Dezembro 2025',
    'presentation-2-text': 'Durante a 12ª Conferência Internacional sobre Sistemas Definidos por Software (SDS 2025), realizada em Lyon, França, de 2 a 5 de dezembro de 2025, foram apresentados quatro artigos científicos desenvolvidos no âmbito do projeto SiR.AI. Os trabalhos aceitos abordam temas fundamentais para o avanço de sistemas resilientes e inteligentes, incluindo modelos de mobilidade realistas para testes de algoritmos e protocolos em IoT, criação de cenários realistas para aplicações de rede robustas, arquitetura modular para computação e visualização de métricas de mobilidade, e integração de inteligência artificial em simuladores de protocolos de rede. As apresentações contaram com a participação de pesquisadores das instituições parceiras do projeto, incluindo a Universidade Federal de Minas Gerais, Universidade Federal da Bahia, Instituto Fraunhofer FKIE e outras instituições colaboradoras internacionais.',
    'presentation-2-papers': 'Artigos apresentados:',
    'presentation-2-papers-list': '<li><strong>"Towards Realistic Testing of Algorithms and Protocols in IoT Through a Novel Mobility Model"</strong> - Leon Luca Lausberg, Paulo Rettore, Philipp Zißner, Sean Kloth, Edgar S. Oliveira, Clayson Celes, Peter Sevenich e Bruno Santos</li><li><strong>"Enabling the Design of Robust Network Applications by Creating Realistic Scenarios"</strong> - Edgar S. Oliveira, Paulo Rettore, Clayson Celes, Leon Luca Lausberg, Rodolfo Meneguette e Nils Aschenbruck</li><li><strong>"MobMetrics: A Modular Architecture for Computing and Visualizing Mobility Metrics"</strong> - Márcio Filho, Lucas Novais, Leon Luca Lausberg, Peter Sevenich, Paulo Rettore e Bruno Santos</li><li><strong>"SnapAI: a Simulator for Network Algorithms and Protocols with Artificial Intelligence integration"</strong> - João Vitor S. Coelho, Leon Luca Lausberg, Philipp Zißner, Peter Sevenich, Vinícius F. S. Mota, Cássio V. S. Prazeres, Paulo Rettore e Bruno Santos</li>',
        
        // Footer
        'footer-subtitle-pt': 'Sistemas Resilientes para Ambientes Inteligentes',
        'footer-subtitle-en': 'Resilient Systems for Intelligent Environments',
        'footer-contact': 'Contato',
        'footer-coordinator': 'Coordenador: Dr. Paulo H. L. Rettore',
        'footer-copyright': '© 2025 SiR.AI Project. Todos os direitos reservados.',

        // Dissemination Pages
        'visits-page-title': 'Visitas Técnicas',
        'visits-page-description': 'Visitas técnicas realizadas a instituições parceiras e centros de pesquisa para troca de conhecimento e colaboração.',
        'presentations-page-title': 'Apresentações',
        'presentations-page-description': 'Apresentações do projeto em conferências, seminários e eventos científicos nacionais e internacionais.',
        'workshops-page-title': 'Workshops',
        'workshops-page-description': 'Workshops organizados pelo projeto para disseminação de conhecimento, treinamento e capacitação de pesquisadores.',
        'add-photos': 'Adicione fotos aqui',
        'photo-hint': 'Substitua este espaço com imagens da atividade',
        'coming-soon-title': 'Em Breve',
        'presentations-coming-soon': 'Informações sobre apresentações realizadas e futuras serão adicionadas em breve. Fique atento às atualizações!',
        'workshops-coming-soon': 'Informações sobre workshops planejados e realizados serão adicionadas em breve. Fique atento às atualizações!'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-objectives': 'Objectives',
        'nav-research': 'Research',
        'nav-team': 'Team',
        'nav-publications': 'Publications',
        'nav-dissemination': 'Dissemination',
        
        // Hero
        'hero-subtitle': 'Resilient Systems for Intelligent Environments',
        'hero-description': 'Addressing Data Quality and Context Awareness',
        'hero-description-en': 'ReSIE Project',
        
        // About
        'about-title': 'About the Project',
        'about-p1': 'The <strong>SiR.AI</strong> project (Resilient Systems for Intelligent Environments) emerges in response to emerging challenges in the era of technological convergence. The advancement of communication and processing technologies has driven the emergence of new paradigms that transform society, including the Internet of Things (IoT), Big Data, Cloud Computing, and Artificial Intelligence.',
        'about-p2': 'These advances enable the development of new models of social and business organization, such as <strong>Smart Cities</strong>, <strong>Intelligent Transportation Systems</strong>, <strong>Industry 4.0</strong>, and applications in <strong>Defense and Security</strong>.',
        'central-question': 'Central Question',
        'central-question-text': '"How to improve data quality and explore context to develop resilient systems in intelligent environments?"',
        'funding-title': 'Support',
        'funding-description': 'CNPq/MCTI/FNDCT Call No. 21/2024 – Knowledge Brazil Program – Talent Attraction and Retention',
        
        // Challenges
        'challenges-title': 'Emerging Challenges',
        'challenges-data-title': 'Data Perspective',
        'challenges-data-1': 'Lack of standardization',
        'challenges-data-2': 'Quality and reliability issues',
        'challenges-data-3': 'Limited spatio-temporal coverage',
        'challenges-systems-title': 'Systems Perspective',
        'challenges-systems-1': 'Lack of adaptability of solutions to dynamic scenarios',
        'challenges-systems-2': 'Rigidity in the face of changes',
        'challenges-systems-3': 'Need for context awareness',
        
        // Objectives
        'objectives-title': 'Objectives',
        'objective-general-title': 'General Objective',
        'objective-general-text': 'Support intelligent environments (smart cities and transportation systems, industry 5.0, agriculture, and battlefield), providing mechanisms for:',
        'objective-general-1': 'Data enrichment',
        'objective-general-2': 'Context awareness and adaptability for applications, models, and protocols',
        'objectives-specific-title': 'Specific Objectives',
        'objective-1': 'Enhance data quality with fusion, statistical, and AI techniques',
        'objective-2': 'Advance monitoring and context detection in connected devices',
        'objective-3': 'Develop context-adaptive solutions to optimize resources and decisions',
        'objective-4': 'Use generative AI to design solutions and support rapid decisions',
        'objective-5': 'Create intuitive interfaces for data visualization and interpretation',
        'objective-6': 'Evaluate the accuracy, efficiency, and resource usage of proposed solutions',
        
        // Research
        'research-title': 'Research Topics',
        'research-area-1-title': 'Mobility Modeling and Analysis',
        'research-area-1-1': 'Characterizing and Designing Tactical Mobility Models',
        'research-area-1-2': 'A Systematic Comparison of Synthetic and Realistic Tactical Mobility Models',
        'research-area-1-3': 'Mobility-Aware Network Topology Optimization for Tactical Scenarios',
        'research-area-1-4': 'Predicting Unit Behavior in Tactical Scenarios Using Deep Learning',
        'research-area-1-5': 'Coordinated Mobility Models for Mixed UAV-Ground Tactical Units',
        'research-area-1-6': 'Adding new mobility models into the Mininet-WiFi emulator',
        'research-area-1-7': 'Exploring Mobile Entities Interactions to Build Resilient Systems',
        'research-area-1-8': 'Characterizing Social IoT Traces: From Spatiotemporal to Social Analyses',
        'research-area-1-9': 'Designing IoT Mobility Model Based on Abstract Relationships: Characterization and Application',

        'research-area-2-title': 'Network Security and Resilience',
        'research-area-2-1': 'Detecting Network Topologies to Boost Cyber Attacks',
        'research-area-2-2': 'Differentiating network entities through their mobility using AI',
        'research-area-2-3': 'Simulating cyber attacks and countermeasures using Cyber Operations Research Gym (CybORG)',
        'research-area-2-4': 'Federated Learning improving security and privacy in tactical networks',
        'research-area-2-5': 'Resilient controller against cyber threats in software-defined IoT networks',
        'research-area-2-6': 'Cyber defense system in software-defined tactical networks',
        'research-area-2-7': 'The Impact of mobility in SDN-based protocols: evaluation and solutions',
        'research-area-2-8': 'From Friendship to Trustiness: Adapting security policies based on Social Interactions',
        'research-area-2-9': 'An OpenFlow lightweight protocol for tactical networks to reduce control overhead and increase network security',

        'research-area-3-title': 'Generative AI and Optimization',
        'research-area-3-1': 'Using generative AI tools to create network environments (NetGen)',
        'research-area-3-2': 'AI-based Vs. Traditional Scheduling Functions For 6TiSCH Networks: A Comparative Analysis And Development Of New Approaches',
        'research-area-3-3': 'Conflict Resolution in Train Timetabling Using Alternative Graphs and Deep Q-Networks',

        'research-applications-title': 'Application Areas',
        'tag-smart-cities': 'Smart Cities',
        'tag-transport': 'Intelligent Transportation Systems',
        'tag-industry': 'Industry 4.0/5.0',
        'tag-agriculture': 'Smart Agriculture',
        'tag-tactical': 'Tactical Networks',
        'tag-military': 'Military Internet of Things',
        
        // Team
        'team-title': 'Team',
        'team-coordinator': 'Coordinator',
        'team-national': 'Main National Collaborators',
        'team-international': 'Main International Collaborators',
        'team-students': 'Associated Students',
        
        // Publications
        'publications-title': 'Publications',
        'publications-description': 'Scientific contributions of the project to date',
        'status-approved': 'Approved',
        'status-submitted': 'Submitted',
        
        // Dissemination
        'dissemination-title': 'Dissemination',
        'dissemination-description': 'Presentations, technical visits, and project workshops',
        'dissemination-presentations': 'Presentations',
        'dissemination-presentations-text': 'Project presentations at conferences, seminars, and national and international scientific events.',
        'dissemination-visits': 'Technical Visits',
        'dissemination-visits-text': 'Technical visits to partner institutions and research centers for knowledge exchange and collaboration.',
        'dissemination-workshops': 'Workshops',
        'dissemination-workshops-text': 'Workshops organized by the project for knowledge dissemination, training, and researcher capacity building.',
        'coming-soon': 'Coming soon: information about completed and future presentations.',
        'visit-1-title': 'August 2025 - H.IAAC UNICAMP',
        'visit-1-text': 'During this period, the coordinator participated in activities at H.IAAC – Hub for Artificial Intelligence and Cognitive Architectures at IC UNICAMP, as well as meetings with the Distributed Learning research group. The visit aimed to foster collaborations within the scope of the project "Resilient Systems for Intelligent Environments: Addressing Data Quality and Context Awareness," linked to CNPq/MCTI/FNDCT Call for Proposals No. 21/2024 – Knowledge Brazil Program: Talent Attraction and Retention.',
        'visit-2-title': 'October 2025 - Fraunhofer FKIE Institute',
        'visit-2-text': 'The purpose of this visit is to strengthen the collaboration between Brazil and Germany within the scope of the project "ReSIE – Resilient Systems for Intelligent Environments: Addressing Data Quality and Context Awareness," supported by the CNPq/MCTI/FNDCT Call for Proposals No. 21/2024 – Knowledge Brazil Program (Conhecimento Brasil): Talent Attraction and Retention. During this period, they will participate in group meetings with the currently supervised students at the University of Bonn and contribute to ongoing discussions aimed at consolidating and further developing the established collaborations between the FKIE Institute, the University of Bonn, and the Brazilian institutions—the Federal University of Minas Gerais and the Federal University of Bahia.',
        'visit-3-title': 'October 2025 - Osnabrück University',
        'visit-3-text': 'The purpose of this visit is to strengthen collaboration within the framework of the project "ReSIE – Resilient Systems for Intelligent Environments: Addressing Data Quality and Context Awareness," which is supported by the CNPq/MCTI/FNDCT Call for Proposals No. 21/2024 – Knowledge Brazil Program (Conhecimento Brasil): Talent Attraction and Retention. During this period, they will engage in academic activities within the Distributed Systems Group and the Department of Computer Science at Osnabrück University. Additionally, they will participate in discussions on long-term international collaborations, including the preparation of a submission to the CNPq Research Grant (Call No. 16/2025) for a postdoctoral fellowship for Dr. Bruno, to be conducted under my supervision.',

// Presentations - WebMedia 2025
    'presentation-1-title': 'November 2025 - WebMedia 2025',
    'presentation-1-date': 'November 2025',
    'presentation-1-text': 'During WebMedia 2025 - 31st Brazilian Symposium on Multimedia and Web Systems, held at PUC-Rio in Rio de Janeiro, the paper entitled "Analysis of the Use of Large Language Models in Code Generation for Home Automation" was presented. The work was developed by Antonio Cruz (Federal University of Bahia), Paulo H. L. Rettore (Federal University of Minas Gerais), and Bruno P. Santos (Federal University of Bahia). The presentation addressed the application of large language models (LLMs) in automated code generation for home automation systems, exploring the potential and challenges of this innovative approach in the context of intelligent environments.',
    
    // Presentations - SDS 2025
    'presentation-2-title': 'December 2025 - SDS 2025',
    'presentation-2-date': 'December 2025',
    'presentation-2-text': 'During the 12th International Conference on Software Defined Systems (SDS 2025), held in Lyon, France, from December 2 to 5, 2025, four scientific papers developed within the scope of the SiR.AI project were presented. The accepted works address fundamental topics for the advancement of resilient and intelligent systems, including realistic mobility models for testing algorithms and protocols in IoT, creation of realistic scenarios for robust network applications, modular architecture for computing and visualizing mobility metrics, and integration of artificial intelligence in network protocol simulators. The presentations featured the participation of researchers from partner institutions of the project, including the Federal University of Minas Gerais, Federal University of Bahia, Fraunhofer FKIE Institute, and other international collaborating institutions.',
    'presentation-2-papers': 'Presented papers:',
    'presentation-2-papers-list': '<li><strong>"Towards Realistic Testing of Algorithms and Protocols in IoT Through a Novel Mobility Model"</strong> - Leon Luca Lausberg, Paulo Rettore, Philipp Zißner, Sean Kloth, Edgar S. Oliveira, Clayson Celes, Peter Sevenich and Bruno Santos</li><li><strong>"Enabling the Design of Robust Network Applications by Creating Realistic Scenarios"</strong> - Edgar S. Oliveira, Paulo Rettore, Clayson Celes, Leon Luca Lausberg, Rodolfo Meneguette and Nils Aschenbruck</li><li><strong>"MobMetrics: A Modular Architecture for Computing and Visualizing Mobility Metrics"</strong> - Márcio Filho, Lucas Novais, Leon Luca Lausberg, Peter Sevenich, Paulo Rettore and Bruno Santos</li><li><strong>"SnapAI: a Simulator for Network Algorithms and Protocols with Artificial Intelligence integration"</strong> - João Vitor S. Coelho, Leon Luca Lausberg, Philipp Zißner, Peter Sevenich, Vinícius F. S. Mota, Cássio V. S. Prazeres, Paulo Rettore and Bruno Santos</li>',
        
        // Footer
        'footer-subtitle-pt': 'Resilient Systems for Intelligent Environments',
        'footer-subtitle-en': 'ReSIE Project',
        'footer-contact': 'Contact',
        'footer-coordinator': 'Coordinator: Dr. Paulo H. L. Rettore',
        'footer-copyright': '© 2025 SiR.AI Project. All rights reserved.',

        // Dissemination Pages
        'visits-page-title': 'Technical Visits',
        'visits-page-description': 'Technical visits to partner institutions and research centers for knowledge exchange and collaboration.',
        'presentations-page-title': 'Presentations',
        'presentations-page-description': 'Project presentations at conferences, seminars, and national and international scientific events.',
        'workshops-page-title': 'Workshops',
        'workshops-page-description': 'Workshops organized by the project for knowledge dissemination, training, and researcher capacity building.',
        'add-photos': 'Add photos here',
        'photo-hint': 'Replace this space with activity images',
        'coming-soon-title': 'Coming Soon',
        'presentations-coming-soon': 'Information about completed and future presentations will be added soon. Stay tuned for updates!',
        'workshops-coming-soon': 'Information about planned and completed workshops will be added soon. Stay tuned for updates!'
    }
};
