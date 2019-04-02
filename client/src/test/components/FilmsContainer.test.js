import { filterFilmsByGenre } from '../../main/components/FilmsContainer.jsx';

test('Check filtering of films by genre', () => {
  expect(filterFilmsByGenre([{
    genres: ['Science Fiction', 'Action', 'Adventure'],
  },
  {
    genres: ['Science Fiction', 'Adventure'],
  },
  {
    genres: ['Drama', 'Adventure'],
  },
  {
    genres: ['Science Fiction', 'Action', 'Adventure', 'Drama'],
  },
  {
    genres: ['Science Fiction', 'Adventure', 'Fantasy'],
  },
  ], ['Action', 'Drama'])).toEqual([{
    genres: ['Science Fiction', 'Action', 'Adventure'],
  },
  {
    genres: ['Drama', 'Adventure'],
  },
  {
    genres: ['Science Fiction', 'Action', 'Adventure', 'Drama'],
  },
  ]);
});
