import './Form_style.css';
import { Author } from './Author';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function Form({ addMessage }) {
    const [text, setText] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        addMessage({
            text: text,
            author: Author.user
        });
        setText('')
    }

    return (
        <>
            <h2>Form</h2>
            <form action="/#" onSubmit={handleSubmit} className="form_div">
                <input type="text" value={text} onChange={(event)=>setText(event.target.value)} />
                <button type='submit'>отправить</button>
            </form>
        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}