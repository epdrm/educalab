# Nome do projeto: EducaLab

## INSTRUÇÕES PRINCIPAIS

- O projeto deve ser montado de forma facil para melhor manutenção
- O projeto deve ser feito usando html, css e js, com a possibilidade de adicionar bibliotecas
  que ajudem a execução das tarefas
- Crie um .txt com o nome de todas as bibliotecas usadas junto com o link direto para a documentação
  como no exemplo a seguir:

  ```
  nome da biblioteca - link
  ```

## Fase 1 - Inicio do Projeto

- Fazer a estrutura basica do projeto criação do index html e das pastas styles, js e img siga essa estrutura de pastas aqui:

```
projeto
┣ /styles
┣ /js 
┣ /img 
┣ index.html 
┃ 
```

## Fase 2 - HTML

- Fazer a estruturação do html baseado na pagina do https://antigravity.google/ no qual deve seguir essa estuturação da página:

    1. Área inicial: na area inicial é necessário tenha um nome grande no centro da tela e dois botões pequenos um passando para 
       a secção de projetos destaques e outro para a secção de videos

    2. Video principal: Nesta parte haverá um unico video 

    3. Explicação sobre o projeto: Área para frases e umas pequenas bolinhas em linha

    4. Projetos em Destaque: Área para alguns projetos, uma descrição a esquerda e á imagem do projeto á direita

    5. Videos explicativos: Área para um carrosel de videos explicativos

    6. Apresentação do curso e integrantes: Área onde na esquerda será para a apresentação dos integrantes
       e a direita para apresentação sobre algumas coisas do curso

    7. Projetos: Área mostrando todos os projetos

    8. Footer: Um footer para texto

- A estruturação na formação da pagina deve seguir essa ordem.

## Fase 3 - ESTILIZAÇÃO

- A estilização deve ser feita de forma que possa ser modificada facilmente, crie arquivos
  com grupos de variaveis referentes a uma área, separe por fontes (tamanho de certos textos e fontes) e
  cores (cores e certos textos, butões, áreas), pode criar outros arquivos dentro de styles e outras sessões
  de organização desde que isso não vá contra as instruções do projeto. Desta forma, siga o exemplo abaixo:

  ```
   /styles
   ┣ colorsStyles.css
   ┣ fontsStyles.css
  ``` 

## Fase 4 - INTERATIVIDADE

- O JavaScript deve ser usado para tornar a página dinâmica e responsiva. A estrutura deve conter:
   
    1. Rolagem suave para os botões da Área Inicial até as seções de destino.
   
    2. Controle interativo de exibição para a área de Explicação (navegação pelas bolinhas em linha).
   
    3. Carrossel funcional para a seção de Vídeos Explicativos (com suporte a navegação por setas/drag).
   
    4. Sistema de filtros ou modais de detalhes para a área de Projetos.