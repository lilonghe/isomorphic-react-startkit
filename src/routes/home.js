import React from 'react';
import { useSelector } from 'react-redux';
import styles from './home.css';

import logo from '../assets/favicon.svg';

export default function Home() {
    const { messageList } = useSelector(state=>state.message);
    return (
        <div>
            <img src={logo} />
            <h1>Home</h1>
            <ul className={styles.messageList}>
                {messageList.map(item=><li key={item.id}>{item.content}</li>)}
            </ul>
        </div>
    )
}