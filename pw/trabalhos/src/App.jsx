import { Route, Routes } from 'react-router-dom'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import DetalhesServico from './pages/DetalhesServico.jsx'
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx'

// COMPONENTE PRINCIPAL DA APLICAÇÃO
function App() {
    return (
        <>
            <a className="pular-conteudo" href="#conteudo-principal">Pular para o conteúdo</a>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/servicos/:id" element={<DetalhesServico />} />
            </Routes>
            <Rodape />
        </>
    )
}

export default App
