import './scss/style.scss';
import React from 'react';
import {render} from 'react-dom';
import {Button} from 'reactstrap';

const App = () => {
    return (
        <div>
            <h3>It works</h3>
            <p>Amazing React + Webpack + Wordpress Site</p>
            <p>This is our amazing application.</p>
            <p>Yes, we can use React with Wordpress.</p>
            <p><Button color="danger">Yes this is a Bootstrap 4 Button!</Button></p>
        </div>
    );
};

render(<App/>, document.getElementById('app'));