//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>,document.getElementById("root"));

//App.js
import React from 'react';
import './style.css';
import Button from './Button';

const App = () => {
    return(
        <div>
            <h1>Hello World</h1>
            <Button title="Applee"/>
            <Button title="Orange"/>
        </div>
    );
};

export default App;

//button.js

import React from 'react';

const Button = ({title}) =>{
    return (
        <div>
            <button className='button'>{title}</button>
        </div>
    )
}

export default Button;