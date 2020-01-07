export default {
  PORT: process.env.PORT,
  URL: 'https://cloudplatform.coveo.com/rest/search/v2',
  TOKEN: process.env.TOKEN || '058c85fd-3c79-42a3-9236-b83d35588103',
  JSON_PLACEHOLDER: 'https://jsonplaceholder.typicode.com',
  rapidApi: {
    openBrewery: {
      URL:
        'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search',
      HOST: 'brianiswu-open-brewery-db-v1.p.rapidapi.com'
    },
    gws: {
      URL:
        'https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/',
      HOST: 'globalwinescore-global-wine-score-v1.p.rapidapi.com',
      TOKEN: '3ae33ff8d2632c7788e3345a7c2a22c52283f4fa'
    },
    KEY: 'UBlWjlpIqqmsh3hcKQRIrFuDqpXKp1QsP5sjsnmc5SGSSkHOge'
  }
};
