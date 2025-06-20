## Jogo do número secreto 🔢
```desenvolvido no curso "Lógica de Programação: explore funções e listas" na Alura :)```

##
### Descrição 📝

Neste jogo simples e divertido, o jogador precisa descobrir qual é o número secreto escolhido aleatoriamente pelo sistema. 
A cada tentativa, o jogo informa se o número digitado é maior ou menor que o número correto, até que o jogador acerte! Ideal para treinar lógica de programação, 
estruturas condicionais e manipulação de dados com JavaScript. 

##

### 🚀 Funcionalidades

- Geração aleatória de um número secreto  
- Validação de tentativas do usuário  
- Dicas (maior ou menor) após cada tentativa  
- Mensagem final de acerto  
- Reinício do jogo após vitória
- Leitura da página para uma maior acessibilidade

##
### Tecnologias Utilizadas 🤖 
![Static Badge](https://img.shields.io/badge/HTML-db481f)
![Static Badge](https://img.shields.io/badge/CSS-1257b8)
![Static Badge](https://img.shields.io/badge/Javascript-f09000)

##

### 📷 Preview

<p align="center">
  <img src="preview.gif" alt="Preview do Jogo" width="1000"/>
</p>

##
### 📁 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/luisamallmann/jogo-do-numero-secreto
   ```
2. Abra o arquivo index.html em seu navegador
_(ou apenas clique duas vezes no arquivo após baixar o projeto)_

##
### 📚 Aprendizados
Este projeto foi essencial para aplicar e reforçar conceitos como:
- Declaração de variáveis
- Condicionais (if, else)
- Estruturas de repetição
- Manipulação de DOM com JavaScript

##
### 🧩 Extras
Durante o desenvolvimento, utilizei uma ferramenta de leitura de tela para testar a acessibilidade do jogo e garantir uma melhor experiência.
Utilizando o seguinte código:
```html
<script src="https://code.responsivevoice.org/responsivevoice.js"></script>
```
```javascript
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
```
##
### 📩 Contato
<p align="center">
  <a href="https://www.linkedin.com/in/luisamallmann/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/luisamallmann" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

<p align="center">Feito com 💙 por <strong>Luísa Mallmann</strong></p>
