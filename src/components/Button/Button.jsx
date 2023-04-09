import { exact, number } from "prop-types";
import { useState } from "react";

export const Button = ({ incrementPage }) => {

	// state = {
	// 	page: 2,
	// }

	const [page, setPage] = useState(2);

	const onIncrementPage = () => {
		setPage(prevPage => prevPage + 1);
		incrementPage(page);
		// this.setState(({ page }) => ({ page: page + 1 }));
		// this.props.incrementPage(this.state);
	}

	return (
		<button
			onClick={onIncrementPage}
			className="Button"
			type="button"
		>
			Load more
		</button>
	)
}

Button.propTypes = {
	state: exact({
		perPage: number.isRequired,
	})
}