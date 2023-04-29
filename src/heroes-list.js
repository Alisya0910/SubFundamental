import './heroes-item.js';

class HeroesList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set Hero(Hero) {
    this._Heros = Hero;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._Heros.forEach(Hero => {
      const HeroItemElement = document.createElement('heroes-item');
      HeroItemElement.Hero = Hero;
      this.shadowDOM.appendChild(HeroItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      #heroesList {
        margin-top: 32px;
        width: 100%;
        padding: 16px;
      }
      
      #heroesList > .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      .heroes {
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      
      .heroes .pic {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      
      .heroes-info {
        padding: 24px;
      }
      
      .heroes-info > h2 {
        font-weight: lighter;
      }
      
      .heroes-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('heroes-list', HeroesList);