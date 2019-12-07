import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Genre from '../client/src/main/components/Genre';
import Film from '../client/src/main/components/Film';

const genres = ['Action', 'Drama', 'Fantasy'];

storiesOf('Genre', module)
  .add('with many genres', () => (
    <Genre genres={genres} />
  ))
  .add('with one genre', () => (
    <Genre genres={[genres[0]]} />
  ));

const film = { poster_path: 'https://avatars.mds.yandex.net/get-pdb/1105309/b26948f0-22ce-41a3-a690-770e9cbf92ce/s1200',
  genres,
  title: 'KEK',
  id: 'kek',
  release_date: '2007' };

storiesOf('Film', module)
  .add('example of a film', () => (
    <BrowserRouter>
      <Film {...film} />
    </BrowserRouter>
  ));
