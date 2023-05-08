import { useEffect, useState } from 'react';
import logoPrimary from '../assets/logo-primaria.svg';
import './Header.scss';

function Header() {
  const [isChecked, setIsChecked] = useState(false);
  
  function alterMenu() {
    const sideMenu = document.querySelector('.side-menu');
    const main = document.querySelector('#main');
    
    if (isChecked) {
      
      sideMenu.classList.add('fade-out');
      main.classList.remove('blur')
      
      setTimeout(() => {
        
        sideMenu.classList.remove('fade-out');
        sideMenu.style.display = 'none';

        
      }, 480)
      
    } else {
      
      sideMenu.style.display = 'flex'
      sideMenu.classList.add('fade-in');
      main.classList.add('blur')
      
      setTimeout(() => {
        
        sideMenu.classList.remove('fade-in');
        
      }, 500)
    }
  }
  
  function handleInputChange(event) {
    setIsChecked(event.target.checked);
    alterMenu()
  }
  
  const sideMenu2 = document.querySelector('.side-menu');
  
  useEffect(() => {
    function handleResize() {
      const checkbox = document.querySelector('#menu');
      
      if (window.innerWidth > 750) {
        sideMenu2.style.display = 'flex';
      } else {
        sideMenu2.style.display = 'none';
        checkbox.checked = false;
        setIsChecked(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [sideMenu2]);

  function handleClickMenu(event) {
    const checkbox = document.querySelector('#menu');

    if (event.target.nodeName === 'A') {

      alterMenu()
      checkbox.checked = false;
      setIsChecked(false);

    } else if (event.target.classList.contains('btn-p')) {
      
      alterMenu()
      checkbox.checked = false;
      setIsChecked(false);
    }
  }

  return (
    <header>
      <nav>
        <a href="/">
          <img className='logo-primary' src={logoPrimary} alt="Logo SuperPin" />
        </a>

        <div className='side-menu' onClick={handleClickMenu}>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/#sobre">Sobre a Superpin</a></li>
            <li><a href="/#projetos">Projetos</a></li>
            <li><a href="/#contatos">Contatos</a></li>
          </ul>

          <a className='btn-p' href="https://google.com" target='_blanck'>Entre em contato</a>
        </div>


        <input type="checkbox" name="menu" id="menu" checked={isChecked} onChange={handleInputChange} />
        <label htmlFor="menu" >
          <span className='icon-menu' />
        </label>
      </nav>
    </header>
  )
}

export default Header;
