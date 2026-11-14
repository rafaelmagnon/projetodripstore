
import logoFooter from '../assets/logo-footer.svg';
import fbIcon from "../assets/facebook.svg";
import igIcon from "../assets/instagram.svg";
import twIcon from "../assets/twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <img src={logoFooter} alt="Digital Store" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer__social">
             <a href="#" aria-label="Facebook"><img src={fbIcon} alt="" /></a>
             <a href="#" aria-label="Instagram"><img src={igIcon} alt="" /></a>
             <a href="#" aria-label="Twitter"><img src={twIcon} alt="" /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Informação</h4>
          <a href="#">Sobre Drip Store</a>
          <a href="#">Segurança</a>
          <a href="#">Wishlist</a>
          <a href="#">Blog</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Meus Pedidos</a>
        </div>

        <div className="footer__col">
          <h4>Categorias</h4>
          <a href="#">Camisetas</a>
          <a href="#">Calças</a>
          <a href="#">Bonés</a>
          <a href="#">Headphones</a>
          <a href="#">Tênis</a>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <div className="footer__copy">
        © 2022 Digital Store
      </div>
    </footer>
  )
}

export default Footer