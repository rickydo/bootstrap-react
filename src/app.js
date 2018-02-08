import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

class App extends React.Component {
    // function called when component is being created
    // constructor will fetch props and give it to Component
    constructor(props) {
        // go to my extended parent and send to its constructor props
        super(props);

        // binding of this will now pass 'this' to onClick
        // otherwise onclick will return undefined
        this.onClick = this.onClick.bind(this);
        this.onReset = this.onReset.bind(this);

        // you only approach this state directly inside the constructor
        this.state = {
            click: 0,
            labels: []
        };
    }

    onClick(e){
        // then you approach it using setState
        // if you were to change the state directly, React will not know that 
        // it has happened
        let labels = this.state.labels.concat([this.state.click]);
        this.setState({
            click: this.state.click + 1,
            labels: labels
        })
    }

    onReset(e){
        this.setState({
            click: 0,
            labels:[]
        })
    }

    render(){
        // () => {} arrow function
        // arrow functions bind 'this' from component 
        // without arrow function 'this' is undefined
        let buttons = this.state.labels.map((value, indx)=> {
            // whenever using dynamic content, we have to set a unique key for rendering session
            return <Button key={value}>{value}</Button>;
        });
        return (
            <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} 
                transitionAppearTimeout={500} transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {/* times have to match scss */}
                <Jumbotron className="-fluid custom" containerFluid={true}>
                        <h1>Building React user interfaces </h1>
                        <p>with bootstrap and SASS</p>
                        <p>
                            <Button className="-primary" href="http://exceedingstatusdo.com" target="_blank" label="Button 1"/>
                            <Button onClick={this.onReset} className="-danger -sm" label="Reset"/>
                        </p>
                    <Button onClick={this.onClick} className="-primary -lg -block" label={this.state.click}/>
                    
                    {/* another react transition group is necessary because the {buttons} are a deeper child */}
                    <ReactCSSTransitionGroup transitionName='app'
                        transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {buttons}
                    </ReactCSSTransitionGroup>
                </Jumbotron>
            </ReactCSSTransitionGroup>
        )
    }
}

export default App;

// props are perfect in scenarios where components itself doesnt need to be aware of a change that it might have
// state are for when you want components to be aware of changes happening within itself

// whenever we send in props, we never change those props
// UNLESS there is a change happening in parent
// BUT a component will never change props on its own\
// the way props changes inside a component are via state

// state is declared in the constructor