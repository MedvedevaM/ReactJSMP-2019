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
    
    searchFilms = () => {

    }

    onSearchModeClick = () => {
        this.setState({
            chosenFilm: null
        });
    }

    onSearchParameterClick = (event) => {
        if (event.target.id) {
            this.setState({
                searchBy: event.target.id
            });
        };
    }

    onSortParameterClick = (event) => {
        if (event.target.id) {
            this.setState({
                sortBy: event.target.id
            });
        };
        
    }

    chooseFilm = (event) => {
        if (event.target.id && (event.target.tagName === "IMG" ||  event.target.tagName === "H3")) {
          this.setState({
            chosenFilm: this.state.films.find(
              film => film.id == event.target.id
            )
          });
        }
    }
    componentDidMount() {
        fetch("http://reactjs-cdp.herokuapp.com/movies",
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            .then(response => response.json())
            .then((result) => this.setState({ 
                films: result.data,
                quantityOfFilms: result.data.length
            }));
    }
    render() {
        return (
            <>  
                <FilmSearch {...this.state} 
                    searchFilms={this.searchFilms} 
                    onSearchModeClick={this.onSearchModeClick} 
                    onSearchParameterClick={this.onSearchParameterClick} />
                <FilmsContainer {...this.state}
                    chooseFilm={this.chooseFilm}
                    onSortParameterClick={this.onSortParameterClick} />
                <footer>
                    <div>
                        <p className="logo common-color-1">netflixroulette</p>
                    </div>
                </footer>
            </>
        );
    }
};