import { useEffect, useState } from 'react'
import CartaoServico from '../components/CartaoServico.jsx'

function Servicos() {
    const [servicos, setServicos] = useState([])
    const [busca, setBusca] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        async function carregarServicos() {
            const resposta = await fetch('/data/servicos.json')
            const dados = await resposta.json()

            setServicos(dados)
        }

        carregarServicos()
    }, [])

    const categorias = [...new Set(servicos.map((servico) => servico.categoria))]

    const servicosFiltrados = servicos.filter((servico) =>
        servico.nome.toLowerCase().includes(busca.toLowerCase()) &&
        (categoria === '' || servico.categoria === categoria)
    )

    return (
        <main id="conteudo-principal">
            {/* APRESENTAÇÃO DA PÁGINA DE SERVIÇOS */}
            <section className="cabecalho-pagina">
                <div className="interface">
                    <p className="destaque">Soluções para linha leve e pesada</p>
                    <h1>Serviços de retífica e recuperação</h1>
                    <p>Conheça os processos realizados pela FMS Motores para recuperar componentes e melhorar o funcionamento do motor.</p>
                </div>{/* INTERFACE DA APRESENTAÇÃO FINAL */}
            </section>{/* APRESENTAÇÃO DA PÁGINA DE SERVIÇOS FINAL */}

            {/* LISTA DE SERVIÇOS */}
            <section className="secao-servicos" aria-labelledby="titulo-lista-servicos">
                <div className="interface">
                    <h2 id="titulo-lista-servicos">Nossos serviços</h2>

                    {/* BUSCA E FILTRO DE SERVIÇOS */}
                    <form className="filtros-servicos" role="search" onSubmit={(evento) => evento.preventDefault()}>
                        <div className="grupo-campo">
                            <label htmlFor="busca-servico">Buscar serviço</label>

                            <input
                                type="search"
                                id="busca-servico"
                                name="busca"
                                placeholder="Ex.: retífica de bloco"
                                value={busca}
                                onChange={(evento) => setBusca(evento.target.value)}
                            />
                        </div>{/* CAMPO DE BUSCA FINAL */}

                        <div className="grupo-campo">
                            <label htmlFor="categoria-servico">Categoria</label>
                            <select
                                id="categoria-servico"
                                name="categoria"
                                value={categoria}
                                onChange={(evento) => setCategoria(evento.target.value)}
                            >
                                <option value="">Todas as categorias</option>
                                {categorias.map((nomeCategoria) => (
                                    <option key={nomeCategoria} value={nomeCategoria}>{nomeCategoria}</option>
                                ))}
                            </select>
                        </div>{/* CAMPO DE CATEGORIA FINAL */}

                        <button
                            className="botao"
                            type="button"
                            onClick={() => {
                                setBusca('')
                                setCategoria('')
                            }}
                        >
                            Limpar filtros
                        </button>
                        <p className="aviso-filtros" aria-live="polite">
                            {servicosFiltrados.length} serviço(s) encontrado(s).
                        </p>
                    </form>{/* BUSCA E FILTRO DE SERVIÇOS FINAL */}

                    {servicosFiltrados.length > 0 ? (
                        <div className="grade-servicos">
                            {servicosFiltrados.map((servico) => (
                                <CartaoServico key={servico.id} servico={servico} />
                            ))}
                        </div>
                    ) : (
                        <p>Nenhum serviço encontrado.</p>
                    )}
                </div>{/* INTERFACE DA LISTA DE SERVIÇOS FINAL */}
            </section>{/* LISTA DE SERVIÇOS FINAL */}

        </main>
    )
}

export default Servicos
