import { useEffect, useState } from 'react'
import CartaoServico from '../components/CartaoServico.jsx'

function Servicos() {
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        async function carregarServicos() {
            const resposta = await fetch('/data/servicos.json')
            const dados = await resposta.json()

            setServicos(dados)
        }

        carregarServicos()
    }, [])

    return (
        <main id="conteudo-principal">
            <div className="grade-servicos">
                {servicos.map((servico) => (
                    <CartaoServico key={servico.id} servico={servico} />
                ))}
            </div>
        </main>
    )
}

export default Servicos
