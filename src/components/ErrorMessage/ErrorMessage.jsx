import { string } from "prop-types";

export const ErrorMessage = ({ error }) => (
	<h2 style={{ margin: "0 auto" }}>Request "{error}" is not found :(</h2>
)

ErrorMessage.propTypes = {
	error: string,
}