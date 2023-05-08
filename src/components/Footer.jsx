import './Footer.css'
import logo from '../assets/logo-primaria.svg'
import { WhatsappLogo, Phone, InstagramLogo, EnvelopeSimple, MapTrifold } from "@phosphor-icons/react";


function Footer() {

  return (
    <footer id="footer">
      <div className="footer-superpin">
        <div className="footer-logo">
          <img src={logo} alt="logo superpin" />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-contatos">
          <h2>Entre em contato</h2>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=558422261346">
                <WhatsappLogo size={20} color="#ffffff" />
                <p>+55 (84) 2226-1346</p>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="tel:558222261346">
                <Phone size={20} color="#ffffff" />
                <p>+55 (84) 2226-1346</p>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/superpinbr/">
                <InstagramLogo size={20} color="#ffffff" />
                <p>@superpinbr</p>
              </a>
            </li>
            <li>
              <a>
                <EnvelopeSimple size={20} color="#ffffff" />
                <p>contato@superpin.com.br</p>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/jF8Xv4ozc3zQ7Td4A">
                <MapTrifold size={20} color="#ffffff" />
                <p>
                  Av. Eng, Roberto Freire, 1962, Box 312,<br />Capim Macio,
                  Natal/RN. CEP: 59082-095
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer