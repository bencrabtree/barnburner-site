import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => {
    return (
        <div className='app'>
                <h1>BarnBurner Solutions, LLC</h1>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
