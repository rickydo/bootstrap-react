import React from 'react';
import Button from './bootstrap/button';

class App extends React.Component {
    render(){
        return (<div className="jumbotron jumbotron-fluid text-md-center" style={{backgroundImage: 'url(img/tree-3097419_960_720.jpg', color:"white"}}>
        <div className="container">
            <h1>Building React user interfaces </h1>
            <p>with bootstrap and SASS</p>
            <p>
                <Button className="btn-primary" href="http://exceedingstatusdo.com" target="_blank"/>
                <Button className="btn-danger-outline btn-sm" />
            </p>
            <Button className="btn-primary-outline btn-lg btn-block" />
        </div>
    </div>)
    }
}

export default App;