/* Projects.js - Sistema de Filtros e Modais de Projetos */

// Filtrar projetos por categoria
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Atualizar botão ativo
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtrar cards
    cards.forEach(card => {
        card.classList.remove('visible');
        
        if (category === 'all') {
            card.classList.add('visible');
        } else if (card.dataset.category === category) {
            card.classList.add('visible');
        }
    });
}

// Abrir modal de projeto
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Dados dos projetos
    const projectData = {
        sistema: {
            title: 'Sistema de Gerenciamento',
            description: 'Plataforma completa para gerenciar projetos educacionais com interface intuitiva e funcionalidades avançadas. Desenvolvida com tecnologias modernas de frontend e backend, oferecendo autenticação segura, dashboard interativo e relatórios detalhados.'
        },
        plataforma: {
            title: 'Plataforma de Aprendizado',
            description: 'Ambiente interativo para alunos aprimorarem suas habilidades de programação. Conta com cursos estruturados, exercícios práticos, avaliações automáticas e acompanhamento de progresso em tempo real.'
        },
        comunidade: {
            title: 'Comunidade de Desenvolvedores',
            description: 'Rede colaborativa onde desenvolvedores compartilham conhecimento, projetos e experiências. Oferece fóruns de discussão, grupos de estudo, eventos virtuais e oportunidades de networking.'
        },
        web1: {
            title: 'Projeto Web 1 - Landing Page Moderna',
            description: 'Landing page responsiva e moderna desenvolvida com HTML5, CSS3 e JavaScript vanilla. Possui animações fluidas, design minimalista e otimização para SEO.'
        },
        mobile1: {
            title: 'Projeto Mobile 1 - App de Tarefas',
            description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem. Desenvolvido com React Native, oferecendo experiência nativa em iOS e Android.'
        },
        backend1: {
            title: 'Projeto Backend 1 - API RESTful',
            description: 'API RESTful completa desenvolvida com Node.js e Express. Inclui autenticação JWT, validação de dados, documentação com Swagger e testes automatizados.'
        },
        web2: {
            title: 'Projeto Web 2 - Dashboard Interativo',
            description: 'Dashboard interativo para análise de dados com gráficos dinâmicos. Utiliza React, Recharts e Redux para gerenciamento de estado avançado.'
        },
        mobile2: {
            title: 'Projeto Mobile 2 - App de Saúde',
            description: 'Aplicativo de saúde e bem-estar com rastreamento de atividades físicas, monitoramento de saúde e integração com wearables.'
        },
        backend2: {
            title: 'Projeto Backend 2 - Sistema de Autenticação',
            description: 'Sistema robusto de autenticação e autorização com suporte a OAuth2, SSO e autenticação de dois fatores.'
        }
    };
    
    const project = projectData[projectId];
    
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modal.classList.add('active');
    }
}

// Fechar modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Inicializar projetos visíveis
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => card.classList.add('visible'));
});
