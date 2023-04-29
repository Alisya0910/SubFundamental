class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&family=Roboto+Slab:wght@300&display=swap');
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 6px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            margin-left: 400px;
            margin-top: 20px;
          }
          
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #8db6e3;
            font-weight: bold;
            border-radius: 4px;
          }
          
          .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #A5C0DD;
          }
          
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container > input::placeholder {
            color: #A5C0DD;
            font-weight: normal;
          }
          
          .search-container > button {
            width: 30%;
            cursor: pointer;
            margin-left: 5px;
            background-color: #c0d8f2;
            font-family: 'Castoro Titling', cursive;
            font-size: 20px;
            border: 0;
            text-transform: uppercase;
            border-radius: 10px;
          }
          
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
          
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
          
            .search-container > button {
              width: 100%;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
                <input placeholder="Search Heroes" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement')
          .addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);