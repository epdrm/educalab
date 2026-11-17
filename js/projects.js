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
    const modalTeam = document.getElementById('modalTeam');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalStatus = document.getElementById('modalStatus');
    
    // Dados dos projetos
    const projectData = {
        sisQual: {
            title: 'SIS-QUAL',
            description: 'O SIS Qual centraliza o acompanhamento pedagógico e institucional em um só lugar. Em vez de perder semanas cruzando planilhas e gerando relatórios manuais, a equipe escolar visualiza gargalos e avanços em tempo real. Assim, gestores e professores atuam de forma cirúrgica nas dificuldades da turma, transformando dados brutos em melhoria concreta no ensino. ',
            url: 'https://sis-qual.lovable.app/',
            team: 'Gustavo Teixeira, Enzo Ramos, Thiago Botelho',
            technologies: 'Typescript, React, localStorage',
            status: 'protótipo',
        },
        carracoCorrector: {
            title: 'Carraco Corrector',
            description: 'o Carraco é um estúdio de redação inteligente que ajuda estudantes a evoluírem na escrita e professores a otimizarem suas correções, tornando o aprendizado mais acessível, interativo e eficiente.',
            url: 'https://carraco-corrector.lovable.app/',
            team: 'Emili Sophia, Maria Lauriene, Rosiele ferreira, Ana Beatriz',
            technologies: 'Typescript, React, Supabase',
            status: 'funcionando',
        },
        qualiNotas: {
            title: 'QualiNotas',
            description: 'O QualiNotas é o painel analítico para a gestão do desempenho escolar. Ele traduz dados de turmas em insights claros e imediatos, facilitando decisões rápidas e estratégicas para melhorar o aprendizado em escala.',
            url: 'https://yasminsilvaaa.github.io/QualiNotas/',
            team: 'Yasmin Silva, Maria Eloisa, Antonia Soraia',
            technologies: 'HTML, CSS, JS',
            status: 'protótipo',
        },
        logicTech: {
            title: 'LogicTech',
            description: 'uma solução prática pensada para otimizar o tempo de educadores e transformar a preparação de aulas. A plataforma reúne um acervo centralizado de apresentações didáticas prontas para download, organizadas por disciplinas e conteúdos específicos. Em poucos cliques, professores têm acesso a materiais estruturados e visualmente atrativos, prontos para serem aplicados imediatamente em sala de aula — unindo produtividade docente e qualidade no ensino.',
            url: 'https://helder650.github.io/projeto-gestao-de-startup-2/',
            team: 'Antonio Helder, Francisco Davi, Caio Breno',
            technologies: 'HTML, CSS, JS',
            status: 'protótipo',
        },
        drmquest: {
            title: 'Drmquest',
            description: 'O DRM Quest é o ecossistema educacional oficial da EEEP Deputado Roberto Mesquita. Ele automatiza a parte mecânica do trabalho pedagógico — pesquisa, diagramação e gabarito — para que professores invistam o tempo onde importa: mediar a aprendizagem. Alunos ganham simulados personalizados com correção imediata e justificativas construídas a partir de questões reais de vestibulares.',
            url: 'https://lucsquestion-ds3.lovable.app/',
            team: 'Berckson Thierry, Livia Mota, João Henrique, Ana Heloisa',
            technologies: 'React, Typescript',
            status: 'funcionando',
        },
    };
    
    const project = projectData[projectId];
    
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTeam.textContent = project.team;
        modalTechnologies.textContent = project.technologies;
        modalStatus.textContent = project.status;
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
