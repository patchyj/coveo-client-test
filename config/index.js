export default {
  PORT: process.env.PORT,
  URL: 'https://cloudplatform.coveo.com/rest/search/v2',
  TOKEN: process.env.TOKEN,
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
      TOKEN: process.env.RAPID_API_TOKEN
    },
    KEY: process.env.RAPID_API_KEY
  },
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
};
