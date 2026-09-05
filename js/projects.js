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
    const modalProjectLink = document.getElementById('modalProjectLink');
    
    // Dados dos projetos
    const projectData = {
        sistema: {
            title: 'Sistema de Gerenciamento',
            description: 'Ferramenta para organizar projetos educacionais com interface intuitiva, automações, painel de progresso e relatórios para apoiar a rotina dos professores.'
        },
        plataforma: {
            title: 'Ferramenta de Apoio Pedagógico',
            description: 'Ambiente interativo para apoiar o planejamento e o acompanhamento de atividades pedagógicas no dia a dia dos professores.'
        },
        comunidade: {
            title: 'Central de Ferramentas',
            description: 'Espaço colaborativo para reunir soluções digitais e projetos desenvolvidos para apoiar a comunidade escolar.'
        },
        sisQual: {
            title: 'SIS-QUAL',
            description: 'Sistema de qualificação e acompanhamento de projetos educacionais.',
            url: 'https://sis-qual.lovable.app/'
        },
        carracoCorrector: {
            title: 'Carraco Corrector',
            description: 'Ferramenta web para revisão e correção de textos.',
            url: 'https://carraco-corrector.lovable.app/'
        }
    };
    
    const project = projectData[projectId];
    
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalProjectLink.href = project.url || '#';
        modalProjectLink.hidden = !project.url;
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
