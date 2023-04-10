import { string } from "prop-types";
import { Modal } from "components/Modal/Modal";
import { useState } from "react";

export const ImageGalleryItem = ({ largeImageURL, user, webformatURL }) => {
	const [openModal, setOpenModal] = useState(false);

	const handleModal = ({ target }) => {
		if (openModal) {
			if (target.nodeName === "IMG" ) {
				return;
			}
		}
		setOpenModal(prevModal => !prevModal);
	}

	return (
		<>
			<li onClick={handleModal} className="ImageGalleryItem">
				<img className="ImageGalleryItem-image" src={webformatURL} height={300} alt={user} />
			</li>
			{
				openModal &&
				<Modal setOpenModal={setOpenModal} onCloseModal={handleModal} imageUrl={largeImageURL} user={user} />
			}
		</>
	)
}

ImageGalleryItem.propTypes = {
	largeImageURL: string.isRequired,
	user: string.isRequired,
	webformatURL: string,
}