import './Vamos.scss'
import icon1 from '../assets/icon1-superpin.png'
import icon2 from '../assets/icon2-superpin.png'
import icon3 from '../assets/icon3-superpin.png'

function Vamos() {

  return (
    <section id='vamos'>
      <div className='content-align'>

        <div className='icon'>
          <img src={icon1} alt="pintura" />
          <img src={icon2} alt="limpeza" />
          <img src={icon3} alt="construção" />
        </div>
        <h3>Vamos nos conhecer melhor?</h3>
        <p>Entre em contato agora mesmo para buscarmos a <br />melhor solução para sua obra!</p>

        <a className='btn-p' href="https://google.com" target='_blanck'>Solicitar orçamento</a>
      </div>
    </section>
  )
}

export default Vamos