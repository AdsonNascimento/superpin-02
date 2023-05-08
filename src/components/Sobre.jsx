import AboutVideo from '../assets/video/sobre.mp4'
import CapaSobre from '../assets/capa-video.svg'
import './Sobre.scss'
import { PaintBrushBroad, Virus, Drop, Buildings, ArrowRight } from "@phosphor-icons/react";

function Sobre() {

  

  return (
    <section id='sobre'>
      <div className="content-align">
        <div className='about-text'>
          <h3>Sobre a Superpin</h3>
          <p>Superpin é a solução inteligênte para sua obra!</p>
          <p>Dispomos de um time especializado, com gerenciamento e execução em alta performace para entregarmos o melhor resultado.</p>

          <ul>
            <li>
              <PaintBrushBroad size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='#'>
                Serviços de pintura
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Virus size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='#'>
                Serviços de limpeza
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Drop size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='#'>
                Impermeabilização
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Buildings size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='#'>
                Manutenção de fachada
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
          </ul>
        </div>
        <video
          className='about-video'
          src={AboutVideo}
          poster={CapaSobre}
          onClick={(event) => {
            event.target.setAttribute("controls", true);
          }}
        >
          Esté formato de vídeo não é suportado pelo seu navegador
        </video>
      </div>
    </section>
  )
}

export default Sobre