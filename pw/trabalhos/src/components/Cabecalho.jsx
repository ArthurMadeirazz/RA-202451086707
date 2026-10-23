import { Link, NavLink } from 'react-router-dom'

// CABEÇALHO COMPARTILHADO DO SITE
function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="interface cabecalho-conteudo">
                {/* LOGO FMS */}
                <Link className="logo" to="/" aria-label="Página inicial da FMS Motores">
                    <img src="/img/logo-fms.png" alt="" width="83" height="36" />
                </Link>{/* LOGO FMS FINAL */}

                {/* MENU PRINCIPAL */}
                <nav className="menu-principal" aria-label="Navegação principal">
                    <ul>
                        <li><NavLink to="/" end>Início</NavLink></li>
                        <li><NavLink to="/servicos">Serviços</NavLink></li>
                        <li><a href="/sobre.html">Sobre nós</a></li>
                    </ul>
                </nav>{/* MENU PRINCIPAL FINAL */}

                {/* BOTÃO SOLICITAR ORÇAMENTO */}
                <a className="botao botao-cabecalho" href="/orcamento.html">Solicitar orçamento</a>
            </div>{/* INTERFACE DO CABEÇALHO FINAL */}
        </header>
    )
}

export default Cabecalho
