# WelWel Cars · mycarr

Vitrine online de **carros esportivos e elétricos**, feita com HTML, CSS e JavaScript puros. O site apresenta cinco modelos em um carrossel animado, com fundo roxo vibrante, detalhes em verde-limão e ficha técnica completa de cada carro.

🔗 **Ver o site:** https://elsondev-backend.github.io/mycarr/Car/index.html

![Página inicial](docs/home.png)

## Sobre o projeto

A WelWel Cars é uma loja fictícia de carros "de único dono". O site tem três páginas:

| Página | O que mostra |
|--------|--------------|
| **Home** (`index.html`) | Carrossel com os carros em destaque: foto, nome, descrição curta, 3 números principais (potência, aceleração, velocidade ou autonomia) e botão **Saiba Mais** |
| **Carros** (`carros.html`) | Todos os modelos em cartões, cada um com a ficha técnica que abre e fecha |
| **Contato** (`contato.html`) | Formulário para agendar visita ou test drive, com escolha do carro de interesse e horário da loja |

![Ficha técnica aberta](docs/ficha.png)

## Carros do catálogo

| # | Modelo | Tipo | Destaques |
|---|--------|------|-----------|
| 01 | Porsche 911 Turbo S (992) | Esportivo | 650 cv · 0 a 100 em 2,7 s · 330 km/h |
| 02 | Ferrari California T | GT conversível | 560 cv · 0 a 100 em 3,6 s · 316 km/h |
| 03 | Lamborghini Aventador S | Superesportivo V12 | 740 cv · 0 a 100 em 2,9 s · 350 km/h |
| 04 | Geely EX2 | Elétrico compacto | 116 cv · 289 km de autonomia · recarga 30-80% em 21 min |
| 05 | BMW iX3 M Sport | SUV elétrico | 286 cv · 460 km de autonomia · 0 a 100 em 6,8 s |

## Funcionalidades

- **Carrossel** com animação de entrada, navegável por setas, pelos indicadores (clicáveis), pelas setas do teclado e deslizando o dedo no celular.
- **Saiba Mais** abre uma janela (`<dialog>`) com análise visual e especificações; fecha pelo ×, pela tecla Esc ou clicando fora.
- **Página de carros** com fichas técnicas que expandem (`<details>`), sem precisar de JavaScript.
- **Formulário de contato** de demonstração, com validação de campos obrigatórios e mensagem de confirmação (não envia de verdade).
- **Layout responsivo**: no celular o carro fica acima do texto e o menu vira um botão "hambúrguer".
- **Acessibilidade**: textos alternativos nas imagens, rótulos para leitores de tela e respeito à opção "reduzir movimento" do sistema.

| Celular | Carros | Contato |
|---------|--------|---------|
| ![Celular](docs/celular.png) | ![Carros](docs/carros.png) | ![Contato](docs/contato.png) |

## Tecnologias

- **HTML5 semântico**: `header`, `nav`, `main`, `article`, `dialog`, `details`, `dl`.
- **CSS3**: variáveis de cor, Grid, Flexbox, CSS aninhado, `clamp()`, animações e media queries.
- **JavaScript puro** (sem bibliotecas): carrossel, menu do celular, fichas e formulário.
- **Google Fonts**: League Gothic (títulos) e Poppins (textos).
- **Imagens WebP**, mais leves que PNG.
- **GitHub Pages** para hospedagem.

## Estrutura de pastas

```
mycarr/
├── index.html          # Redireciona para Car/index.html
├── LICENSE
└── Car/
    ├── index.html      # Home com o carrossel e as fichas técnicas
    ├── carros.html     # Lista de todos os carros
    ├── contato.html    # Formulário de contato
    ├── estyle.css      # Estilos e responsividade
    ├── script.js       # Carrossel, menu, fichas e formulário
    └── img/            # Logo, fotos dos carros, seta e favicon
```

## Paleta de cores

| Cor | Uso |
|-----|-----|
| `#6d00d9` | Roxo principal (fundo) |
| `#1a0033` | Roxo escuro (fichas e cabeçalho) |
| `#beff1b` | Verde-limão (botões e destaques) |
| `#ffffff` | Textos |

## Como rodar localmente

Não precisa instalar nada.

```bash
git clone https://github.com/elsondev-backend/mycarr.git
```

Depois abra `Car/index.html` no navegador (ou use a extensão **Live Server** do VS Code).

## Autor

Desenvolvido por **Elson Rocha** · [github.com/elsondev-backend](https://github.com/elsondev-backend)

## Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE).
