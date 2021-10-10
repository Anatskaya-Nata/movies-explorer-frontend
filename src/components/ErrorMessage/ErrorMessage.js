import './ErrorMessage.css'

const ErrorMessage = (props) => {
	return (
		<div
			className={`error__message${
				props.isErrorVisible ? ' error__message_show' : ' error__message_hide'
			}`}
		>
			{props.text}
		</div>
	)
}

export default ErrorMessage
