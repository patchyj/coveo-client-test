import numbro from 'numbro';
import { get } from 'lodash';

export const truncateString = str => `${str.substring(0, 20)}...`;

export const makeResponsiveColumns = cols => {
  switch (cols) {
    case 2:
      return 'col-2 col-md-4';
    case 3:
      return 'col-3 col-md-4';
    case 6:
      return 'col-6 col-md-12';
    default:
      return 'col';
  }
};

export const makeWineTile = product => ({
  id: product.wine_id,
  name: product.wine,
  location:
    product.regions &&
    product.regions.length &&
    `${product.regions[0]}, ${product.country}`,
  year: product.vintage
});

export const makeBreweryTile = brewery => ({
  id: brewery.id,
  name: brewery.name,
  location: `${brewery.city}, ${brewery.state}`,
  url: brewery.website_url
});

export const makeGenericTile = (product, truncate) => ({
  id: product.raw.tpcodesaq || product.title,
  name:
    truncate && product.title.length > 20
      ? truncateString(product.title)
      : product.title,
  percentScore: `${Math.ceil(product.percentScore)}%`,
  score: `Score: ${numbro(product.score).format({ thousandSeparated: true })}`,
  url: product.uri,
  thumbnail: get(product, 'raw.tpthumbnailuri'),
  price: get(product, 'raw.tpprixnormal')
});

export const createItem = (type, product = {}, truncate) => {
  switch (type) {
    case 'breweries':
      return makeBreweryTile(product);
    case 'wines':
      return makeWineTile(product);
    default:
      return makeGenericTile(product, truncate);
  }
};
