/* Main.js - Funcionalidades Principais */

// Rolagem suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Navegação de explicações com bolinhas
function showExplanation(index) {
    const items = document.querySelectorAll('.explanation-item');
    const dots = document.querySelectorAll('.dot-nav');
    
    // Remover ativo de todos
    dots.forEach(dot => dot.classList.remove('active'));
    items.forEach(item => item.style.display = 'none');
    
    // Adicionar ativo ao selecionado
    if (dots[index]) dots[index].classList.add('active');
    if (items[index]) items[index].style.display = 'flex';
}

// Inicializar primeira explicação
document.addEventListener('DOMContentLoaded', function() {
    showExplanation(0);
});

// Efeito de scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Adicionar classe de scroll ao body
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    document.body.style.setProperty('--scroll-top', scrollTop + 'px');
});
