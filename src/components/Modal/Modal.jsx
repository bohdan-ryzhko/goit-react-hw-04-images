import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = ({ setOpenModal, onCloseModal, imageUrl, user }) => {

	useEffect(() => {
		const onPressESC = ({ code }) => {
		if (code === "Escape") {
			setOpenModal(false);
		}
	}
		window.addEventListener("keydown", onPressESC);

		return () => {
			window.removeEventListener("keydown", onPressESC);
		}
	}, [setOpenModal])

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