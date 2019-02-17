import './scss/style.scss';
import React from 'react';
import {render} from 'react-dom';

const App = () => {
    return (
        <div>
            <h3>It works</h3>
            <p>Our amazing application.</p>
            <p>Yes, we can use React with Wordpress.</p>
        </div>
    );
};

render(<App/>, document.getElementById('app'));