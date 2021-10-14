import './ErrorMessage.css'

const ErrorMessage = (props) => {
	return (
		<div className={`error__message error__message_${props.name}`}>{props.errorText}</div>
	)
}

export default ErrorMessage
