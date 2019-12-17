import {
  createItem,
  makeResponsiveColumns,
  makeBreweryTile,
  makeGenericTile,
  makeWineTile
} from './helpers';

describe('Helpers', () => {
  describe('makeResponsiveColumns', () => {
    it('should return for: 2 cols', () => {
      const cols = makeResponsiveColumns(2);

      expect(cols).toBe('col-2 col-md-4');
    });
    it('should return for: 3 cols', () => {
      const cols = makeResponsiveColumns(3);

      expect(cols).toBe('col-3 col-md-4');
    });
    it('should return for: 6 cols', () => {
      const cols = makeResponsiveColumns(6);

      expect(cols).toBe('col-6 col-md-12');
    });
    it('should return for: x cols', () => {
      const cols = makeResponsiveColumns(null);

      expect(cols).toBe('col');
    });
  });

  describe('createItem', () => {
    it('createItem: Brewery', () => {
      const type = 'beers';
      const product = {
        id: '1',
        name: 'Some Brewery',
        city: 'London',
        state: 'England',
        website_url: 'www.someUrl.com'
      };

      const item = createItem(type, product);

      expect(item).toEqual({
        id: '1',
        location: 'London, England',
        name: 'Some Brewery',
        url: 'www.someUrl.com'
      });
    });

    it('createItem: Wine', () => {
      const type = 'wines';
      const product = {
        wine_id: '1',
        wine: 'Some wine',
        regions: ['London'],
        country: 'England',
        vintage: '1990'
      };

      const item = createItem(type, product);

      expect(item).toEqual({
        id: '1',
        location: 'London, England',
        name: 'Some wine',
        year: '1990'
      });
    });

    it('createItem: Generic', () => {
      const type = 'blah';
      const product = {
        id: '1',
        title: 'Generic title',
        percentScore: 99.99,
        score: 123.45,
        uri: 'http://www.some_uri.com'
      };

      const item = createItem(type, product);

      expect(item).toEqual({
        id: 'Generic title',
        name: 'Generic title',
        percentScore: '100%',
        score: 'Score: 123.45',
        url: 'http://www.some_uri.com'
      });
    });
  });

  describe('makeGenericTile', () => {
    it('should produce a generic object', () => {
      const tile = makeGenericTile({
        title: 'some name',
        percentScore: 12.34,
        score: 12.34,
        uri: 'blah'
      });

      expect(tile).toEqual({
        id: 'some name',
        name: 'some name',
        percentScore: '13%',
        score: 'Score: 12.34',
        url: 'blah'
      });
    });
  });

  describe('makeBreweryTile', () => {
    it('should produce a generic object', () => {
      const tile = makeBreweryTile({
        id: '2',
        name: 'blah name',
        city: 'Paris',
        state: 'France',
        website_url: 'blah.com'
      });

      expect(tile).toEqual({
        id: '2',
        name: 'blah name',
        location: 'Paris, France',
        url: 'blah.com'
      });
    });
  });

  describe('makeWineTile', () => {
    it('should produce a generic object', () => {
      const tile = makeWineTile({
        wine_id: '2',
        wine: 'blah name',
        regions: ['Paris'],
        country: 'France',
        vintage: '2000'
      });

      expect(tile).toEqual({
        id: '2',
        name: 'blah name',
        location: 'Paris, France',
        year: '2000'
      });
    });
  });
});
