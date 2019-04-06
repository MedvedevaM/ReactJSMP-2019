import React from "react";
import { shallow, mount } from "enzyme";
import toJson from 'enzyme-to-json';
import { filterFilmsByGenre, FilmsContainer  } from '../../main/components/FilmsContainer.jsx';
import { Film } from '../../main/components/Film.jsx';

describe("rendering of container with films", () => {
	const films = [{
		budget: 16000000,
		genres: ['Science Fiction', 'Action', 'Adventure'],
		id: 185567,
		overview: "As a child, Ali Neuman narrowly escaped being murdered by Inkhata, a militant political party at war with Nelson Mandela's African National Congress. Only he and his mother survived the carnage of those years. But as with many survivors, the psychological scars remain.",
		poster_path: "https://image.tmdb.org/t/p/w500/xg7Dh7mjevDgznqw9JHYccNo9ZQ.jpg",
		release_date: "2013-12-04",
		revenue: 0,
		runtime: 110,
		tagline: "",
		title: "Zulu",
		vote_average: 6.7,
		vote_count: 200
	}, {
		budget: 150000000,
		genres: ['Science Fiction', 'Adventure'],
		id: 269149,
		overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
		poster_path: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
		release_date: "2016-02-11",
		revenue: 1023784195,
		runtime: 108,
		tagline: "Welcome to the urban jungle.",
		title: "Zootopia",
		vote_average: 7.7,
		vote_count: 6795
	}, {
		budget: 23600000,
		genres: ['Drama', 'Adventure'],
		id: 19908,
		overview: "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
		poster_path: "https://image.tmdb.org/t/p/w500/vUzzDpVrab1BOG3ogxhRGfLN94d.jpg",
		release_date: "2009-10-07",
		revenue: 102391382,
		runtime: 88,
		tagline: "This place is so dead",
		title: "Zombieland",
		vote_average: 7.2,
		vote_count: 4509
	}, {
		budget: 65000000,
		genres: ['Science Fiction', 'Action', 'Adventure', 'Drama'],
		id: 1949,
		overview: "The true story of the investigation of the Zodiac Killer, a serial killer who terrified the San Francisco Bay Area, taunting police with his ciphers and letters.  The case becomes an obsession for four men as their lives and careers are built and destroyed by the endless trail of clues.",
		poster_path: "https://image.tmdb.org/t/p/w500/bgLyOROfFQI3FqYL7jQbiaV8lkN.jpg",
		release_date: "2007-03-02",
		revenue: 84785914,
		runtime: 157,
		tagline: "There's more than one way to lose your life to a killer.",
		title: "Zodiac",
		vote_average: 7.3,
		vote_count: 2780
	}, {
		budget: 40000000,
		genres: ['Science Fiction', 'Adventure', 'Fantasy'],
		id: 97630,
		overview: "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
		poster_path: "https://image.tmdb.org/t/p/w500/yg6IDNucLAEj7E5loTyTnUW2pgb.jpg",
		release_date: "",
		revenue: 132820716,
		runtime: 157,
		tagline: "The Greatest Manhunt in History",
		title: "Zero Dark Thirty",
		vote_average: 6.7,
		vote_count: 2028
	}];
	
	const chosenFilm = {
		budget: 40000000,
		genres: ['Action', 'Drama'],
		id: 97630,
		overview: "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
		poster_path: "https://image.tmdb.org/t/p/w500/yg6IDNucLAEj7E5loTyTnUW2pgb.jpg",
		release_date: "2012-12-19",
		revenue: 132820716,
		runtime: null,
		tagline: "The Greatest Manhunt in History",
		title: "Zero Dark Thirty",
		vote_average: 6.7,
		vote_count: 2028
	};
	
	it('Check filtering of films by genre', () => {
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
	
	it("renders correctly FilmsContainer", () => {
		const filmContainer = shallow( <FilmsContainer films={films} /> );
		expect(toJson(filmContainer)).toMatchSnapshot();
	});
	
	it('Check quantity of rendered films without chosen film', () => {
		const filmContainer = mount( <FilmsContainer films={films} /> );
		expect(filmContainer.find(Film).length).toBe(5);
	});
	
	it('Check quantity of rendered films with chosen film', () => {
		const filmContainer = mount( <FilmsContainer chosenFilm={chosenFilm} films={films} /> );
		expect(filmContainer.find(Film).length).toBe(3);
	});
});


