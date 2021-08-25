import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function About() {
    const dispatch = useDispatch();
    const { userinfo } = useSelector(state => state.session);

    useEffect(() => {
        if (!userinfo) {
            dispatch.session.loadUserinfo();
        }
    }, [])

    return (
        <div>
            <h1>About</h1>
            <div>{userinfo?.name}</div>
        </div>
    )
}