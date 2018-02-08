import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

class App extends React.Component {
    render(){
        return (
            <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} 
                transitionAppearTimeout={500} transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <Jumbotron className="-fluid custom" containerFluid={true}>
                        <h1>Building React user interfaces </h1>
                        <p>with bootstrap and SASS</p>
                        <p>
                            <Button className="-primary" href="http://exceedingstatusdo.com" target="_blank" label="Button 1"/>
                            <Button className="-danger -sm" label="Button 2"/>
                        </p>
                        <Button className="-primary -lg -block" label="Button 3"/>
                </Jumbotron>
            </ReactCSSTransitionGroup>
        )
    }
}

export default App;
