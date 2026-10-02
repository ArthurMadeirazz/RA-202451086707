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
                <a className="link-detalhes" href={`/detalhes.html#${servico.id}`}>Ver detalhes</a>
            </div>{/* CONTEÚDO DO CARTÃO FINAL */}
        </article>
    )
}

export default CartaoServico
