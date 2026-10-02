import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './pages/Home.jsx'

// COMPONENTE PRINCIPAL DA APLICAÇÃO
function App() {
    return (
        <>
            <a className="pular-conteudo" href="#conteudo-principal">Pular para o conteúdo</a>
            <Cabecalho />
            <Home />
            <Rodape />
        </>
    )
}

export default App
