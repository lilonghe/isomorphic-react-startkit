import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(100);
    }, [])

    return <div>
        Hello {count}
        <hr/>
        <Link to='/'>Home</Link><br/>
        <Link to='/about'>About</Link>

        <Switch>
            {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
    </div>
}

export default App;