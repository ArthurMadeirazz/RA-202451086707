import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Servicos from './pages/Servicos.jsx'

// COMPONENTE PRINCIPAL DA APLICAÇÃO
function App() {
    return (
        <>
            <a className="pular-conteudo" href="#conteudo-principal">Pular para o conteúdo</a>
            <Cabecalho />
            <Servicos />
            <Rodape />
        </>
    )
}

export default App
