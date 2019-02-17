import './scss/style.scss';
import React from 'react';
import {render} from 'react-dom';
import {Button} from 'reactstrap';

const App = () => {
    return (
        <div>
            <h3>It works</h3>
            <p>Our amazing application.</p>
            <p>Yes, we can use React with Wordpress.</p>
            <Button color="danger">Danger!</Button>
        </div>
    );
};

render(<App/>, document.getElementById('app'));