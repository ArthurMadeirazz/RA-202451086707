Proposta de Projeto — Programação Web 2026.2

* Aluno: Arthur Madeira Souza
* Curso/Turma: Sistemas de Informação
* Repositório: a definir

1. Tema e problema

O projeto será um site para a FMS Motores, empresa do ramo de retífica de motores, com o objetivo de apresentar seus serviços de maneira organizada e facilitar o contato de clientes interessados em realizar serviços em motores e seus componentes.

A aplicação permitirá que o cliente conheça os diferentes serviços realizados pela empresa, consulte informações detalhadas e envie uma solicitação de orçamento.

2. Público-alvo

Proprietários de veículos, mecânicos e oficinas que necessitam de serviços relacionados à retífica e recuperação de motores.

O sistema será utilizado principalmente quando o cliente quiser conhecer os serviços realizados pela empresa ou solicitar um orçamento.

3. Coleção de itens

A coleção principal será composta pelos serviços oferecidos pela retífica.

Inicialmente serão cadastrados pelo menos 8 serviços, como:

* Retífica de bloco
* Brunimento de cilindros
* Retífica de virabrequim
* Retífica de cabeçote
* Alinhamento de mancais
* Retífica de bielas
* Troca de buchas de biela
* Montagem de motor

Cada serviço terá atributos como:

* Nome
* Categoria
* Descrição
* Componente do motor
* Imagem
* Prazo estimado

Exemplo:

Nome: Retífica de bloco
Categoria: Bloco do motor
Descrição: Recuperação e usinagem do bloco para restabelecer suas medidas e condições adequadas de funcionamento.
Componente: Bloco
Imagem: imagem representativa do serviço
Prazo estimado: variável conforme avaliação da peça

4. Telas previstas

Página inicial

Apresentação da FMS Motores, principais serviços realizados, informações sobre a empresa e acesso às demais áreas do site.

Serviços

Listagem dos serviços disponíveis através de cards, contendo informações resumidas e acesso aos detalhes de cada serviço.

Detalhes do serviço

Página contendo informações completas sobre um serviço selecionado.

Solicitação de orçamento

Formulário para que o cliente informe seus dados, veículo/motor e o serviço desejado.

5. Formulário

O projeto terá um formulário de solicitação de orçamento.

Campos previstos:

* Nome
* Telefone
* E-mail
* Veículo
* Modelo do motor
* Serviço desejado
* Descrição do problema

Serão utilizadas validações como campos obrigatórios, validação de e-mail, telefone e limites de caracteres.

6. Filtro/busca

Na página de serviços será possível pesquisar pelo nome do serviço e filtrar os serviços pela categoria ou componente do motor.

Exemplos:

Bloco | Cabeçote | Virabrequim | Biela | Outros

7. Origem dos dados na Fase 2

Na Fase 2, os serviços serão obtidos através de um mock local em JSON, consumido pela aplicação React utilizando fetch e useEffect.

O arquivo conterá os dados dos serviços e permitirá simular o consumo de uma API sem necessidade de um back-end complexo.

8. Diferencial pretendido

Como diferencial, o projeto pretende representar de forma visual o processo de recuperação de componentes de um motor, apresentando informações sobre os serviços realizados pela retífica e facilitando a solicitação de orçamento pelo cliente.

Também será priorizada uma interface responsiva, permitindo uma boa experiência tanto em computadores quanto em dispositivos móveis.
