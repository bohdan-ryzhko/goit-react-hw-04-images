import { func } from "prop-types";
import { SearchForm } from "components/SearchForm/SearchForm";

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