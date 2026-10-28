import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetalhesServico() {
    const { id } = useParams()
    const [servico, setServico] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        async function carregarServico() {
            try {
                const resposta = await fetch('/data/servicos.json')

                if (!resposta.ok) {
                    throw new Error('Não foi possível carregar os serviços.')
                }

                const dados = await resposta.json()
                const servicoEncontrado = dados.find((item) => item.id === id)

                if (!servicoEncontrado) {
                    throw new Error('Serviço não encontrado.')
                }

                setServico(servicoEncontrado)
            } catch (erroCarregamento) {
                setErro(erroCarregamento.message)
            } finally {
                setCarregando(false)
            }
        }

        carregarServico()
    }, [id])

    if (carregando) {
        return <main id="conteudo-principal" className="interface"><p>Carregando serviço...</p></main>
    }

    if (erro) {
        return (
            <main id="conteudo-principal" className="interface">
                <h1>Não foi possível abrir o serviço</h1>
                <p>{erro}</p>
                <Link className="botao" to="/servicos">Voltar para serviços</Link>
            </main>
        )
    }

    return (
        <main id="conteudo-principal">
            {/* APRESENTAÇÃO DA PÁGINA DE DETALHES */}
            <section className="cabecalho-pagina">
                <div className="interface">
                    <p className="destaque">Serviço selecionado</p>
                    <h1>{servico.nome}</h1>
                    <p>Confira as principais informações antes de solicitar uma avaliação.</p>
                </div>{/* INTERFACE DA APRESENTAÇÃO FINAL */}
            </section>{/* APRESENTAÇÃO DA PÁGINA DE DETALHES FINAL */}

            {/* DETALHES DO SERVIÇO */}
            <section className="secao-detalhes" aria-labelledby="titulo-detalhe-servico">
                <div className="interface">
                    <article className="detalhe-servico">
                        <div className="detalhe-servico-imagem">
                            <img src={servico.imagem} alt="" loading="lazy" decoding="async" />
                        </div>{/* IMAGEM DO DETALHE FINAL */}

                        <div className="detalhe-servico-conteudo">
                            <p className="categoria-servico">{servico.categoria}</p>
                            <h2 id="titulo-detalhe-servico">{servico.nome}</h2>
                            <p>{servico.descricao}</p>

                            <dl className="informacoes-servico">
                                <div>
                                    <dt>Componente trabalhado</dt>
                                    <dd>{servico.componente}</dd>
                                </div>
                                <div>
                                    <dt>Prazo estimado</dt>
                                    <dd>{servico.prazo}</dd>
                                </div>
                            </dl>

                            <a className="botao" href={`/orcamento.html?servico=${servico.id}`}>Solicitar orçamento</a>
                        </div>{/* CONTEÚDO DO DETALHE FINAL */}
                    </article>
                </div>{/* INTERFACE DOS DETALHES FINAL */}
            </section>{/* DETALHES DO SERVIÇO FINAL */}
        </main>
    )
}

export default DetalhesServico
