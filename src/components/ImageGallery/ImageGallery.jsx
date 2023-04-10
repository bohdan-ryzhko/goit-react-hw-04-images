import { exact, arrayOf,  shape, number, string } from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { fetchResponse } from "services/fetchResponse";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";

export const ImageGallery = ({ searchQuery }) => {

	const [searchValue, setSearchValue] = useState(searchQuery);
	const [listSearch, setListSearch] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	let [mistake, setMistake] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async (value, page) => {
			fetchResponse(value, page, controller.signal)
				.then(data => {
					if (!data.status) {
						Promise.reject(data)
					}
						setListSearch(data.data.hits);
					})
				.catch(error => {
					setMistake(error.config.url)
				});
		}

		if (searchQuery !== searchValue && searchValue !== "") {
			setIsLoading(true);
			setCurrentPage(1);
			fetchData(searchQuery, 1);
			setIsLoading(false);
		}

		if (currentPage === 1 && searchQuery !== "") {
			setIsLoading(true);
			setSearchValue(searchQuery);
			fetchData(searchQuery, currentPage);
			setIsLoading(false);
		}

		if (currentPage !== 1) {
			setIsLoading(true);
			fetchResponse(searchQuery, currentPage, controller.signal)
			.then(data => {
				if (!data.status) {
					Promise.reject(data)
				}
				setListSearch(prevList => [...prevList, ...data.data.hits]);
				setIsLoading(false);
			})
			.catch(error => {
				setIsLoading(false);
				setMistake(error.config.url)
			})
		}
	}, [currentPage, searchQuery, searchValue])

	const onIncrementPage = () => {
		setCurrentPage(prevPage => prevPage + 1);
	}

	if (mistake) {
		mistake = mistake.split(/\?q=/).join("");
	}

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
				mistake &&
				<ErrorMessage error={mistake} />
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