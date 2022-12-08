import PropTypes from 'prop-types';

export function MessageList({ messages }) {
    return (
        <>
            <ul>
                {messages.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}

MessageList.propTypes = {
    messages: PropTypes.array
}