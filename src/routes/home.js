import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
    const { messageList } = useSelector(state=>state.message);
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {messageList.map(item=><li key={item.id}>{item.content}</li>)}
            </ul>
        </div>
    )
}