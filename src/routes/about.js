import React from 'react';

export default function About(props) {
    const initData = props.staticContext || globalThis.initData || {};
    return (
        <div>
            <h1>About</h1>
            <div>{initData.nickname}</div>
        </div>
    )
}