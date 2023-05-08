import './Banner.scss';
import BannerDesktop from '../assets/banner/banner.svg';
import BannerMobile from '../assets/banner/banner-mobile.svg';

function Banner() {
  return (
    <section id="banner">
      <img id='banner-desktop' src={BannerDesktop} alt="" />
      <img id='banner-mobile' src={BannerMobile} alt="" />

      <div className="content">
        <h1>Para um super serviço, a Superpin.</h1>

        <p>Soluções inteligentes para sua obra</p>

        <a className='btn-p' href="https://google.com" target='_blanck'>Solicite o orçamento</a>
      </div>
    </section>
  )
}

export default Banner