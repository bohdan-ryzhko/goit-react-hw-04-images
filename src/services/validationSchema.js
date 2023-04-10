import { object, string } from 'yup';

export const validationSchema = object().shape({
	searchQuery: string().required()
});