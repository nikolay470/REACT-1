import './styleMessage.css'

function Message(props) {
    return (
        <h2 className='block'> {props.text} </h2>
    )
}

export default Message;