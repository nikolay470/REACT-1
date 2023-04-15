import { useState, useEffect } from 'react';
import { Author } from './Author';
import { Form } from './Form';
import { MessageList } from './MessageList';


export function App() {
    const [messages, setMessages] = useState([]);
    const addMessage = (newMess)=>{
        setMessages([...messages, newMess])
    }

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].author === Author.user) {
            const timeout = setTimeout(()=>{
                addMessage({
                text: "hello, user!",
                author: 'bot'
            })}, 2000);
            return ()=> clearTimeout(timeout)
        }
    }, [messages]);

    return (
        <>
        <Form addMessage={addMessage}></Form>
        <MessageList messages={messages}></MessageList>
        </>
    )

}