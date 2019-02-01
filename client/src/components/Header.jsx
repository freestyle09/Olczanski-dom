import React, { Component } from 'react';

class Header extends Component {
  goto = selector => {
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        clearInterval(checkExist);
      }
    }, 100);
    // Close menu after click on link on mobile
    if (this.menu.current.classList.contains('menu-show')) {
      this.menu.current.classList.remove('menu-show');
      this.button.current.classList.remove('show-button');
    }
  };

  gotoHome = () => {
    this.goto('home');
  };

  gotoAboutUs = () => {
    this.goto('about-us');
  };

  gotoLive = () => {
    this.goto('live');
  };

  gotoGallery = () => {
    this.goto('gallery');
  };
  gotoContact = () => {
    this.goto('contact');
  };

  menu = React.createRef();
  button = React.createRef();

  openMenu = () => {
    this.menu.current.classList.toggle('menu-show');
    this.button.current.classList.toggle('show-button');
  };
  render() {
    return (
      <section id='header'>
        <div className='background-image' />
        <div className='container'>
          <div>
            <img src='Logo.png' alt='Olczański Dom' />
          </div>
          <button ref={this.button} onClick={this.openMenu} className='button-aside'>
            Menu
          </button>

          <ul ref={this.menu} className='menu'>
            <li>
              <a onClick={this.gotoHome}>Strona główna</a>
            </li>
            <li>
              <a onClick={this.gotoAboutUs}>O nas</a>
            </li>
            <li>
              <a onClick={this.gotoLive}>Na żywo</a>
            </li>
            <li>
              <a onClick={this.gotoGallery}>Galeria</a>
            </li>
            <li>
              <a onClick={this.gotoContact}>Kontakt</a>
            </li>
          </ul>

          <div>
            <img src='parzenica.png' alt='parzenica' />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
