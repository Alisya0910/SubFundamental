class AppBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Roboto+Slab:wght@300&display=swap');
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
        h2{
            font-size: 55px;
            margin: auto;
            text-align: center;
            padding-top: 5px;
        }
        </style>
        
        <h2>Indonesian Heroes Finder</h2>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
