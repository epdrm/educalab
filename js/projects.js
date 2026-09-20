/* Projects.js - Sistema de Filtros e Modais de Projetos */

// Filtrar projetos por categoria
function filterProjects(category, event) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    const trigger = event && event.currentTarget ? event.currentTarget : Array.from(buttons).find(btn => btn.dataset.category === category);

    // Atualizar botão ativo
    buttons.forEach(btn => btn.classList.remove('active'));
    if (trigger) {
        trigger.classList.add('active');
    }

    // Filtrar cards
    cards.forEach(card => {
        const matches = category === 'all' || card.dataset.category === category;
        card.classList.toggle('visible', matches);
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
        sisQual: {
            title: 'SIS-QUAL',
            description: 'Sistema de qualificação e acompanhamento de projetos educacionais.',
            url: 'https://sis-qual.lovable.app/'
        },
        carracoCorrector: {
            title: 'Carraco Corrector',
            description: 'Ferramenta web para revisão e correção de textos.',
            url: 'https://carraco-corrector.lovable.app/'
        },
        qualiNotas: {
            title: 'QualiNotas',
            description: 'Sistema de gestão e análise de desempenho acadêmico.',
            url: 'https://yasminsilvaaa.github.io/QualiNotas/'
        },
        logicTech: {
            title: 'LogicTech',
            description: 'Sistema de gestão e análise de desempenho acadêmico.',
            url: 'https://helder650.github.io/projeto-gestao-de-startup-2/'
        },
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
