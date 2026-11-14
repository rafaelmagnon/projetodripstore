import { Link, NavLink } from 'react-router-dom'
import logoHeader from '../assets/logo-header.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__logo">
          <img src={logoHeader} alt="Digital Store" />
        </Link>

        <input
          type="search"
          className="header__search"
          placeholder="Pesquisar produto..."
        />

        <div className="header__actions">
          <Link to="/cadastro" className="header__link">Cadastre-se</Link>
          <button className="header__btn">Entrar</button>
          <Link to="/carrinho" className="header__cart" aria-label="Carrinho">
            🛒
          </Link>
        </div>
      </div>

      <nav className="header__nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Produtos
        </NavLink>
        <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : '')}>
          Categorias
        </NavLink>
        <NavLink to="/pedidos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header