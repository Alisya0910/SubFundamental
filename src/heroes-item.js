class HeroesItem extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    set Heros(Hero) {
      this._Heros = Hero;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
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
        
        <div class="heroes-info">
          <h2>${this._Heros.name}</h2>
          <p>${this._Heros.description}</p>
        </div>
      `;
    }
  }
  
  customElements.define('heroes-item', HeroesItem);