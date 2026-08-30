# Guia Rápido de Desenvolvimento - EducaLab

## Como Usar Este Projeto

### 1. Abrir o Projeto
- Navegue até a pasta do projeto
- Abra o arquivo `index.html` em um navegador web
- Ou use um servidor local (recomendado):
  ```bash
  # Usando Python
  python -m http.server 8000
  # Ou Node.js
  npx http-server
  ```

### 2. Estrutura de Pastas

```
educalab/
├── index.html              # Página principal
├── libraries.txt           # Documentação de bibliotecas
├── RESUMO_EXECUÇÃO.md      # Resumo do projeto
├── GUIA_DESENVOLVIMENTO.md # Este arquivo
│
├── /styles/                # Estilos CSS
│   ├── colorsStyles.css    # Variáveis de cores
│   ├── fontsStyles.css     # Variáveis de tipografia
│   ├── mainStyles.css      # Estilos gerais
│   ├── heroStyles.css      # Seção hero
│   ├── carouselStyles.css  # Carrossel e projetos
│   ├── projectsStyles.css  # Projetos e modais
│   └── footerStyles.css    # Footer
│
├── /js/                    # Scripts JavaScript
│   ├── main.js            # Funcionalidades principais
│   ├── carousel.js        # Carrossel
│   └── projects.js        # Filtros e modais
│
└── /img/                   # Imagens
    ├── project1.png
    ├── project2.png
    ├── member1.png
    ├── member2.png
    └── ...
```

### 3. Personalizar Cores

Abra `styles/colorsStyles.css` e modifique as variáveis:

```css
:root {
    --primary-color: #6366f1;      /* Azul primário */
    --secondary-color: #ec4899;    /* Rosa secundária */
    --accent-color: #f59e0b;       /* Amarelo de acentuação */
}
```

### 4. Personalizar Tipografia

Abra `styles/fontsStyles.css` para ajustar:

```css
:root {
    --font-family-main: 'Segoe UI', sans-serif;     /* Fonte geral */
    --font-family-heading: 'Poppins', sans-serif;   /* Fonte títulos */
    --font-size-h1: 3.5rem;                         /* Tamanho H1 */
}
```

### 5. Adicionar Imagens

1. Coloque suas imagens na pasta `/img/`
2. Substitua os caminhos no `index.html`:
   ```html
   <img src="img/seu-arquivo.png" alt="Descrição">
   ```

### 6. Modificar Conteúdo de Texto

Abra `index.html` e edite:
- Títulos e descrições nas seções
- Nomes dos integrantes
- Informações do footer

### 7. Atualizar Dados de Projetos

Abra `js/projects.js` e modifique o objeto `projectData`:

```javascript
const projectData = {
    web1: {
        title: 'Seu Novo Projeto',
        description: 'Descrição do seu projeto aqui'
    }
};
```

### 8. Adicionar Vídeos Personalizados

Substitua os IDs dos vídeos do YouTube no `index.html`:

```html
<!-- Trocar dQw4w9WgXcQ pelo ID do seu vídeo -->
<iframe src="https://www.youtube.com/embed/SEU_VIDEO_ID"></iframe>
```

### 9. Funcionalidades JavaScript

#### Rolar para uma seção:
```javascript
scrollToSection('featured-projects');
```

#### Mostrar explicação específica:
```javascript
showExplanation(0);  // 0, 1, 2, 3
```

#### Mover carrossel:
```javascript
moveCarousel(1);   // 1 para frente, -1 para trás
```

#### Filtrar projetos:
```javascript
filterProjects('web');  // 'all', 'web', 'mobile', 'backend'
```

#### Abrir modal:
```javascript
openProjectModal('web1');  // ID do projeto
```

### 10. Adicionar Novas Seções

Para adicionar uma nova seção:

1. Adicione a seção HTML em `index.html`:
```html
<section id="nova-secao" class="nova-secao">
    <h2>Título</h2>
    <p>Conteúdo</p>
</section>
```

2. Crie um arquivo CSS em `styles/nova-secao.css`

3. Link o CSS em `index.html`:
```html
<link rel="stylesheet" href="styles/nova-secao.css">
```

4. Adicione scripts em `js/nova-secao.js` se necessário

### 11. Deixar Responsivo

O projeto já é responsivo, mas se adicionar novos elementos:

```css
/* Desktop */
.elemento {
    width: 80%;
}

/* Tablet (até 768px) */
@media (max-width: 768px) {
    .elemento {
        width: 90%;
    }
}

/* Mobile (até 480px) */
@media (max-width: 480px) {
    .elemento {
        width: 100%;
    }
}
```

### 12. Testes no Navegador

- **Chrome DevTools**: F12 → Toggle device toolbar (Ctrl+Shift+M)
- **Firefox**: F12 → Responsive Design Mode (Ctrl+Shift+M)
- **Safari**: Develop → Enter Responsive Design Mode

### 13. Deploy do Projeto

#### Opção 1: GitHub Pages
```bash
git push origin main
```
(Configure no GitHub nas configurações do repositório)

#### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### Opção 3: Vercel
```bash
npm install -g vercel
vercel
```

### 14. Adicionar Formulário de Contato

Para adicionar um formulário:

1. Instale uma ferramenta como Formspree ou EmailJS
2. Adicione o formulário HTML
3. Configure a integração no JavaScript

### 15. Otimizações Recomendadas

- **Compactar imagens**: Use TinyPNG ou ImageOptim
- **Minificar CSS/JS**: Use CSSNano ou UglifyJS
- **SEO**: Adicione meta tags em `<head>`
- **Performance**: Use Lighthouse do Chrome DevTools

### 16. Troubleshooting

**Problema**: Imagens não carregam
- Verifique se os caminhos em `img/` estão corretos
- Certifique-se de que as imagens existem

**Problema**: Estilos não aplicam
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se os arquivos CSS estão linkados

**Problema**: Carrossel não funciona
- Abra o Console (F12) e procure por erros
- Verifique se o `carousel.js` está carregado

**Problema**: Modais não abrem
- Verifique se o ID do projeto existe em `projects.js`
- Procure por erros no Console

---

## Dicas Úteis

1. **Use a paleta de cores do projeto**: Sempre use as variáveis CSS definidas
2. **Manter estrutura organizada**: Adicione comentários nos seus códigos
3. **Testar responsividade**: Sempre teste em mobile, tablet e desktop
4. **Usar nomes significativos**: Para classes, IDs e variáveis
5. **Documentar mudanças**: Mantenha um changelog das modificações

---

## Suporte e Recursos

- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/
- **JavaScript.info**: https://javascript.info/
- **Can I Use**: https://caniuse.com/

---

Bom desenvolvimento! 🚀
