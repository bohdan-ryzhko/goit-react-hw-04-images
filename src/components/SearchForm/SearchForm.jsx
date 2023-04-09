import { func } from "prop-types";
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { AiOutlineSearch } from "react-icons/ai";

const initialValues = { searchQuery: "" };

const validationSchema = object().shape({
	searchQuery: string().required()
})

export const SearchForm = ({ onSubmit }) => {

	const submitForm = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	}

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitForm}
			>
				<Form className="SearchForm">
					<button className="SearchForm-button" type="submit">
						<AiOutlineSearch size={20} />
					</button>
					<Field
						className="SearchForm-input"
						name="searchQuery"
						autoComplete="off"
						autoFocus
						type="text"
						placeholder="Search images and photos"
					/>
				</Form>
			</Formik>
		</>
	)
}

SearchForm.propTypes = {
	onSubmit: func.isRequired
}