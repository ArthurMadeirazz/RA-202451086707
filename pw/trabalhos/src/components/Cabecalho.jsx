// CABEÇALHO COMPARTILHADO DO SITE
function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="interface cabecalho-conteudo">
                {/* LOGO FMS */}
                <a className="logo" href="/" aria-label="Página inicial da FMS Motores">
                    <img src="/img/logo-fms.png" alt="" width="83" height="36" />
                </a>{/* LOGO FMS FINAL */}

                {/* MENU PRINCIPAL */}
                <nav className="menu-principal" aria-label="Navegação principal">
                    <ul>
                        <li><a href="/" aria-current="page">Início</a></li>
                        <li><a href="/servicos.html">Serviços</a></li>
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
