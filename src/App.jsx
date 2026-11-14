import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      {/* O Header fica aqui fora para aparecer em todas as páginas */}
      <Header />

      {/* As rotas mudam apenas o conteúdo do meio */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
          
          {/* Rotas que estavam faltando */}
          <Route path="/categorias" element={<ProductListingPage />} />
          <Route 
            path="/pedidos" 
            element={
              <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '40vh' }}>
                <h2>Meus Pedidos</h2>
                <p style={{ color: '#666', marginTop: '10px' }}>Você ainda não possui pedidos realizados.</p>
              </div>
            } 
          />
          <Route 
            path="/carrinho" 
            element={
              <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '40vh' }}>
                <h2>Meu Carrinho</h2>
                <p style={{ color: '#666', marginTop: '10px' }}>Seu carrinho está vazio no momento.</p>
              </div>
            } 
          />
          <Route 
            path="/cadastro" 
            element={
              <div style={{ padding: '60px 20px', textAlign: 'center', minHeight: '40vh' }}>
                <h2>Criar Conta</h2>
                <p style={{ color: '#666', marginTop: '10px' }}>Preencha seus dados para se cadastrar na Digital Store.</p>
              </div>
            } 
          />
        </Routes>
      </main>

      {/* O Footer fica aqui embaixo para fixar no rodapé de todas as páginas */}
      <Footer />
    </div>
  )
}