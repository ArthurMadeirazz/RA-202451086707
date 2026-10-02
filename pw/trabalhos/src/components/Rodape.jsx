// RODAPÉ COMPARTILHADO DO SITE
function Rodape() {
    return (
        <footer className="rodape">
            <div className="interface">
                <div className="rodape-conteudo">
                    <div className="rodape-marca">
                        <a className="logo" href="/" aria-label="Página inicial da FMS Motores">
                            <img src="/img/logo-fms.png" alt="" width="83" height="36" />
                        </a>
                        <p>Retífica e recuperação de motores de linha leve e pesada.</p>
                    </div>{/* MARCA DO RODAPÉ FINAL */}

                    <div className="rodape-coluna">
                        <h2>Contato</h2>
                        <address>
                            <ul>
                                <li><a href="mailto:fms2.motores@gmail.com">fms2.motores@gmail.com</a></li>
                                <li><a href="https://wa.me/5531987142097" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                                <li><a href="https://maps.app.goo.gl/czsmGfjiPvkpVDae9" target="_blank" rel="noopener noreferrer">Ver localização</a></li>
                            </ul>
                        </address>
                    </div>{/* CONTATO DO RODAPÉ FINAL */}

                    <div className="rodape-coluna">
                        <h2>Navegação</h2>
                        <nav aria-label="Navegação do rodapé">
                            <ul>
                                <li><a href="/">Início</a></li>
                                <li><a href="/servicos.html">Serviços</a></li>
                                <li><a href="/sobre.html">Sobre nós</a></li>
                                <li><a href="/orcamento.html">Orçamento</a></li>
                            </ul>
                        </nav>
                    </div>{/* NAVEGAÇÃO DO RODAPÉ FINAL */}
                </div>{/* CONTEÚDO DO RODAPÉ FINAL */}

                <div className="rodape-direitos">
                    <p>&copy; 2026 FMS Motores - Todos os direitos reservados.</p>
                </div>{/* DIREITOS DO RODAPÉ FINAL */}
            </div>{/* INTERFACE DO RODAPÉ FINAL */}
        </footer>
    )
}

export default Rodape
