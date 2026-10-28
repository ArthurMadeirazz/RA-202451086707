# Continuidade do projeto — FMS Motores (Fase 2)

Este arquivo registra o contexto técnico e as regras de continuidade do trabalho. Antes de alterar o projeto, leia este documento e confira o estado real com `git status` e `git log`.

## Repositório correto

- Repositório acadêmico: `https://github.com/ArthurMadeirazz/RA-202451086707.git`.
- Projeto: pasta `pw/trabalhos`.
- Branch de entrega: `main`.
- Não alterar o `origin`.
- Não misturar este projeto com o repositório antigo `FMS-SITE`, que contém outro site.

## Objetivo da Fase 2

Transformar a interface da Fase 1 em uma aplicação React com Vite, componentes reutilizáveis, rotas, estados, eventos e carregamento dos serviços a partir de um JSON local.

Os arquivos HTML da Fase 1 continuam no projeto como referência visual. A implementação atual da Fase 2 fica em `src`, `public`, `package.json` e `index.html`.

## O que já foi feito

- Configuração do Vite com React 19.
- Conversão da página inicial para React.
- Componentes compartilhados `Cabecalho`, `Rodape` e `CartaoServico`.
- Oito serviços cadastrados em `public/data/servicos.json`.
- Carregamento do JSON com `fetch` e `useEffect`.
- Estado da lista com `useState`.
- Busca de serviços pelo nome.
- Filtro por categoria, contador de resultados e limpeza dos filtros.
- React Router configurado com as rotas `/` e `/servicos`.
- Navegação interna com `Link` e `NavLink`.
- Rota dinâmica `/servicos/:id` e página React de detalhes.
- Tratamento de carregamento, serviço inexistente e falha de leitura na página de detalhes.

## Próximos passos

Siga esta ordem e faça um commit pequeno após cada etapa completa:

1. Converter `orcamento.html` para `src/pages/Orcamento.jsx`.
2. Criar campos controlados com `useState` e manter as validações da Fase 1.
3. Ler o serviço selecionado na URL e preencher o campo correspondente do orçamento.
4. Converter `sobre.html` para uma página React e incluir sua rota.
5. Avaliar o uso de Context para compartilhar os serviços e evitar `fetch` repetido, caso seja requisito da disciplina.
6. Adicionar tratamento de carregamento e erro também ao catálogo de serviços.
7. Revisar navegação por teclado, textos alternativos, títulos e responsividade desde 320 px.
8. Atualizar o `README.md` com instalação e execução da Fase 2.
9. Executar o build final, testar todas as rotas e preparar a entrega.

## Fluxo atual dos dados

```text
public/data/servicos.json
        ↓ fetch + useEffect
estado servicos
        ↓ busca/filtro ou busca pelo id
CartaoServico / DetalhesServico
```

## Padrão de código

- Manter HTML semântico e o CSS próprio já existente.
- Preservar a abordagem mobile-first e os breakpoints de `css/responsive.css`.
- Manter nomes de componentes em PascalCase e variáveis/funções em português.
- Usar quatro espaços de indentação, aspas simples no JavaScript e não adicionar ponto e vírgula sem necessidade.
- Manter comentários de abertura e fechamento das seções no mesmo estilo da Fase 1.
- Reaproveitar classes CSS existentes antes de criar novas estilizações.
- Usar `Link` para rotas internas React e `<a>` para links externos ou páginas HTML ainda não convertidas.
- Não introduzir bibliotecas sem necessidade e sem explicar o motivo.
- Não reescrever partes funcionando apenas por preferência estética.

## Forma de trabalhar com o aluno

- O aluno quer aprender React, então explique primeiro a lógica e o fluxo dos dados.
- Quando ele estiver estudando, dê pistas e revise o código antes de entregar a solução completa.
- Quando ele pedir explicitamente para implementar por causa do prazo, implemente uma etapa pequena, explique os conceitos usados e deixe o código fácil de defender em sala.
- Não simular, retroceder ou inventar datas de commits.
- Criar commits reais, pequenos e com mensagens em português, somente após a funcionalidade estar completa.

## Regras de Git e validação

- Conferir `git status --short` antes de editar e antes de commitar.
- Não incluir `.vscode`, `node_modules`, `dist` ou arquivos pessoais.
- Não apagar ou sobrescrever alterações do aluno.
- Não usar `git reset --hard` nem alterar o histórico.
- Rodar `npm run build` dentro de `pw/trabalhos` antes de cada commit de funcionalidade.
- Conferir `git diff --check` para evitar problemas de formatação.
- Fazer `push` apenas para `origin main` e confirmar o repositório remoto antes.

## Como executar

Dentro de `pw/trabalhos`:

```bash
npm install
npm run dev
```

Validação de produção:

```bash
npm run build
```

## Commits principais da Fase 2

- `83338a4` — inicia fase 2 com React e Vite.
- `bac1c01` — converte página inicial em componentes React.
- `0caa058` — carrega serviços com `useEffect` e `fetch`.
- `6c499a2` — completa dados dos serviços.
- `586d11c` — adiciona navegação com React Router.
- `ab192e9` — adiciona busca e filtro de serviços.

Sempre confira os commits mais recentes, pois esta lista pode ficar desatualizada conforme o trabalho avançar.
