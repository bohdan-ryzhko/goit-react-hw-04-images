import { func } from "prop-types";
import { SearchForm } from "components/SearchForm/SearchForm";
// import { useSearch } from "components/SearchContext/SearchContext";

export const Searchbar = ({ onSubmit }) => {
	return (
		<header className="Searchbar">
			<SearchForm onSubmit={onSubmit} />
		</header>
	)
}

Searchbar.propTypes = {
	onSubmit: func.isRequired,
}