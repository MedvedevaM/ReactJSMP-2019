import { getFilms, getFilmsQuantity, getChosenFilm, getSearchParameter, getSortParameter, getFilteredFilms, filterFilmsByGenre } from "../../../main/store/reducers/reducers";
const store = {
    films: {
        quantityOfFilms: 3,
        chosenFilm: { title: "test" },
        searchBy: "test",
        sortBy: "test",
    }
};
describe("test selectors", () => {
    it("get films selector", () => {
        const store = (parameter) => {
            return {
                films: {
                    sortBy: parameter,
                    films: [{
                        release_date: "2015",
                        vote_average: 3
                    }, {
                        release_date: "2007",
                        vote_average: 2
                    }, {
                        release_date: "2011",
                        vote_average: 1
                    }]
                }
            }
        };
        expect(getFilms(store("test"))).toEqual([{
                release_date: "2015",
                vote_average: 3
            }, {
                release_date: "2007",
                vote_average: 2
            }, {
                release_date: "2011",
                vote_average: 1
            }]
        );
        expect(getFilms(store("rating"))).toEqual([{
                release_date: "2015",
                vote_average: 3
            }, {
                release_date: "2007",
                vote_average: 2
            }, {
                release_date: "2011",
                vote_average: 1
            }]
        );
        expect(getFilms(store("release date"))).toEqual([{
                release_date: "2015",
                vote_average: 3
            }, {
                release_date: "2011",
                vote_average: 1
            }, {
                release_date: "2007",
                vote_average: 2
            }]
        );
    });

    it("getFilmsQuantity selector", () => {
        expect(getFilmsQuantity(store)).toEqual(3);
    });

    it("getChosenFilm selector", () => {
        expect(getChosenFilm(store)).toEqual({ title: "test" });
    });

    it("getSearchParameter selector", () => {
        expect(getSearchParameter(store)).toEqual("test");
    });

    it("getSortParameter selector", () => {
        expect(getSortParameter(store)).toEqual("test");
    });

    it("getFilteredFilms selector", () => {
        expect(getFilteredFilms({})).toEqual([]);
    });

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
})