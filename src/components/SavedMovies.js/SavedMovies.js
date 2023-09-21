import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies () {
return (
<section className="saved__movies">
	<SearchForm/>
	<MoviesCardList/>
</section>	
	
)


}
export default SavedMovies;