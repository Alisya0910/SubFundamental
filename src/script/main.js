import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/heroes-list.js'

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const HeroListElement = document.querySelector('heroes-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchHero(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    HeroListElement.heroes = results;
  };

  const fallbackResult = message => {
    HeroListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

/*var main = function () {
    var searchElement = document.querySelector('search-bar');
    var HeroListElement = document.querySelector('heroes-List');
  
    var onButtonSearchClicked = function () {
      var dataSource = new DataSource(renderResult, fallbackResult);
      dataSource.searchHero(searchElement.value);
    };
  
    var renderResult = function (results) {
      HeroListElement.innerHTML = '';
      results.forEach(function (hero) {
        var name = hero.name;
        var birthyear = hero.birth_year;
        var deathyear = hero.death_year;
        var description = hero.description;
        var ascension = hero.ascension_year;
        
        var HeroElement = document.createElement('div');
        HeroElement.setAttribute('class', 'hero');
  
        HeroElement.innerHTML ='<h2>' + name + '</h2> \n' +
            '<p>' + birthyear + '</p>' +
            '<p>' + deathyear + '</p>' +
            '<p>' + description + '</p>' +
            '<p>' + ascension + '</p>'+
            '</div>';
        HeroListElement.appendChild(HeroElement);
      });
    };
  
    var fallbackResult = function (message) {
      HeroListElement.innerHTML = '';
      HeroListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
    };
 
*/
export default main;