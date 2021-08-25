import React, { useEffect, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(100);
    }, [])

    return <div>
        Hello {count}
    </div>
}

export default App;