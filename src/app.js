import React from 'react';

class App extends React.Component {
    render(){
        return (<div className="jumbotron jumbotron-fluid text-md-center" style={{backgroundImage: 'url(img/tree-3097419_960_720.jpg', color:"white"}}>
        <div className="container">
            <h1>Building React user interfaces </h1>
            <p>with bootstrap and SASS</p>
            <p><a className="btn btn-primary" href="http://exceedingstatusdo.com" target="_blank">My Website</a></p>
        </div>
    </div>)
    }
}

export default App;