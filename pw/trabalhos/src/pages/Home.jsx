import CartaoServico from '../components/CartaoServico.jsx'

// SERVIÇOS EXIBIDOS NA PÁGINA INICIAL
const servicosDestaque = [
    {
        id: 'retifica-de-bloco',
        nome: 'Retífica de bloco',
        categoria: 'Bloco do motor',
        descricao: 'Recuperação e usinagem para restabelecer as medidas e condições de funcionamento.',
        imagem: '/img/UsinagemBloco.jpg',
    },
    {
        id: 'retifica-de-cabecote',
        nome: 'Retífica de cabeçote',
        categoria: 'Cabeçote',
        descricao: 'Correção de empenos, vedação e desgaste para recuperar o componente.',
        imagem: '/img/RetificaCabecote.webp',
    },
    {
        id: 'montagem-de-motor',
        nome: 'Montagem de motor',
        categoria: 'Montagem',
        descricao: 'Montagem técnica seguindo medidas, sequências e especificações adequadas.',
        imagem: '/img/MontagemMotor.webp',
    },
]

// PÁGINA INICIAL
function Home() {
    return (
        <main id="conteudo-principal">
            {/* TOPO DO SITE */}
            <section className="topo-do-site">
                <div className="interface topo-conteudo">
                    <div className="txt-topo-site">
                        <p className="destaque">Especialistas em motores</p>
                        <h1>Qualidade e precisão para o seu motor</h1>
                        <p>Serviços de retífica e recuperação para motores de linha leve e pesada, realizados por uma equipe experiente e preparada.</p>

                        <div className="acoes-topo">
                            <a className="botao fms-contato" href="/orcamento.html">Solicitar orçamento</a>
                            <a className="link-servicos" href="/servicos.html">Conhecer serviços</a>
                        </div>{/* AÇÕES DO TOPO FINAL */}
                    </div>{/* TEXTO DO TOPO DO SITE FINAL */}

                    <div className="img-topo-site" aria-hidden="true">
                        <img src="/img/banner-chave.png" alt="" width="167" height="190" />
                    </div>{/* IMAGEM DO TOPO DO SITE FINAL */}
                </div>{/* CONTEÚDO DO TOPO FINAL */}
            </section>{/* TOPO DO SITE FINAL */}

            {/* SERVIÇOS EM DESTAQUE */}
            <section className="servicos-destaque" aria-labelledby="titulo-servicos-destaque">
                <div className="interface">
                    <div className="cabecalho-secao">
                        <div>
                            <p className="destaque">Principais soluções</p>
                            <h2 id="titulo-servicos-destaque">Serviços em destaque</h2>
                        </div>
                        <a className="link-servicos" href="/servicos.html">Ver todos os serviços</a>
                    </div>{/* CABEÇALHO DA SEÇÃO FINAL */}

                    <div className="grade-servicos grade-destaques">
                        {servicosDestaque.map((servico) => (
                            <CartaoServico key={servico.id} servico={servico} />
                        ))}
                    </div>{/* GRADE DE DESTAQUES FINAL */}
                </div>{/* INTERFACE DOS DESTAQUES FINAL */}
            </section>{/* SERVIÇOS EM DESTAQUE FINAL */}

            {/* RESUMO SOBRE A FMS */}
            <section className="resumo-sobre" aria-labelledby="titulo-resumo-sobre">
                <div className="interface resumo-sobre-conteudo">
                    <div className="img-resumo-sobre">
                        <img src="/img/sobre-fms.jpg" alt="Profissional realizando manutenção em um motor" width="463" height="250" loading="lazy" decoding="async" />
                    </div>{/* IMAGEM DO RESUMO FINAL */}

                    <div className="txt-resumo-sobre">
                        <p className="destaque">Sobre a FMS</p>
                        <h2 id="titulo-resumo-sobre">Experiência e cuidado em cada componente</h2>
                        <p>Trabalhamos com serviços de retífica para motores de linha leve e pesada. Cada peça passa por avaliação, medição e um processo adequado às suas condições.</p>
                        <a className="botao" href="/sobre.html">Conhecer a FMS Motores</a>
                    </div>{/* TEXTO DO RESUMO FINAL */}
                </div>{/* CONTEÚDO DO RESUMO FINAL */}
            </section>{/* RESUMO SOBRE A FMS FINAL */}
        </main>
    )
}

export default Home
