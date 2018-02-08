import React from 'react';
import Button from './bootstrap/button';

class App extends React.Component {
    render(){
        return (<div className="jumbotron jumbotron-fluid text-md-center" style={{backgroundImage: 'url(img/tree-3097419_960_720.jpg', color:"white"}}>
        <div className="container">
            <h1>Building React user interfaces </h1>
            <p>with bootstrap and SASS</p>
            <p>
                <Button className="-primary" href="http://exceedingstatusdo.com" target="_blank"/>
                <Button className="-outline-danger -sm" />
            </p>
            <Button className="-outline-primary -lg -block" />
        </div>
    </div>)
    }
}

export default App;