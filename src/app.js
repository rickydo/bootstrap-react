import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './appsource.scss';

class App extends React.Component {
    render(){
        return (
            <Jumbotron className="-fluid text-md-center custom" containerFluid={true}>
                    <h1>Building React user interfaces </h1>
                    <p>with bootstrap and SASS</p>
                    <p>
                        <Button className="-primary" href="http://exceedingstatusdo.com" target="_blank" disabled/>
                        <Button className="-outline-danger -sm" disabled/>
                    </p>
                    <Button className="-outline-primary -lg -block" disabled/>
            </Jumbotron>
        )
    }
}

export default App;
