import { Link } from 'react-router-dom'

// CARTÃO REUTILIZÁVEL DE SERVIÇO
function CartaoServico({ servico }) {
    return (
        <article className="cartao-servico">
            <div className="cartao-servico-imagem">
                <img
                    src={servico.imagem}
                    alt=""
                    width="167"
                    height="190"
                    loading="lazy"
                    decoding="async"
                />
            </div>{/* IMAGEM DO CARTÃO FINAL */}

            <div className="cartao-servico-conteudo">
                <p className="categoria-servico">{servico.categoria}</p>
                <h3>{servico.nome}</h3>
                <p>{servico.descricao}</p>
                <Link className="link-detalhes" to={`/servicos/${servico.id}`}>Ver detalhes</Link>
            </div>{/* CONTEÚDO DO CARTÃO FINAL */}
        </article>
    )
}

export default CartaoServico
