import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = ({ setOpenModal, onCloseModal, imageUrl, user }) => {

	const onPressESC = ({ code }) => {
		if (code === "Escape") {
			setOpenModal(false);
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", onPressESC);

		return () => {
			window.removeEventListener("keydown", onPressESC);
		}
	}, [])

	return (
		<div onClick={onCloseModal} className="Overlay">
			<div className="Modal">
				<img src={imageUrl} alt={user} />
			</div>
		</div>
	)
}

Modal.propTypes = {
	onModal: PropTypes.bool,
}