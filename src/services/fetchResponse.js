import axios from "axios";

const API_KEY = "33587663-9f49167c56a6d2d024abb7fb5";
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchResponse = async (value, page, signal) => {
	const response = await axios.get(`?q=${value}`, {
		signal,
		params: {
			key: API_KEY,
			page,
			image_type: "photo",
			orientation: "horizontal",
			per_page: 12
		}
	});

	return response;
}