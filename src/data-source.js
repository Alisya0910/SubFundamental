import heroes from './heroes.js';

class DataSource {
  static searchHero(keyword) {
    return fetch(`https://indonesia-public-static-api.vercel.app/api/heroes?q=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.length > 0) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;