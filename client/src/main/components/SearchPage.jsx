import React, { Component } from "react";
import { FilmsContainer } from "./FilmsContainer.jsx";
import { FilmSearch } from "./FilmSearch.jsx";

const DEFAULT_SEARCH_PARAMETER = "Title";
const DEFAULT_SORT_PARAMETER = "release date";

export class SearchPage extends Component {
	state = {
		films: [],
		quantityOfFilms: 0,
		chosenFilm: null,
		searchBy: DEFAULT_SEARCH_PARAMETER,
		sortBy: DEFAULT_SORT_PARAMETER
	}
	componentDidMount() {
    	this.fetchFilms();
	}
	fetchFilms = () => {
		return fetch("http://reactjs-cdp.herokuapp.com/movies", {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			method: "GET"
		})
			.then(response => response.json())
			.then(result =>
				this.setState({
					films: result.data,
					quantityOfFilms: result.data.length
				})
			);
	}
	searchFilms = () => {};
	onSearchModeClick = () => {
		this.setState({
			chosenFilm: null
		});
	}
	onSearchParameterClick = event => {
		const searchParameter = event.target.dataset.parameter;
		if (searchParameter) {
			this.setState({
				searchBy: searchParameter
			});
		}
	}
	onSortParameterClick = event => {
	  const sortParameter = event.target.dataset.sortParameter;
	  if (sortParameter) {
	    this.setState({
	    	sortBy: sortParameter
	    });
	  }
	}
	chooseFilm = event => {
		const chosenFilm = event.target.dataset.filmId;
		if (chosenFilm) {
			this.setState({
				chosenFilm: this.state.films.find(film => film.id == chosenFilm) || null
			});
		}
	}
	render() {
		return (
			<>
				<FilmSearch
					{...this.state}
					searchFilms={this.searchFilms}
					onSearchModeClick={this.onSearchModeClick}
					onSearchParameterClick={this.onSearchParameterClick}
				/>
				<FilmsContainer
					{...this.state}
					chooseFilm={this.chooseFilm}
					onSortParameterClick={this.onSortParameterClick}
				/>
				<footer>
					<div>
						<p className="logo common-color-1">netflixroulette</p>
					</div>
				</footer>
			</>
		);
	}
}
