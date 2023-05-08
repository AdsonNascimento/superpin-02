import { useState, useEffect, useRef } from 'react';
import './Marcas.scss'

import img1 from '../assets/marcas/aagencia-logo.svg';
import img2 from '../assets/marcas/cei.svg';
import img3 from '../assets/marcas/fecomercio.svg';
import img4 from '../assets/marcas/lopes-marinho.svg';
import img5 from '../assets/marcas/marista.svg';
import img6 from '../assets/marcas/nelson-wilians.svg';
import img7 from '../assets/marcas/nordestao.svg';
import img8 from '../assets/marcas/queiroz-atacadao.svg';
import img9 from '../assets/marcas/rui-cadete.svg';
import img10 from '../assets/marcas/sesc.svg';

function Marcas() {

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleAnimationEnd = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener('animationend', handleAnimationEnd);
    return () => {
      carousel.removeEventListener('animationend', handleAnimationEnd);
    };
  });

  return (
    <section id="marcas">
      <div className="content-align">
        <p>EMPRESAS DE DIVERSOS SETORES CONFIAM NAS NOSSAS SOLUÇÕES</p>

        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ref={carouselRef}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Imagem ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marcas;