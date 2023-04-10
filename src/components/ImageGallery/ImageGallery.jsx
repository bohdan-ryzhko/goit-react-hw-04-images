import { exact, arrayOf,  shape, number, string } from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";

export const ImageGallery = ({ listSearch, isLoading, error, onIncrementPage }) => {

	return (
		<>
			{isLoading && <Loader />}
			{
				listSearch.length > 0 &&
				<>
					<ul className="ImageGallery">
						{
							listSearch.map(({ id, largeImageURL, webformatURL, user }) =>
								<ImageGalleryItem
									key={id}
									largeImageURL={largeImageURL}
									webformatURL={webformatURL}
									user={user}
								/>
							)
						}
					</ul>
					{isLoading && <Loader />}
					<Button incrementPage={onIncrementPage} />
				</>
			}
			{
				error &&
				<ErrorMessage error={error} />
			}
		</>
	)
}

ImageGallery.propTypes = {
	state: exact({
		listSearch: arrayOf(shape({
			id: number,
			largeImageURL: string,
			webformatURL: string,
			user: string,
		})),
		currentPage: number.isRequired
	})
}