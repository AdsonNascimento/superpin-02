// import './Projetos.scss';
import './Projetos.css';

import img01 from '../assets/projetos/img_01.png';
import img02 from '../assets/projetos/img_02.webp';
import img03 from '../assets/projetos/img_03.png';
import img04 from '../assets/projetos/img_04.webp';
import img05 from '../assets/projetos/img_05.png';
import img06 from '../assets/projetos/img_06.webp';
import img07 from '../assets/projetos/img_07.jpg';
import img08 from '../assets/projetos/img_08.webp';
import img09 from '../assets/projetos/img_09.webp';


function Projetos() {
  const projetos = [
    {
      imagem: img01,
      projeto: 'Escola Cei',
      categoria: 'Pintura'
    },
    {
      imagem: img02,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img03,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img04,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img05,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img06,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img07,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img08,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
    {
      imagem: img09,
      projeto: 'Escola sei',
      categoria: 'Pintura',
      urlCategoria: '#'
    },
  ]

  const gap = 30;

  const carousel = document.getElementById("carousel");
  const content = document.getElementById("content");

  const nextImage = () => {
    const prev = document.getElementById("prev");
    carousel.scrollBy(300 + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "block";
    }
  };

  const prevImage = () => {
    const next = document.getElementById("next");
    let width = carousel.offsetWidth;
    carousel.scrollBy(-(width + gap), 0);
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "block";
    }
  };

  return (
    <section id='projetos'>
      <div className="content-align">
        <p>SERVIÇOS PRESTADOS</p>
        <h2>Conheça alguns dos nossos serviços prestados</h2>

        <div id="wrapper">
          <div id="carousel">
            <div id="content">

              {projetos.map((projeto, index) => {
                return (
                  <a className="item" href={projeto.urlCategoria} key={index}>
                    <img src={projeto.imagem} alt={`Imagens da contrução do projeto ${projeto.projeto}`} />
                    <h5>{projeto.projeto}</h5>
                    <span>{projeto.categoria}</span>
                  </a>
                );
              })}

            </div>
          </div>

          <button id="prev" onClick={prevImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
          </button>

          <button id="next" onClick={nextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projetos